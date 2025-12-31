'use client';

import { useState, useEffect } from 'react';

const manualProcess = [
  { label: 'Ručni unos', icon: 'edit', delay: 0 },
  { label: 'Čekanje', icon: 'clock', delay: 1 },
  { label: 'Provjera', icon: 'search', delay: 2 },
  { label: 'Slanje', icon: 'send', delay: 3 },
  { label: 'Čekanje', icon: 'clock', delay: 4 },
  { label: 'Završeno', icon: 'check', delay: 5 },
];

const automatedProcess = [
  { label: 'Auto-unos', icon: 'bolt', delay: 0 },
  { label: 'Obrada', icon: 'cog', delay: 0.3 },
  { label: 'Verifikacija', icon: 'shield', delay: 0.6 },
  { label: 'Završeno', icon: 'check', delay: 0.9 },
];

export default function ProcessAnimation() {
  const [isAutomated, setIsAutomated] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(prev => prev + 1);
  }, [isAutomated]);

  const currentProcess = isAutomated ? automatedProcess : manualProcess;

  return (
    <div className="py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Transformišite Svoje Procese
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          Pogledajte kako automatizacija ubrzava i pojednostavljuje vaše poslovanje
        </p>
      </div>

      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-card-bg border border-border rounded-full p-1.5 flex gap-1">
          <button
            onClick={() => setIsAutomated(false)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              !isAutomated
                ? 'bg-red-500/20 text-red-400'
                : 'text-muted hover:text-foreground'
            }`}
          >
            Ručni Proces
          </button>
          <button
            onClick={() => setIsAutomated(true)}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              isAutomated
                ? 'bg-primary text-white'
                : 'text-muted hover:text-foreground'
            }`}
          >
            Automatizovano
          </button>
        </div>
      </div>

      {/* Process visualization */}
      <div className="relative max-w-4xl mx-auto">
        {/* Connection line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 hidden md:block" />

        {/* Steps */}
        <div
          key={animationKey}
          className={`grid gap-4 ${
            isAutomated
              ? 'grid-cols-2 md:grid-cols-4'
              : 'grid-cols-3 md:grid-cols-6'
          }`}
        >
          {currentProcess.map((step, index) => (
            <div
              key={`${step.label}-${index}`}
              className="flex flex-col items-center animate-fade-in"
              style={{
                animationDelay: `${step.delay * 300}ms`,
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${step.delay * 300}ms forwards`
              }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-500 relative z-10 ${
                isAutomated
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : step.icon === 'clock'
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : 'bg-card-bg text-muted border border-border'
              }`}>
                {step.icon === 'edit' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                )}
                {step.icon === 'clock' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {step.icon === 'search' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
                {step.icon === 'send' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
                {step.icon === 'check' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {step.icon === 'bolt' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                )}
                {step.icon === 'cog' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
                {step.icon === 'shield' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )}
              </div>

              {/* Label */}
              <span className={`text-sm text-center ${
                isAutomated ? 'text-foreground font-medium' : 'text-muted'
              }`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats comparison */}
      <div className="mt-12 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
        <div className={`rounded-xl p-5 text-center transition-all duration-500 ${
          isAutomated
            ? 'bg-primary/10 border border-primary/30'
            : 'bg-card-bg border border-border'
        }`}>
          <div className={`text-2xl md:text-3xl font-bold mb-1 ${
            isAutomated ? 'text-primary' : 'text-muted'
          }`}>
            {isAutomated ? '4' : '6'}
          </div>
          <div className="text-xs text-muted">Koraka</div>
        </div>

        <div className={`rounded-xl p-5 text-center transition-all duration-500 ${
          isAutomated
            ? 'bg-primary/10 border border-primary/30'
            : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <div className={`text-2xl md:text-3xl font-bold mb-1 ${
            isAutomated ? 'text-primary' : 'text-red-400'
          }`}>
            {isAutomated ? '~2min' : '~2h'}
          </div>
          <div className="text-xs text-muted">Vrijeme</div>
        </div>

        <div className={`rounded-xl p-5 text-center transition-all duration-500 ${
          isAutomated
            ? 'bg-primary/10 border border-primary/30'
            : 'bg-card-bg border border-border'
        }`}>
          <div className={`text-2xl md:text-3xl font-bold mb-1 ${
            isAutomated ? 'text-primary' : 'text-muted'
          }`}>
            {isAutomated ? '0' : '2'}
          </div>
          <div className="text-xs text-muted">Čekanja</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
