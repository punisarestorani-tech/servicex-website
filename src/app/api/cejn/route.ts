import { NextRequest, NextResponse } from 'next/server';

// Relay ka CEJN-u (cejn.gov.me) za aplikaciju „Nabavke radar" na Railway-u.
// Razlog: CEJN odbija konekcije sa Railway/Google Cloud IP opsega, a sa Vercel-a (AWS) prolazi.
// Zaštita: tajni ključ u zaglavlju x-relay-key (env CEJN_RELAY_KEY) + allowlist putanja (samo javni
// read-only endpointi koje radar koristi). Bez ključa u env-u relay je isključen (503).

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
// Frankfurt: iz podrazumijevanog iad1 (AWS us-east-1) cejn.gov.me takođe ne odgovara (04.11.2026)
export const preferredRegion = 'fra1';

const UPSTREAM = 'https://cejn.gov.me';
const ALLOWED = [
  /^\/api\/cadocuments\/GetTenders$/i,
  /^\/api\/caDocuments\/getTenderRounds$/i,
  /^\/api\/caDocuments\/getTenderLots$/i,
  /^\/api\/caDocuments\/getTenderLines$/i,
  /^\/api\/caDocuments\/getConditionsByQuery$/i,
  /^\/api\/caDocuments\/getTenderById$/i,
  /^\/api\/common\/getClassificationValue$/i,
  /^\/api\/values\/ping$/i,
];

function unauthorized(reason: string, status = 401) {
  return NextResponse.json({ error: reason }, { status, headers: { 'Cache-Control': 'no-store' } });
}

async function relay(req: NextRequest, method: 'GET' | 'POST') {
  const key = process.env.CEJN_RELAY_KEY;
  if (!key) return unauthorized('Relay nije konfigurisan (CEJN_RELAY_KEY).', 503);
  if (req.headers.get('x-relay-key') !== key) return unauthorized('Nevažeći ključ.');

  const target = req.nextUrl.searchParams.get('path') ?? '';
  let url: URL;
  try {
    url = new URL(target, UPSTREAM);
  } catch {
    return unauthorized('Nevažeća putanja.', 400);
  }
  if (url.origin !== UPSTREAM || !ALLOWED.some((re) => re.test(url.pathname))) {
    return unauthorized('Putanja nije dozvoljena.', 403);
  }

  const body = method === 'POST' ? await req.text() : undefined;
  try {
    const upstream = await fetch(url, {
      method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; NabavkeRadar/0.1; +https://servicex.tech)',
        Accept: 'application/json',
        ...(body ? { 'Content-Type': 'application/json' } : {}),
      },
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(25_000),
    });
    const text = await upstream.text();
    return new NextResponse(text, {
      status: upstream.status,
      headers: {
        'Content-Type': upstream.headers.get('content-type') ?? 'application/json',
        'Cache-Control': 'no-store',
      },
    });
  } catch (e) {
    const err = e as Error & { cause?: { code?: string; message?: string } };
    const cause = err.cause?.code ? ` [${err.cause.code}] ${err.cause.message ?? ''}` : '';
    return NextResponse.json(
      { error: `CEJN nedostupan: ${err.message ?? String(e)}${cause}`, region: process.env.VERCEL_REGION ?? null },
      { status: 502, headers: { 'Cache-Control': 'no-store' } }
    );
  }
}

export async function GET(req: NextRequest) {
  return relay(req, 'GET');
}

export async function POST(req: NextRequest) {
  return relay(req, 'POST');
}
