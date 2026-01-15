import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.servicex.tech'),
  title: {
    default: "ServiceX | AI Automatizacija za Vaš Biznis",
    template: "%s | ServiceX",
  },
  description: "ServiceX pruža AI automatizaciju poslovnih procesa za mala i srednja preduzeća. Smanjite troškove, povećajte efikasnost i transformišite svoje poslovanje.",
  keywords: ["AI automatizacija", "poslovni procesi", "AI agenti", "web aplikacije", "integracije", "CRM", "ERP", "Crna Gora", "digitalizacija", "automatizacija poslovanja"],
  authors: [{ name: "ServiceX", url: "https://www.servicex.tech" }],
  creator: "ServiceX",
  publisher: "ServiceX",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    title: "ServiceX | AI Automatizacija za Vaš Biznis",
    description: "AI automatizacija poslovnih procesa za mala i srednja preduzeća. Smanjite troškove i povećajte efikasnost.",
    url: "https://www.servicex.tech",
    siteName: "ServiceX",
    type: "website",
    locale: "sr_RS",
  },
  twitter: {
    card: "summary_large_image",
    title: "ServiceX | AI Automatizacija za Vaš Biznis",
    description: "AI automatizacija poslovnih procesa za mala i srednja preduzeća.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification here when you have it
    // google: 'your-verification-code',
  },
};

// JSON-LD Structured Data for Organization
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ServiceX',
  url: 'https://www.servicex.tech',
  logo: 'https://www.servicex.tech/logo.png',
  description: 'AI automatizacija poslovnih procesa za mala i srednja preduzeća u Crnoj Gori.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Budva',
    addressCountry: 'ME',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'info@servicex.tech',
  },
  sameAs: [
    'https://www.instagram.com/servicex.tech',
  ],
  areaServed: {
    '@type': 'Country',
    name: 'Montenegro',
  },
  serviceType: ['AI Automation', 'Business Process Automation', 'Web Development'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZYN7MYDX3K"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZYN7MYDX3K');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
