import Section from '@/components/Section';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kako Radimo | ServiceX - AI Automatizacija',
  description: 'Saznajte kako ServiceX pristupa projektima automatizacije - od analize do implementacije i kontinuirane optimizacije.',
};

const steps = [
  {
    number: '01',
    title: 'Analiza i Konsultacija',
    description: 'Sve počinje razumijevanjem vašeg poslovanja.',
    details: [
      'Detaljno mapiranje postojećih procesa',
      'Identifikacija uskih grla i neefikasnosti',
      'Procjena potencijala za automatizaciju',
      'Definisanje prioriteta i ciljeva',
      'Izrada plana implementacije',
    ],
    duration: 'Faza traje 1-2 sedmice',
  },
  {
    number: '02',
    title: 'Dizajn i Razvoj',
    description: 'Kreiramo rješenje prilagođeno vašim potrebama.',
    details: [
      'Arhitektura sistema i workflow dizajn',
      'Razvoj automatizacija i AI agenata',
      'Integracija sa postojećim sistemima',
      'Testiranje u kontrolisanom okruženju',
      'Iteracije na osnovu povratnih informacija',
    ],
    duration: 'Faza traje 2-6 sedmica',
  },
  {
    number: '03',
    title: 'Implementacija',
    description: 'Uvodimo rješenje u vaše poslovanje.',
    details: [
      'Postepeno uvođenje u produkciju',
      'Obuka vašeg tima',
      'Dokumentacija sistema',
      'Paralelno praćenje performansi',
      'Fino podešavanje sistema',
    ],
    duration: 'Faza traje 1-2 sedmice',
  },
  {
    number: '04',
    title: 'Podrška i Optimizacija',
    description: 'Kontinuirano unapređujemo vaš sistem.',
    details: [
      'Praćenje performansi i metrika',
      'Proaktivno održavanje',
      'Redovni izvještaji o rezultatima',
      'Identifikacija novih prilika',
      'Skaliranje uspješnih rješenja',
    ],
    duration: 'Kontinuirana podrška',
  },
];

const principles = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Bez Rizika',
    description: 'Počinjemo sa manjim projektima da dokažemo vrijednost prije velikih investicija.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Partnerski Pristup',
    description: 'Radimo zajedno sa vašim timom, ne umjesto njega. Vaš uspjeh je naš uspjeh.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Brzi Rezultati',
    description: 'Fokusiramo se na quick wins koji donose mjerljivu vrijednost u kratkom roku.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Mjerljivi Rezultati',
    description: 'Sve što radimo je mjerljivo. Pratimo ROI i konstantno optimizujemo.',
  },
];

export default function KakoRadimoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Kako <span className="text-primary">Radimo</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Naš provjereni proces osigurava uspješnu implementaciju i mjerljive rezultate.
            Od prve konsultacije do kontinuirane optimizacije.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <Section>
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute left-[39px] top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-border" />
              )}
              <div className="grid lg:grid-cols-[80px_1fr] gap-6">
                <div className="flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>
                </div>
                <div className="bg-card-bg border border-border rounded-xl p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                      {step.title}
                    </h2>
                    <span className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-lg text-muted mb-6">{step.description}</p>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-muted">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Naši Principi
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Vrijednosti koje nas vode u svakom projektu
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-card-bg border border-border rounded-xl p-6 text-center"
            >
              <div className="text-primary mb-4 flex justify-center">{principle.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {principle.title}
              </h3>
              <p className="text-muted text-sm">{principle.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Spremni da Počnemo?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Prvi korak je besplatna konsultacija. Razgovarajmo o vašem poslovanju
            i kako vam možemo pomoći.
          </p>
          <Button href="/kontakt" size="lg">
            Zakažite Konsultaciju
          </Button>
        </div>
      </Section>
    </>
  );
}
