import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import Reveal from './Reveal';

export const pad = 'px-5 sm:px-8 md:px-12';

export function Badge({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <span className="inline-block border-l-2 border-white bg-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white backdrop-blur-md">
        {children}
      </span>
    </Reveal>
  );
}

export function H2({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay} as="h2" className="text-5xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
      {children}
    </Reveal>
  );
}

export function Lead({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <Reveal delay={delay} className={`text-lg leading-relaxed text-white drop-shadow-md sm:text-xl ${className}`}>
      {children}
    </Reveal>
  );
}

export function PrimaryBtn({ children, href, onClick, type }: { children: ReactNode; href?: string; onClick?: () => void; type?: 'button' | 'submit' }) {
  const cls =
    'inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85 sm:text-sm';
  if (href)
    return (
      <a href={href} className={cls}>
        {children}
        <ChevronRight size={14} />
      </a>
    );
  return (
    <button type={type ?? 'button'} onClick={onClick} className={cls}>
      {children}
      <ChevronRight size={14} />
    </button>
  );
}

export function GlassBtn({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-medium text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/20 sm:text-sm"
    >
      {children}
    </a>
  );
}

export function Panel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md ${className}`}>{children}</div>;
}

export function Section({ id, children, className = '' }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={`flex min-h-screen flex-col justify-between gap-12 pb-12 pt-24 supports-[height:100svh]:min-h-[100svh] sm:pt-28 md:pb-16 ${pad} ${className}`}
    >
      {children}
    </section>
  );
}

export const Spacer = () => <div className="h-[80vh]" aria-hidden />;
