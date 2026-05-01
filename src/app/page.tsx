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

const painPoints = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Gubite vrijeme na ručne procese?',
    description: 'Papiri, Excel tabele, ručno kopiranje podataka - sve to krade sate produktivnog rada.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Nemate pregled nad statusom?',
    description: 'Gdje je narudžba? Ko radi na čemu? Što kasni? - Pitanja bez jasnih odgovora.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Greške i propusti?',
    description: 'Ljudska greška je neizbježna kada se sve radi ručno - a greške koštaju.',
  },
];

const caseStudies = [
  {
    category: 'Hotelska tehnička služba',
    title: 'Digitalizacija prijave kvarova',
    problem: 'Ručna prijava kvarova telefonom, sporo obavještavanje majstora, nema evidencije.',
    solution: 'Aplikacija za prijavu kvarova sa fotografijama, automatsko obavještavanje majstora, praćenje statusa i izvještaji.',
    result: '70% brža reakcija na kvarove',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    category: 'Maloprodaja',
    title: 'Virtuelno probavanje odjeće',
    problem: 'Kupci ne znaju kako će odjeća izgledati na njima, velika stopa vraćanja.',
    solution: 'AI aplikacija - kupac napravi selfi, odabere odjevni predmet i vidi sebe u novoj odjeći.',
    result: 'Veća konverzija, manje vraćene robe',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    category: 'Proizvodnja',
    title: 'Praćenje proizvodnog procesa',
    problem: 'Nema pregleda nad statusom narudžbi, kašnjenja se primijete prekasno.',
    solution: 'Sistem za praćenje od prijema narudžbe, kroz proizvodnju, do isporuke - sve u realnom vremenu.',
    result: '50% manje kašnjenja u isporuci',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    category: 'Hotelsko domaćinstvo',
    title: 'Upravljanje spremanjem soba',
    problem: 'Recepcija i domaćice komuniciraju telefonom, nejasan status soba, gosti dolaze u neočišćene sobe.',
    solution: 'Aplikacija gdje recepcija označava sobe za dolazak, domaćice prijavljuju spremnost jednim klikom.',
    result: '0 grešaka u komunikaciji, zadovoljni gosti',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    category: 'Servisne firme',
    title: 'Digitalni servisni izvještaji',
    problem: 'Ručno pisanje izvještaja, neprofesionalan izgled, nema evidencije radova.',
    solution: 'Aplikacija za servisere - unos podataka na terenu, automatski generisan profesionalan izvještaj za klijenta.',
    result: 'Profesionalna dokumentacija, 100% evidencija',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    category: 'Finansije',
    title: 'Praćenje faktura i PDV-a',
    problem: 'Excel tabele, ručno računanje PDV-a, nejasan pregled potrošnje i obaveza.',
    solution: 'Aplikacija za unos faktura, automatsko računanje PDV-a, pregled potrošnje po kategorijama i periodima.',
    result: 'Precizan pregled, 0 grešaka u obračunu',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
      </svg>
    ),
  },
];

const targetAudience = [
  {
    title: 'Proizvodne firme',
    description: 'Praćenje narudžbi, proizvodnje i isporuke u realnom vremenu.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Uslužne firme i servisi',
    description: 'Automatizacija zahtjeva, raspoređivanje i praćenje izvršenja.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Hoteli i ugostiteljstvo',
    description: 'Upravljanje zahtjevima gostiju, tehničkom službom i osobljem.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Trgovine i butici',
    description: 'Inovativna rješenja za poboljšanje korisničkog iskustva.',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote: 'Prije smo gubili sate na telefonske pozive i papire. Sada se kvar prijavi u 30 sekundi, majstor odmah dobije obavještenje, a mi imamo kompletan pregled svega.',
    author: 'Marko P.',
    role: 'Direktor tehničke službe',
    company: 'Hotelska grupacija',
  },
  {
    quote: 'AI probavanje odjeće je potpuno promijenilo način na koji kupci kupuju online. Manje vraćanja, više zadovoljnih kupaca.',
    author: 'Ana K.',
    role: 'Vlasnica',
    company: 'Modni butik',
  },
  {
    quote: 'Konačno vidimo gdje je svaka narudžba u svakom trenutku. Kašnjenja smo smanjili za polovinu jer probleme uočavamo na vrijeme.',
    author: 'Dragan M.',
    role: 'Direktor proizvodnje',
    company: 'Proizvodna firma',
  },
  {
    quote: 'Recepcija označi sobe za dolazak, domaćice vide zadatke na telefonu i jednim klikom prijave da je soba spremna. Više nema zabune oko statusa soba - sve je transparentno.',
    author: 'Jelena S.',
    role: 'Šefica domaćinstva',
    company: 'Hotel 4*',
  },
  {
    quote: 'Naši serviseri sada generišu profesionalne izvještaje direktno iz aplikacije. Klijenti dobiju detaljan pregled urađenog servisa, a mi imamo evidenciju svakog posla.',
    author: 'Nenad R.',
    role: 'Vlasnik',
    company: 'Servisna firma',
  },
  {
    quote: 'Praćenje faktura i PDV-a je bilo noćna mora. Sada sve unosimo u aplikaciju i na kraju mjeseca imamo precizan pregled potrošnje i obaveza - bez stresa.',
    author: 'Milica T.',
    role: 'Finansijski direktor',
    company: 'Trgovinska firma',
  },
];

