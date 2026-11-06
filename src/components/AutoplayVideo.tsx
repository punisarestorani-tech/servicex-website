'use client';

import { useEffect, useRef } from 'react';

interface AutoplayVideoProps {
  src: string;
  poster?: string;
  className?: string;
  label?: string;
}

/**
 * Video koji kreće sam, bez zvuka, i vrti se u krug; zvuk se pali na kontrolama.
 * `muted` se postavlja i iz koda jer ga React ne upisuje u HTML sa servera,
 * pa bi pregledač inače blokirao automatsko puštanje.
 */
export default function AutoplayVideo({ src, poster, className = '', label }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {
      /* pregledač nije dozvolio automatsko puštanje — ostaje poster i dugme za start */
    });
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      autoPlay
      muted
      loop
      playsInline
      controls
      preload="metadata"
    />
  );
}
