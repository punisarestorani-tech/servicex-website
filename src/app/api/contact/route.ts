import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'servicextechmne@gmail.com';
const FROM_EMAIL = 'ServiceX <noreply@servicex.tech>';

interface ContactPayload {
  ime?: string;
  email?: string;
  kompanija?: string;
  poruka?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email servis trenutno nije dostupan.' },
      { status: 500 }
    );
  }

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Nevažeći zahtjev.' }, { status: 400 });
  }

  const ime = body.ime?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const kompanija = body.kompanija?.trim() ?? '';
  const poruka = body.poruka?.trim() ?? '';

  if (!ime || !email || !poruka) {
    return NextResponse.json(
      { error: 'Ime, email i poruka su obavezni.' },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Neispravan email.' }, { status: 400 });
  }

  if (poruka.length > 5000 || ime.length > 200 || email.length > 200 || kompanija.length > 200) {
    return NextResponse.json({ error: 'Polja su predugačka.' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #00B894; border-bottom: 2px solid #00D4AA; padding-bottom: 8px;">Nova poruka sa servicex.tech</h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #555; width: 140px;">Ime:</td>
          <td style="padding: 8px 0;">${escapeHtml(ime)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #555;">Email:</td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        ${
          kompanija
            ? `<tr>
          <td style="padding: 8px 0; font-weight: 600; color: #555;">Kompanija:</td>
          <td style="padding: 8px 0;">${escapeHtml(kompanija)}</td>
        </tr>`
            : ''
        }
      </table>
      <h3 style="margin-top: 24px; color: #333;">Poruka:</h3>
      <div style="background: #f7f7f7; padding: 16px; border-radius: 8px; white-space: pre-wrap; line-height: 1.5;">${escapeHtml(poruka)}</div>
      <p style="margin-top: 24px; font-size: 12px; color: #999;">
        Poslato sa kontakt forme na servicex.tech · ${new Date().toLocaleString('sr-Latn')}
      </p>
    </div>
  `;

  const text = `Nova poruka sa servicex.tech

Ime: ${ime}
Email: ${email}${kompanija ? `\nKompanija: ${kompanija}` : ''}

Poruka:
${poruka}
`;

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nova poruka sa sajta — ${ime}`,
      html,
      text,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Greška pri slanju. Pokušajte ponovo ili nas kontaktirajte direktno.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Unexpected contact-form error:', err);
    return NextResponse.json(
      { error: 'Greška pri slanju. Pokušajte ponovo.' },
      { status: 500 }
    );
  }
}
