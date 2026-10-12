import { CONTACT, SOCIAL } from '../data';
import { Brand } from './Navbar';
import { Container } from './ui';

const cols = [
  {
    title: 'Foundation',
    items: [
      ['About us', '#/about'],
      ['Su-Jok therapy', '#/sujok'],
      ['Services', '#/sujok'],
      ['Team', '#/about'],
      ['Gallery', '#/gallery'],
    ],
  },
  {
    title: 'Get involved',
    items: [
      ['Learn Sujok', '#/learn'],
      ['Courses and fees', '#/learn#levels'],
      ['Donate', '#/donate'],
      ['FAQ', '#/sujok'],
      ['Contact', '#/contact'],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div className="space-y-4">
          <Brand light />
          <p className="max-w-xs text-sm leading-relaxed text-white/70">Natural health through Su-Jok therapy. Our mission, ‘Smiles for All’, is to make holistic healing accessible to everyone, especially those in need.</p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">{c.title}</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {c.items.map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="text-white/80 hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">Visit</p>
          <p className="mt-4 text-sm leading-relaxed text-white/80">{CONTACT.address}</p>
          <p className="mt-3 text-sm text-white/80">{CONTACT.phones.map((p) => p.label).join(' · ')}</p>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-white hover:text-gold-soft">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-xs text-white/60 md:flex-row md:justify-between">
          <p>© 2024–2026 Smile Su-Jok Foundation, Dehradun. All rights reserved.</p>
          <p>Su-Jok is a complementary therapy. It does not replace conventional medical treatment.</p>
        </Container>
      </div>
    </footer>
  );
}
