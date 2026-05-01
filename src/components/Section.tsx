import Reveal from './Reveal';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  animate?: boolean;
}

export default function Section({ children, className = '', id, dark = false, animate = true }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${dark ? 'bg-secondary/70 backdrop-blur-sm' : 'bg-background/70 backdrop-blur-sm'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {animate ? <Reveal>{children}</Reveal> : children}
      </div>
    </section>
  );
}
