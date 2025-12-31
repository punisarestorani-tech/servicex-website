'use client';

import Section from '@/components/Section';
import Button from '@/components/Button';
import { useState } from 'react';

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'servicextechmne@gmail.com',
    href: 'mailto:servicextechmne@gmail.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    label: 'Instagram',
    value: '@servicexmne2025',
    href: 'https://www.instagram.com/servicexmne2025/',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Lokacija',
    value: 'Crna Gora',
    href: null,
  },
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    kompanija: '',
    poruka: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ ime: '', email: '', kompanija: '', poruka: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Kontaktirajte</span> Nas
          </h1>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Imate pitanje ili želite da razgovaramo o vašem projektu?
            Javite nam se - odgovorićemo u roku od 24 sata.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card-bg border border-border rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Pošaljite Nam Poruku
            </h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Hvala na poruci!
                </h3>
                <p className="text-muted mb-6">
                  Odgovorićemo vam u najkraćem mogućem roku.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="secondary">
                  Pošalji Novu Poruku
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ime" className="block text-sm font-medium text-foreground mb-2">
                      Ime i Prezime *
                    </label>
                    <input
                      type="text"
                      id="ime"
                      name="ime"
                      required
                      value={formData.ime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted"
                      placeholder="Vaše ime"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Adresa *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted"
                      placeholder="vas@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="kompanija" className="block text-sm font-medium text-foreground mb-2">
                    Naziv Kompanije
                  </label>
                  <input
                    type="text"
                    id="kompanija"
                    name="kompanija"
                    value={formData.kompanija}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted"
                    placeholder="Naziv vaše kompanije"
                  />
                </div>
                <div>
                  <label htmlFor="poruka" className="block text-sm font-medium text-foreground mb-2">
                    Poruka *
                  </label>
                  <textarea
                    id="poruka"
                    name="poruka"
                    required
                    rows={5}
                    value={formData.poruka}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors text-foreground placeholder-muted resize-none"
                    placeholder="Opišite kako vam možemo pomoći..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  {isSubmitting ? 'Slanje...' : 'Pošalji Poruku'}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Kontakt Informacije
            </h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 bg-card-bg border border-border rounded-xl p-4"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <div className="text-sm text-muted">{info.label}</div>
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-foreground">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card-bg border border-border rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Šta Možete Očekivati?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Odgovor u roku od 24 sata</span>
                </li>
                <li className="flex items-start gap-3 text-muted">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Besplatna inicijalna konsultacija</span>
                </li>
                <li className="flex items-start gap-3 text-muted">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Konkretni prijedlozi za vaš biznis</span>
                </li>
                <li className="flex items-start gap-3 text-muted">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Bez obaveza i pritiska</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section dark>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Česta Pitanja
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'Koliko košta konsultacija?',
              a: 'Inicijalna konsultacija je potpuno besplatna. Tokom nje ćemo razgovarati o vašim potrebama i vidjeti kako možemo pomoći.',
            },
            {
              q: 'Koliko traje implementacija?',
              a: 'Zavisi od projekta. Manji projekti mogu biti gotovi za 2-4 sedmice, dok kompleksniji zahtijevaju više vremena. Tačnu procjenu dajemo nakon analize.',
            },
            {
              q: 'Da li radite sa firmama van Crne Gore?',
              a: 'Da, radimo sa klijentima iz cijelog regiona. Komunikacija se može odvijati online bez ikakvih problema.',
            },
            {
              q: 'Šta ako nisam siguran šta mi treba?',
              a: 'To je potpuno u redu! Upravo zato postoji besplatna konsultacija - zajedno ćemo identificirati prilike i prioritete.',
            },
          ].map((faq) => (
            <div key={faq.q} className="bg-card-bg border border-border rounded-xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-muted">{faq.a}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
