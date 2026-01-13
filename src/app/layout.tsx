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
  title: "ServiceX | AI Automatizacija za Vaš Biznis",
  description: "ServiceX pruža AI automatizaciju poslovnih procesa za mala i srednja preduzeća. Smanjite troškove, povećajte efikasnost i transformišite svoje poslovanje.",
  keywords: "AI automatizacija, poslovni procesi, AI agenti, web aplikacije, integracije, CRM, ERP, Crna Gora",
  authors: [{ name: "ServiceX" }],
  openGraph: {
    title: "ServiceX | AI Automatizacija za Vaš Biznis",
    description: "AI automatizacija poslovnih procesa za mala i srednja preduzeća.",
    type: "website",
    locale: "sr_RS",
  },
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
        src="https://www.googletagmanager.com/gtag/js?id=G-L197BY1HEV"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-L197BY1HEV');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
