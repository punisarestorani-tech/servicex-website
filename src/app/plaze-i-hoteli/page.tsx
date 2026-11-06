import Section from '@/components/Section';
import Button from '@/components/Button';
import PageHero from '@/components/PageHero';
import AutoplayVideo from '@/components/AutoplayVideo';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aplikacija za Plaže i Hotele — Bez Papira',
  description:
    'QR naručivanje sa ležaljke, mapa ležaljki uživo, prijava kvarova i ankete gostiju u jednoj aplikaciji. Uvedite je prije sezone — besplatna konsultacija.',
  alternates: { canonical: '/plaze-i-hoteli' },
  openGraph: {
    title: 'Plaža i hotel bez ijednog papirića | ServiceX',
    description:
      'QR naručivanje, mapa ležaljki, prijava kvarova i ankete gostiju — na telefonima koje već imate.',
    url: '/plaze-i-hoteli',
    images: ['/video/servicex-plaze-hoteli-16x9.jpg'],
  },
};

const features = [
  {
    title: 'QR naručivanje sa ležaljke',
    description: 'Gost skenira kod na suncobranu, izabere iz menija i naruči. Narudžba stiže pravo na šank.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2z" />
    ),
  },
  {
    title: 'Mapa ležaljki uživo',
    description: 'U svakom trenutku vidite šta je slobodno, a šta zauzeto — i ko je šta izdao.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5h4v4H4V5zm6 0h4v4h-4V5zm6 0h4v4h-4V5zM4 11h4v4H4v-4zm6 0h4v4h-4v-4zm6 0h4v4h-4v-4zM4 17h4v2H4v-2zm6 0h4v2h-4v-2zm6 0h4v2h-4v-2z" />
    ),
  },
  {
    title: 'Prijava kvarova',
    description: 'Recepcija upiše sobu i kvar, majstor odmah dobije obavještenje, a vi vidite kad je riješeno.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.7 6.3a4 4 0 00-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.5 2.5-2.1-.4-.4-2.1 2-3z" />
    ),
  },
  {
    title: 'Ankete gostiju',
    description: 'Gost ocijeni boravak QR kodom. Loša ocjena stiže odmah — dok je gost još kod vas.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 16.4 7.2 18.9l.9-5.4L4.2 9.7l5.4-.8L12 4z" />
    ),
  },
];

const stats = [
  { value: '20.545', label: 'izdavanja ležaljki', note: 'jedna plaža · jedna sezona' },
  { value: '5.042', label: 'QR narudžbe', note: 'ista plaža · pravo sa ležaljke' },
  { value: '1.410', label: 'anketa gostiju', note: 'hoteli · QR kod i kiosk' },
];

const steps = [
  { number: '01', title: 'Razgovor', description: 'Prođemo kako danas radite i šta vas najviše muči. Besplatno i bez obaveze.' },
  { number: '02', title: 'Izrada po vašoj mjeri', description: 'Mapa vaše plaže, vaš meni, nalozi za vaše osoblje. Ništa generičko.' },
  { number: '03', title: 'Proba i start', description: 'Sve se isproba sa osobljem prije prvog gosta, pa sezona počinje bez sveske.' },
];

export default function PlazeIHoteli() {
  return (
    <>
      <PageHero
        eyebrow="Za plaže i hotele"
        title={
          <>
            Plaža i hotel <span className="text-mint">bez ijednog papirića</span>
          </>
        }
        subtitle="QR naručivanje sa ležaljke, mapa ležaljki uživo, prijava kvarova i ankete gostiju — u jednoj aplikaciji, na telefonima koje već imate."
      >
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/kontakt" size="lg">
            Zakažite Besplatnu Konsultaciju
          </Button>
          <Button
            href="#sta-dobijate"
            variant="outline"
            size="lg"
            className="!border-white/40 !text-white hover:!bg-white hover:!text-[#081320]"
          >
            Šta Dobijate
          </Button>
        </div>
        <div className="mt-14 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-primary/30 bg-black">
          <AutoplayVideo
            className="block w-full aspect-video"
            src="/video/servicex-plaze-hoteli-16x9.mp4"
            poster="/video/servicex-plaze-hoteli-16x9.jpg"
            label="ServiceX — aplikacija za plaže i hotele, video od 46 sekundi"
          />
        </div>
        <p className="mt-4 text-sm text-slate-300">Video traje 46 sekundi. Zvuk uključujete na kontrolama.</p>
      </PageHero>

      <Section id="sta-dobijate">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Šta dobijate</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Četiri stvari koje na plaži i u hotelu najčešće žive na papiru — na jednom mjestu.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-card-bg border border-border rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  {f.icon}
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sezona 2026 u brojkama</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">Sve zabilježeno u aplikaciji, bez ijednog papira.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{s.value}</div>
              <div className="text-foreground font-semibold text-lg">{s.label}</div>
              <div className="text-muted text-sm mt-1">{s.note}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Kako ide uvođenje</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Zima je pravo vrijeme: sistem se postavi i uhoda prije sezone.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div key={s.number} className="bg-card-bg border border-border rounded-2xl p-8 shadow-sm">
              <div className="text-primary font-bold text-sm tracking-widest mb-4">{s.number}</div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Sezona 2027 počinje sada</h2>
          <p className="text-muted text-xl mb-8">
            Zakažite besplatnu konsultaciju — za pola sata znaćete šta se kod vas može srediti prije sezone.
          </p>
          <Button href="/kontakt" size="lg">
            Zakažite Besplatnu Konsultaciju
          </Button>
        </div>
      </Section>
    </>
  );
}
