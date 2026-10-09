import { useState } from 'react';
import { Hexagon, Menu, X } from 'lucide-react';
import Reveal from './Reveal';
import { pad } from './ui';

const links = [
  { label: 'About', href: '#/#about' },
  { label: 'Events', href: '#/#events' },
  { label: 'Services', href: '#/#services' },
  { label: 'Learn Sujok', href: '#/learn' },
  { label: 'FAQ', href: '#/#faq' },
  { label: 'Contact', href: '#/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/15">
      <div className={`flex items-center justify-between py-4 ${pad}`}>
        <Reveal delay={0}>
          <a href="#/" className="flex items-center gap-2 text-lg font-medium tracking-tight text-white sm:text-xl">
            <Hexagon size={24} strokeWidth={1.5} />
            smilesujok
          </a>
        </Reveal>

        <nav className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={100 + i * 100}>
              <a href={l.href} className="text-sm text-white/85 transition-colors duration-300 hover:text-white">
                {l.label}
              </a>
            </Reveal>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Reveal delay={500}>
            <a
              href="#/donate"
              className="rounded-md border border-white/20 bg-white/15 px-4 py-2 text-xs text-white backdrop-blur-md transition-colors duration-300 hover:bg-white/25 sm:px-5 sm:text-sm"
            >
              Donate Now
            </a>
          </Reveal>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={`flex flex-col gap-4 border-t border-white/15 bg-white/10 py-5 backdrop-blur-md md:hidden ${pad}`}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-sm text-white/90">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
