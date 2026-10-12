import { useState } from 'react';
import { Mail, Menu, Phone, X } from 'lucide-react';
import { CONTACT, logo } from '../data';
import { Container } from './ui';

const links = [
  { label: 'Home', href: '#/', path: '/' },
  { label: 'About', href: '#/about', path: '/about' },
  { label: 'Su-Jok', href: '#/sujok', path: '/sujok' },
  { label: 'Learn', href: '#/learn', path: '/learn' },
  { label: 'Gallery', href: '#/gallery', path: '/gallery' },
  { label: 'Contact', href: '#/contact', path: '/contact' },
];

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a href="#/" className="flex items-center gap-3 sm:gap-4">
      <img src={logo} alt="Smile Sujok Foundation Dehradun logo" className="h-14 w-auto rounded-md shadow-sm sm:h-[4.5rem]" />
      <span className="leading-tight">
        <span className={`block font-display text-[1.05rem] font-bold sm:text-2xl ${light ? 'text-white' : 'text-ink'}`}>Smile Su-Jok Foundation</span>
        <span className={`hidden text-[10px] font-semibold uppercase tracking-[0.2em] sm:block sm:text-xs ${light ? 'text-gold-soft' : 'text-leaf'}`}>Dehradun · Smiles for all</span>
      </span>
    </a>
  );
}

export default function Navbar({ path = '/' }: { path?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-forest-dark text-white">
        <Container className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 py-2 text-xs sm:text-[13px]">
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
        <Container className="flex items-center justify-between gap-4 py-3">
          <Brand />
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
            {links.map((l) => (
              <a key={l.label} href={l.href} aria-current={path === l.path ? 'page' : undefined} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${path === l.path ? 'bg-forest text-white' : 'text-ink/75 hover:bg-sage-100 hover:text-forest'}`}>
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
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className={`border-b border-sage-100 py-3 text-base font-medium last:border-0 ${path === l.path ? 'text-forest' : 'text-ink/85'}`}>
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
