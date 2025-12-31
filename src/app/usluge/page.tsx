import Section from '@/components/Section';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Usluge | ServiceX - AI Automatizacija',
  description: 'Otkrijte naše usluge automatizacije procesa, AI agenata, web aplikacija i sistemskih integracija za vaše poslovanje.',
};

const services = [
  {
    id: 'pracenje-procesa',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    title: 'Sistemi za Praćenje Procesa',
    description: 'Prilagođeni sistemi koji prate svaki korak vašeg poslovanja - od narudžbe do isporuke. Potpuna kontrola, pregled u realnom vremenu i optimizacija troškova.',
    benefits: [
      'Pregled cijelog procesa u realnom vremenu',
      'Automatska obavještenja i eskalacije',
      'Detaljni izvještaji i analitika',
      'Značajna ušteda vremena i troškova',
    ],
    useCases: [
      'Praćenje proizvodnje (fabrike, radionice)',
      'Upravljanje tehničkom službom (hoteli, zgrade)',
      'Praćenje narudžbi od prijema do isporuke',
      'Kontrola kvaliteta i reklamacija',
    ],
    featured: true,
  },
  {
    id: 'automatizacija',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Automatizacija Poslovnih Procesa',
    description: 'Transformišite repetitivne zadatke u automatizovane tokove rada koji štede vrijeme i smanjuju greške.',
    benefits: [
      'Eliminacija ručnog unosa podataka',
      'Automatsko generisanje izvještaja',
      'Workflow automatizacija',
      'Smanjenje operativnih troškova do 50%',
    ],
    useCases: [
      'Obrada faktura i plaćanja',
      'Upravljanje narudžbinama',
      'HR procesi (onboarding, odsustva)',
      'Automatizacija email komunikacije',
    ],
  },
  {
    id: 'ai-agenti',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'AI Agenti i Chatbotovi',
    description: 'Inteligentni digitalni asistenti koji rade 24/7, odgovaraju na upite i rješavaju probleme vaših klijenata.',
    benefits: [
      'Dostupnost 24/7/365',
      'Instant odgovori na česta pitanja',
      'Smanjenje opterećenja tima podrške',
      'Konzistentna kvaliteta usluge',
    ],
    useCases: [
      'Korisnička podrška',
      'Interni helpdesk',
      'Prodajni asistent',
      'Rezervacije i zakazivanje',
    ],
  },
  {
    id: 'aplikacije',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Custom Web Aplikacije',
    description: 'Prilagođene aplikacije i interni alati dizajnirani specifično za vaše poslovne potrebe.',
    benefits: [
      'Rješenje po mjeri',
      'Potpuna kontrola i vlasništvo',
      'Skalabilnost za rast',
      'Integracija sa postojećim sistemima',
    ],
    useCases: [
      'Interni dashboard-i',
      'Sistemi za upravljanje',
      'Klijentski portali',
      'Specijalizovani alati',
    ],
  },
  {
    id: 'integracije',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Sistemske Integracije',
    description: 'Povežite sve vaše poslovne alate u jedinstveni ekosistem koji radi zajedno.',
    benefits: [
      'Jedinstven izvor podataka',
      'Eliminacija duplih unosa',
      'Real-time sinhronizacija',
      'Bolja vidljivost poslovanja',
    ],
    useCases: [
      'CRM integracije (Salesforce, HubSpot)',
      'ERP povezivanje',
      'Email automatizacija',
      'Baze podataka i API-ji',
    ],
  },
  {
    id: 'inovativna-rjesenja',
    icon: (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Inovativna AI Rješenja',
    description: 'Napredna rješenja koja koriste najnovije AI tehnologije za jedinstvena iskustva kupaca i optimizaciju poslovanja.',
    benefits: [
      'Konkurentska prednost',
      'Poboljšano korisničko iskustvo',
      'Smanjenje povrata proizvoda',
      'Inovativni pristup prodaji',
    ],
    useCases: [
      'Virtuelno probavanje odjeće (AR/AI)',
      'AI preporuke proizvoda',
      'Vizualizacija proizvoda u prostoru',
      'Personalizovana korisnička iskustva',
    ],
  },
];

export default function UslugeePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Naše <span className="text-primary">Usluge</span>
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Kompletna rješenja za digitalnu transformaciju vašeg poslovanja.
            Od automatizacije do AI agenata - sve što vam treba za efikasnije poslovanje.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <Section key={service.id} id={service.id} dark={index % 2 === 1}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="text-primary mb-4">{service.icon}</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {service.title}
              </h2>
              <p className="text-lg text-muted mb-6">{service.description}</p>
              <Button href="/kontakt">Saznajte Više</Button>
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card-bg border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Benefiti</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2 text-muted">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card-bg border border-border rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Primjene</h3>
                  <ul className="space-y-2">
                    {service.useCases.map((useCase) => (
                      <li key={useCase} className="flex items-start gap-2 text-muted">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA */}
      <Section>
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nije Vam Jasno Šta Vam Treba?
          </h2>
          <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
            Bez brige - zakažite besplatnu konsultaciju i zajedno ćemo identificirati
            najbolja rješenja za vaše specifične potrebe.
          </p>
          <Button href="/kontakt" size="lg">
            Zakažite Besplatnu Konsultaciju
          </Button>
        </div>
      </Section>
    </>
  );
}
