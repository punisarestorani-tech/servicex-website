import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktirajte ServiceX tim. Razgovarajmo o tome kako možemo automatizovati i unaprijediti vaše poslovanje.',
  openGraph: {
    title: 'Kontakt | ServiceX',
    description: 'Kontaktirajte ServiceX tim za AI automatizaciju vašeg poslovanja.',
  },
};

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
