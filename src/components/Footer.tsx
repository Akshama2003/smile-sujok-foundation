import { CONTACT, SOCIAL } from '../data';
import Reveal from './Reveal';
import { pad } from './ui';

export default function Footer() {
  return (
    <footer className={`border-t border-white/15 bg-white/10 py-8 backdrop-blur-md ${pad}`}>
      <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1.5">
          <p className="text-sm font-medium text-white">Smile Su-Jok Foundation</p>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">Smiles for all · Since 2015</p>
          <p className="max-w-sm text-sm text-white/70">{CONTACT.address}</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs uppercase tracking-[0.15em] text-white/80 transition-colors duration-300 hover:text-white"
            >
              / {s.label}
            </a>
          ))}
        </div>
      </Reveal>
      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">© 2024–2026 Smile Su-Jok Foundation. All rights reserved.</p>
    </footer>
  );
}
