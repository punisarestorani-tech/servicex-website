import Section from '@/components/Section';
import Button from '@/components/Button';
import ProcessAnimation from '@/components/ProcessAnimation';

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: 'Praćenje Procesa',
    description: 'Pratite svaki korak - od narudžbe do isporuke, u realnom vremenu.',
    featured: true,
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Automatizacija',
    description: 'Eliminišite repetitivne zadatke i oslobodite vrijeme za rast.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI Agenti',
    description: 'Inteligentni asistenti koji rade 24/7 za vas.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Inovativna Rješenja',
    description: 'AR/AI tehnologije za jedinstvena korisnička iskustva.',
  },
];

const stats = [
  { value: '85%', label: 'Manje ručnog rada' },
  { value: '24/7', label: 'Dostupnost sistema' },
  { value: '3x', label: 'Brža obrada' },
  { value: '50%', label: 'Niži operativni troškovi' },
];

const steps = [
  {
    number: '01',
    title: 'Analiza',
    description: 'Mapiramo vaše procese i identifikujemo prilike za unapređenje.',
  },
  {
    number: '02',
    title: 'Razvoj',
    description: 'Kreiramo prilagođeno rješenje za vaše specifične potrebe.',
  },
  {
    number: '03',
    title: 'Implementacija',
    description: 'Uvodimo sistem i obučavamo vaš tim za korištenje.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background via-secondary to-background">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1 text-primary text-sm mb-6">
              Digitalna Transformacija za SMB
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Kontrola Procesa.{' '}
              <span className="text-primary">Ušteda Vremena.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-8 max-w-3xl mx-auto">
              Prilagođeni sistemi za praćenje i upravljanje vašim poslovanjem.
              Od proizvodnje do isporuke - sve na jednom mjestu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" size="lg">
                Zakažite Besplatnu Konsultaciju
              </Button>
              <Button href="/usluge" variant="outline" size="lg">
                Pogledajte Usluge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section dark>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Interactive Process Animation */}
      <Section>
        <ProcessAnimation />
      </Section>

      {/* Featured Service - Process Tracking */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-3 py-1 text-primary text-sm mb-4">
              Naša Glavna Usluga
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Sistemi za Praćenje Procesa
            </h2>
            <p className="text-lg text-muted mb-6">
              Kreiraćemo sistem prilagođen vašem poslovanju koji prati svaki korak -
              od početka do kraja. Potpuna kontrola, pregled u realnom vremenu,
              automatska obavještenja i detaljna analitika.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Pregled cijelog procesa u realnom vremenu',
                'Automatska obavještenja i eskalacije',
                'Detaljni izvještaji i analitika',
                'Značajna ušteda vremena i troškova',
              ].map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-muted">
                  <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
            <Button href="/usluge#pracenje-procesa">Saznajte Više</Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-card-bg border border-border rounded-2xl p-8 text-center max-w-sm">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Prilagođeno Vama</h3>
              <p className="text-muted text-sm">
                Svaki sistem kreiramo od nule prema vašim specifičnim potrebama i procesima.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Services */}
      <Section dark id="usluge">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kompletan Spektar Usluga
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Sve što vam treba za digitalnu transformaciju vašeg poslovanja
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-card-bg border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group ${
                service.featured ? 'border-primary/30' : 'border-border'
              }`}
            >
              {service.featured && (
                <div className="text-xs text-primary mb-2">Glavna Usluga</div>
              )}
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/usluge" variant="secondary">
            Pogledajte Sve Usluge
          </Button>
        </div>
      </Section>

      {/* How It Works Section */}
      <Section id="kako-radimo">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kako Radimo
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Jednostavan proces u tri koraka do optimizovanog poslovanja
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
              )}
              <div className="bg-card-bg border border-border rounded-xl p-8 relative z-10">
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/kako-radimo">
            Saznajte Više o Procesu
          </Button>
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark>
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Spremni za Bolju Kontrolu?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Zakažite besplatnu konsultaciju i saznajte kako možemo optimizovati
            vaše poslovne procese i značajno smanjiti troškove.
          </p>
          <Button href="/kontakt" size="lg">
            Kontaktirajte Nas
          </Button>
        </div>
      </Section>
    </>
  );
}
