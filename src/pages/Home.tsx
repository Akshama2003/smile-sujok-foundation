import { useState } from 'react';
import { ChevronRight, Mail, MapPin, Phone, Plus } from 'lucide-react';
import Reveal from '../components/Reveal';
import { Badge, GlassBtn, H2, Lead, Panel, PrimaryBtn, Section, Spacer, pad } from '../components/ui';
import { CONTACT, EVENTS, FAQS, SERVICES, TEAM, TESTIMONIALS } from '../data';

const mono = 'font-mono text-xs uppercase tracking-[0.15em]';

function Hero() {
  const list = ['/ SUJOK THERAPY', '/ HOME SERVICES', '/ TRAINING & EVENTS'];
  const t = TEAM[0];
  return (
    <Section id="top">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <div className="flex flex-col gap-2">
          {list.map((s, i) => (
            <Reveal key={s} delay={150 + i * 120} className={`${mono} text-white/90 drop-shadow-md`}>
              {s}
            </Reveal>
          ))}
        </div>
        <Lead delay={300} className="max-w-xs sm:text-right">
          Providing affordable healthcare and education to the community since 2015 — supporting the poorer among poor with quality medical services.
        </Lead>
      </div>

      <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
        <div className="self-start md:self-end">
          <div className="mb-5">
            <Badge delay={150}>27 Centers Across India</Badge>
          </div>
          <Reveal delay={280} as="h1" className="text-5xl font-normal leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            Healing hands.
            <br />
            Smiles for all.
          </Reveal>
        </div>

        <Reveal delay={420} className="self-start md:self-end">
          <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
            <img src={t.image} alt={`${t.name}, ${t.role}`} className="h-24 w-20 rounded-lg object-cover" />
            <div className="flex flex-col gap-1.5 pr-2">
              <p className="text-sm font-medium text-white">Talk with Dr. Subhash</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">President of Foundation</p>
              <a
                href={CONTACT.phones[0].href}
                className="mt-1.5 inline-flex items-center gap-1 self-start rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85"
              >
                Call {CONTACT.phones[0].label}
                <ChevronRight size={14} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function About() {
  const stats = [
    { n: '27', l: 'Healthcare centers' },
    { n: '2015', l: 'Serving since' },
    { n: '12+', l: 'Years of practice' },
  ];
  return (
    <Section id="about">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <Badge delay={120}>About Smile Su-Jok Foundation</Badge>
        <Lead delay={220} className="max-w-sm sm:text-right">
          Our mission, ‘Smiles for All’, is making holistic healing accessible to everyone, especially those in need.
        </Lead>
      </div>

      <div className="flex flex-1 flex-col items-end justify-end gap-12 md:flex-row md:justify-between md:gap-16">
        <div className="max-w-xl self-start md:self-end">
          <H2 delay={180}>
            Natural health,
            <br />
            for everyone.
          </H2>
          <Reveal delay={320} className="mt-6 max-w-md text-sm text-white/80 drop-shadow-md sm:text-base">
            At Smile Su-Jok Foundation, we are dedicated to promoting natural health through Sujok therapy — a simple, side-effect-free method of healing through the hands and feet.
          </Reveal>
          <Reveal delay={420} className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="#/learn">Know &amp; Learn Sujok</PrimaryBtn>
            <GlassBtn href="#/donate">Donate now</GlassBtn>
          </Reveal>
        </div>

        <Panel className="w-full max-w-md px-5 sm:px-6">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={300 + i * 110} className={`flex items-baseline gap-5 py-5 ${i < stats.length - 1 ? 'border-b border-white/15' : ''}`}>
              <span className="font-mono text-[11px] tracking-[0.15em] text-white/55">0{i + 1}</span>
              <span className="text-4xl font-normal tracking-tight text-white sm:text-5xl">{s.n}</span>
              <span className="text-sm text-white/70">{s.l}</span>
            </Reveal>
          ))}
        </Panel>
      </div>
    </Section>
  );
}

