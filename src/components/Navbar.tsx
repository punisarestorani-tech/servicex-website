'use client';

import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  { name: 'Početna', href: '/' },
  { name: 'Usluge', href: '/usluge' },
  { name: 'Kako Radimo', href: '/kako-radimo' },
  { name: 'O Nama', href: '/o-nama' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-xl font-bold text-foreground">
              Service<span className="text-primary">X</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg transition-colors duration-200"
            >
              Besplatna Konsultacija
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted hover:text-primary transition-colors duration-200 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg transition-colors duration-200 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Besplatna Konsultacija
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
