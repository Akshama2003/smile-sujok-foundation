import { useState, type ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** Small acupressure-point mark: a dot with a ring. */
export function PointMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" className={className} aria-hidden>
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".45" />
      <circle cx="8" cy="8" r="3" fill="currentColor" />
    </svg>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${light ? 'text-gold-soft' : 'text-leaf'}`}>
      <PointMark className={light ? 'text-gold' : 'text-gold'} />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  light = false,
  className = '',
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <Eyebrow light={light}>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem] ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {lead && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-ink/70'}`}>{lead}</p>}
    </div>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'outline' | 'light' | 'gold';
  arrow?: boolean;
  className?: string;
};

const variants = {
  primary: 'bg-forest text-white hover:bg-forest-dark',
  outline: 'border border-forest/30 bg-white text-forest hover:border-forest hover:bg-sage-50',
  light: 'bg-white text-forest hover:bg-sage-100',
  gold: 'bg-gold text-white hover:bg-[#a97309]',
};

export function Btn({ children, href, onClick, type = 'button', variant = 'primary', arrow = true, className = '' }: BtnProps) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight size={16} />}
    </>
  );
  if (href) {
    const external = href.startsWith('http');
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}

/** Image that falls back to a monogram block when the source cannot load. */
export function SafeImg({ src, alt, className = '', label }: { src: string; alt: string; className?: string; label?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    const initials = (label ?? alt)
      .split(' ')
      .filter((w) => /^[A-Za-z]/.test(w) && w.length > 2)
      .slice(0, 2)
      .map((w) => w[0])
      .join('');
    return (
      <div role="img" aria-label={alt} className={`flex items-center justify-center bg-sage-100 font-display text-4xl font-semibold text-forest/60 ${className}`}>
        {initials || <PointMark className="h-8 w-8 text-gold" />}
      </div>
    );
  }
  return <img src={src} alt={alt} onError={() => setFailed(true)} className={className} />;
}