function Events() {
  return (
    <Section id="events" className="justify-start">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <Badge>Upcoming Events</Badge>
        <Lead className="max-w-sm sm:text-right">
          From training camps to international conferences, something for everyone interested in Sujok therapy and community health awareness.
        </Lead>
      </div>
      <H2>
        Join us through
        <br />
        the year.
      </H2>
      <div className="grid gap-4 md:grid-cols-3">
        {EVENTS.map((e, i) => (
          <Reveal key={e.title} delay={i * 110}>
            <Panel className="overflow-hidden">
              <img src={e.image} alt={e.alt} loading="lazy" className="h-56 w-full object-cover" />
              <div className="p-5">
                <h3 className="text-lg font-medium text-white">{e.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">{e.body}</p>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section id="services" className="justify-start">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <Badge>Our Services</Badge>
        <Lead className="max-w-sm sm:text-right">
          Personalized, natural and holistic care — without the need for medication.
        </Lead>
      </div>
      <H2>
        Comprehensive
        <br />
        Sujok therapy.
      </H2>
      <Reveal className="max-w-md text-sm text-white/80 drop-shadow-md sm:text-base">
        Our experienced practitioners promote healing and well-being through advanced Sujok techniques, targeting specific acupressure points on the hands and feet.
      </Reveal>
      <Panel className="w-full max-w-2xl px-5 sm:px-6">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={200 + i * 110} className={`group flex gap-5 py-5 ${i < SERVICES.length - 1 ? 'border-b border-white/15' : ''}`}>
            <span className="font-mono text-[11px] tracking-[0.15em] text-white/55">0{i + 1}</span>
            <div>
              <h3 className="flex items-center gap-1 text-base font-medium text-white sm:text-lg">
                {s.title}
                <ChevronRight size={16} className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/70">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </Panel>
    </Section>
  );
}

function Team() {
  return (
    <Section id="team" className="justify-start">
      <Badge>Our Team</Badge>
      <H2>
        The people
        <br />
        behind the smile.
      </H2>
      <div className="grid gap-4 md:max-w-3xl md:grid-cols-2">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 130}>
            <div className="flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
              <img src={m.image} alt={m.name} loading="lazy" className="h-28 w-24 shrink-0 rounded-lg object-cover" />
              <div className="flex flex-col gap-1.5 pr-2">
                <p className="text-base font-medium text-white">{m.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">{m.role}</p>
                <p className="text-sm leading-relaxed text-white/75">{m.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section id="stories" className="justify-start">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <Badge>Transformative Healing</Badge>
        <Lead className="max-w-sm sm:text-right">Our patients share their inspiring journeys of recovery and hope.</Lead>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal key={t.name} delay={(i % 3) * 110}>
            <Panel className="flex h-full flex-col justify-between gap-6 p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-white/85">“{t.quote}”</p>
              <div>
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">{t.role}</p>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Panel className="w-full max-w-2xl px-5 sm:px-6">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 70} className={i < items.length - 1 ? 'border-b border-white/15' : ''}>
          <button className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="text-base font-medium text-white sm:text-lg">{f.q}</span>
            <Plus size={16} className={`shrink-0 text-white/60 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
          </button>
          {open === i && <p className="-mt-2 pb-5 text-sm leading-relaxed text-white/70">{f.a}</p>}
        </Reveal>
      ))}
    </Panel>
  );
}

function Faq() {
  return (
    <Section id="faq" className="justify-start">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <Badge>Frequently Asked Questions</Badge>
        <Lead className="max-w-sm sm:text-right">Common questions about our services and the benefits of our holistic approach.</Lead>
      </div>
      <H2>
        Know before
        <br />
        you heal.
      </H2>
      <FaqList items={FAQS} />
    </Section>
  );
}

function Contact() {
  const rows = [
    { icon: Mail, title: 'Email us', body: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Phone, title: 'Call us', body: CONTACT.phones.map((p) => p.label).join('  ·  '), href: CONTACT.phones[0].href },
    {
      icon: MapPin,
      title: 'Visit us',
      body: CONTACT.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`,
    },
  ];
  return (
    <Section id="contact">
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <Badge>Get in Touch</Badge>
        <Lead className="max-w-sm sm:text-right">Contact us for more information about our services and how we can help you.</Lead>
      </div>
      <div className="flex flex-1 flex-col items-end justify-end gap-12 md:flex-row md:justify-between md:gap-16">
        <div className="max-w-xl self-start md:self-end">
          <H2>
            Let’s talk,
            <br />
            let’s heal.
          </H2>
          <Reveal delay={320} className="mt-6 max-w-md text-sm text-white/80 drop-shadow-md sm:text-base">
            We also offer home services, and professionals outside India work with their own patients.
          </Reveal>
          <Reveal delay={420} className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href={CONTACT.phones[0].href}>Call now</PrimaryBtn>
            <GlassBtn href="#/donate">Donate</GlassBtn>
          </Reveal>
        </div>
        <Panel className="w-full max-w-md px-5 sm:px-6">
          {rows.map((r, i) => (
            <Reveal key={r.title} delay={300 + i * 110} className={i < rows.length - 1 ? 'border-b border-white/15' : ''}>
              <a href={r.href} target={r.title === 'Visit us' ? '_blank' : undefined} rel="noreferrer" className="group flex gap-5 py-5">
                <r.icon size={18} className="mt-0.5 shrink-0 text-white/60" />
                <div>
                  <h3 className="flex items-center gap-1 text-base font-medium text-white sm:text-lg">
                    {r.title}
                    <ChevronRight size={16} className="text-white/40 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white" />
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{r.body}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </Panel>
      </div>
    </Section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Spacer />
      <About />
      <Events />
      <Services />
      <Team />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  );
}
