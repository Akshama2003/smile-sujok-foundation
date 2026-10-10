import { useState } from 'react';
import { Mail, Menu, Phone, X } from 'lucide-react';
import { CONTACT, logo } from '../data';
import { Container } from './ui';

const links = [
  { label: 'About', href: '#/#about' },
  { label: 'How it works', href: '#/#how' },
  { label: 'Services', href: '#/#services' },
  { label: 'Learn Sujok', href: '#/learn' },
  { label: 'Gallery', href: '#/#gallery' },
  { label: 'Team', href: '#/#team' },
  { label: 'Contact', href: '#/#contact' },
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#/" className="flex items-center gap-3">
      <img src={logo} alt="Smile Sujok Foundation Dehradun logo" className="h-11 w-auto rounded-sm" />
      <span className="leading-tight">
        <span className={`block font-display text-base font-semibold sm:text-lg ${light ? 'text-white' : 'text-ink'}`}>Smile Su-Jok Foundation</span>
        <span className={`hidden text-[11px] font-semibold uppercase tracking-[0.18em] sm:block ${light ? 'text-gold-soft' : 'text-leaf'}`}>Dehradun · Smiles for all</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-forest-dark text-white">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-xs sm:text-[13px]">
          <p className="text-white/80">Affordable Su-Jok healthcare and training since 2015</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a href={CONTACT.phones[0].href} className="flex items-center gap-1.5 hover:text-gold-soft">
              <Phone size={13} /> {CONTACT.phones[0].label}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="hidden items-center gap-1.5 hover:text-gold-soft sm:flex">
              <Mail size={13} /> {CONTACT.email}
            </a>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-sage-200 bg-white/95 backdrop-blur">
        <Container className="flex items-center justify-between gap-6 py-3">
          <Brand />
          <nav className="hidden items-center gap-6 xl:flex" aria-label="Main">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm font-medium text-ink/75 transition-colors hover:text-forest">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#/donate" className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#a97309]">
              Donate
            </a>
            <button className="rounded-full border border-sage-200 p-2.5 xl:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
        {open && (
          <nav className="border-t border-sage-200 bg-white xl:hidden" aria-label="Mobile">
            <Container className="flex flex-col py-2">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="border-b border-sage-100 py-3 text-base font-medium text-ink/85 last:border-0">
                  {l.label}
                </a>
              ))}
            </Container>
          </nav>
        )}
      </header>
    </>
  );
}
