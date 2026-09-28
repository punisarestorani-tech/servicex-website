import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt — Besplatna Konsultacija',
  description: 'Kontaktirajte ServiceX tim. Besplatna konsultacija o automatizaciji i digitalizaciji vašeg poslovanja - odgovaramo u roku od 24 sata.',
  alternates: { canonical: '/kontakt' },
  openGraph: {
    title: 'Kontakt | ServiceX',
    description: 'Kontaktirajte ServiceX tim za AI automatizaciju vašeg poslovanja.',
    url: '/kontakt',
    images: ['/og-image.png'],
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
