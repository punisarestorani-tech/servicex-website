'use client';

import { useEffect, useRef, useState } from 'react';

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

export default function CountUp({ value, duration = 1400, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const startedRef = useRef(false);

  const match = value.match(/^(-?\d+(?:[.,]\d+)?)(.*)$/);
  const numericPart = match ? match[1].replace(',', '.') : null;
  const suffix = match ? match[2] : '';
  const target = numericPart !== null ? parseFloat(numericPart) : null;

  useEffect(() => {
    if (target === null) {
      setDisplay(value);
      return;
    }

    setDisplay(`0${suffix}`);

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              const current = target * eased;
              const isFloat = numericPart!.includes('.');
              setDisplay(`${isFloat ? current.toFixed(1) : Math.round(current)}${suffix}`);
              if (t < 1) requestAnimationFrame(tick);
              else setDisplay(value);
            };
            requestAnimationFrame(tick);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, suffix, value, duration, numericPart]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