const faqs = [
  {
    question: 'Koliko traje razvoj i implementacija?',
    answer: 'Zavisi od kompleksnosti projekta. Jednostavniji sistemi mogu biti gotovi za 2-4 sedmice, dok kompleksniji projekti traju 1-3 mjeseca. Nakon analize vaših potreba, dajemo precizniju procjenu.',
  },
  {
    question: 'Da li mogu koristiti sistem na mobilnom telefonu?',
    answer: 'Da, svi naši sistemi su prilagođeni za rad na mobilnim uređajima. Bilo da koristite telefon, tablet ili računar - imat ćete pun pristup.',
  },
  {
    question: 'Šta ako imam specifične zahtjeve?',
    answer: 'Upravo to je naša snaga. Ne prodajemo gotova rješenja - kreiramo sisteme prilagođene vašim specifičnim potrebama i procesima.',
  },
  {
    question: 'Kako izgleda obuka za korištenje?',
    answer: 'Obuka je uključena u svaki projekat. Obučavamo vaš tim za korištenje sistema i ostajemo dostupni za podršku i nakon implementacije.',
  },
  {
    question: 'Da li mogu proširiti sistem kasnije?',
    answer: 'Apsolutno. Sisteme dizajniramo tako da mogu rasti sa vašim poslovanjem. Nove funkcionalnosti se mogu dodati u bilo kojem trenutku.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background/80 via-secondary/50 to-background/80">
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

      {/* Video Demo Section */}
      <Section dark>
        <div className="text-center mb-8">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1 text-primary text-sm mb-4">
            Pogledajte Demo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kako izgleda u praksi?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Pogledajte naše aplikacije u akciji
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Video 1 - Tehnička služba */}
          <div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/ZGgNUOHXnJ0"
                title="Demo - Aplikacija za praćenje tehničke službe"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-muted mt-4">Praćenje rada tehničke službe</p>
          </div>
          {/* Video 2 - Virtuelno probavanje */}
          <div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/zOnQCqwKkPI"
                title="AI aplikacija za butike - Virtuelno probavanje odjeće"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-muted mt-4">AI virtuelno probavanje odjeće</p>
          </div>
          {/* Video 3 */}
          <div>
            <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/i5XIgmOb5bA"
                title="ServiceX Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <p className="text-center text-muted mt-4">ServiceX Demo</p>
          </div>
        </div>
      </Section>

      {/* Pain Points Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Prepoznajete li ove probleme?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Većina firmi se suočava sa istim izazovima - mi ih rješavamo.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="bg-card-bg border border-border rounded-xl p-6 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400 mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-muted">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section dark>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Rezultati koje postižemo
          </h2>
        </div>
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

      {/* Case Studies Section */}
      <Section dark>
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 border border-primary/30 rounded-full px-4 py-1 text-primary text-sm mb-4">
            Naši Projekti
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Primjeri iz prakse
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Pogledajte kako smo pomogli firmama da unaprijede svoje poslovanje
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="bg-card-bg border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    {study.icon}
                  </div>
                  <span className="text-xs text-primary font-medium uppercase tracking-wide">
                    {study.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {study.title}
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-red-400 font-medium">Problem: </span>
                    <span className="text-muted">{study.problem}</span>
                  </div>
                  <div>
                    <span className="text-primary font-medium">Rješenje: </span>
                    <span className="text-muted">{study.solution}</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 border-t border-primary/20 px-6 py-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span className="text-primary font-semibold">{study.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
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

      {/* Target Audience Section */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kome je namijenjeno?
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Radimo sa firmama koje žele unaprijediti svoje poslovanje
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience) => (
            <div
              key={audience.title}
              className="bg-card-bg border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {audience.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {audience.title}
              </h3>
              <p className="text-muted text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Other Services */}
      <Section id="usluge">
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
      <Section dark id="kako-radimo">
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

      {/* Testimonials Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Rezultati govore više od riječi
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-card-bg border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-muted mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted">{testimonial.role}</div>
                <div className="text-sm text-primary">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Često postavljana pitanja
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Odgovori na najčešća pitanja naših klijenata
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-card-bg border border-border rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-start gap-3">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {faq.question}
              </h3>
              <p className="text-muted ml-8">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
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
