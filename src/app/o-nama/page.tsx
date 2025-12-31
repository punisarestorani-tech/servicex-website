import Section from '@/components/Section';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O Nama | ServiceX - AI Automatizacija',
  description: 'Upoznajte ServiceX - tim stručnjaka posvećen transformaciji poslovanja kroz AI i automatizaciju.',
};

const values = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Inovacija',
    description: 'Konstantno istražujemo nove tehnologije i pristupe kako bismo vam pružili najbolja rješenja.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Pouzdanost',
    description: 'Ispunjavamo obećanja. Naši sistemi rade 24/7 sa visokom dostupnošću i pouzdanošću.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Partnerstvo',
    description: 'Gradimo dugoročne odnose sa klijentima. Vaš uspjeh je naš prioritet.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Efikasnost',
    description: 'Fokusiramo se na rješenja koja donose konkretne, mjerljive rezultate.',
  },
];

const whyUs = [
  {
    title: 'Fokus na Mala i Srednja Preduzeća',
    description: 'Razumijemo izazove sa kojima se susreću manja preduzeća. Naša rješenja su prilagođena vašem budžetu i potrebama.',
  },
  {
    title: 'Jednostavnost Prije Svega',
    description: 'Ne komplikujemo stvari. Naša rješenja su intuitivna i laka za korištenje - vaš tim će ih brzo prihvatiti.',
  },
  {
    title: 'Mjerljivi Rezultati',
    description: 'Sve što radimo možete izmjeriti. Pratimo ROI i osiguravamo da investicija ima smisla.',
  },
  {
    title: 'Kontinuirana Podrška',
    description: 'Ne nestajemo nakon implementacije. Tu smo za podršku, optimizaciju i rast zajedno sa vama.',
  },
];

export default function ONamaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O <span className="text-primary">Nama</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            ServiceX je tim stručnjaka posvećen tome da AI i automatizacija postanu dostupni
            malim i srednjim preduzećima.
          </p>
        </div>
      </section>

      {/* Mission */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Naša Misija
            </h2>
            <p className="text-lg text-muted mb-4">
              Vjerujemo da AI i automatizacija ne bi trebali biti privilegija velikih korporacija.
              Naša misija je učiniti ove tehnologije pristupačnim i razumljivim za svako preduzeće.
            </p>
            <p className="text-lg text-muted mb-4">
              Svaki dan, vlasnici malih biznisa gube sate na repetitivne zadatke koje bi mašina
              mogla obaviti u sekundi. Naš cilj je osloboditi to vrijeme za ono što je zaista važno
              - rast vašeg poslovanja.
            </p>
            <p className="text-lg text-muted">
              Pristupamo svakom projektu kao partnerstvu, ne kao prodaji. Vaš uspjeh je jedini
              način da mi uspijemo.
            </p>
          </div>
          <div className="bg-card-bg border border-border rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted">Fokus na SMB</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted">Dostupnost sistema</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">CG</div>
                <div className="text-muted">Bazirani u Crnoj Gori</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">AI</div>
                <div className="text-muted">Najnovije tehnologije</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Naše Vrijednosti
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Principi koji vode sve što radimo
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card-bg border border-border rounded-xl p-6 text-center"
            >
              <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Us */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Zašto ServiceX?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Šta nas čini drugačijim
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {whyUs.map((item) => (
            <div
              key={item.title}
              className="bg-card-bg border border-border rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Želite da Sarađujemo?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Rado ćemo razgovarati o tome kako možemo pomoći vašem poslovanju.
            Javite nam se za besplatnu konsultaciju.
          </p>
          <Button href="/kontakt" size="lg">
            Kontaktirajte Nas
          </Button>
        </div>
      </Section>
    </>
  );
}
