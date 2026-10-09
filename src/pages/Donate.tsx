import { useState, type FormEvent } from 'react';
import Reveal from '../components/Reveal';
import { Badge, GlassBtn, H2, Lead, Panel, PrimaryBtn, Section, Spacer } from '../components/ui';
import { CONTACT, DRIVES, DRIVE_TAGS, TEAM } from '../data';

const input =
  'w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-md transition-colors duration-300 focus:border-white/50';

export default function Donate() {
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState('');

  // The original site's payment form had no gateway wired up; until one is connected,
  // submitting records the pledge and shows contact details so the donation can be completed.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Section id="donate-top">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Badge delay={120}>Smile Sujok Foundation Donation Page</Badge>
          <Lead delay={220} className="max-w-sm sm:text-right">
            Your generosity helps us provide essential items and services to children, animals, and individuals facing challenges.
          </Lead>
        </div>
        <div className="max-w-xl">
          <H2 delay={180}>
            Compassion fuels
            <br />
            lasting change.
          </H2>
          <Reveal delay={320} className="mt-6 max-w-md text-sm text-white/80 drop-shadow-md sm:text-base">
            We are dedicated to bringing joy and support to those in need across various sectors.
          </Reveal>
          <Reveal delay={420} className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="#pay">Donate now</PrimaryBtn>
            <GlassBtn href="#/#contact">Contact us</GlassBtn>
          </Reveal>
        </div>
      </Section>

      <Spacer />

      <Section id="drives" className="justify-start">
        <Badge>Our Drives</Badge>
        <H2>
          Be a part
          <br />
          of us.
        </H2>
        <Reveal className="flex flex-wrap gap-2">
          {DRIVE_TAGS.map((t) => (
            <span key={t} className="border-l-2 border-white bg-white/15 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.15em] backdrop-blur-md">
              {t}
            </span>
          ))}
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {DRIVES.map((d, i) => (
            <Reveal key={d.title} delay={i * 110}>
              <Panel className="overflow-hidden">
                <video src={d.video} muted loop playsInline autoPlay preload="metadata" className="h-52 w-full object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-medium text-white">{d.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/70">{d.body}</p>
                  <a href="#pay" className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-300 hover:bg-white/85">
                    Be a part of us
                  </a>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="pay">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Badge>Secure Payment</Badge>
          <Lead className="max-w-sm sm:text-right">Every rupee goes toward care, education and essentials for those who need them most.</Lead>
        </div>
        <div className="flex flex-1 flex-col items-end justify-end gap-12 md:flex-row md:justify-between md:gap-16">
          <div className="max-w-xl self-start md:self-end">
            <H2>
              Give a smile
              <br />
              today.
            </H2>
            <Reveal delay={200} className="mt-8 flex items-center gap-4 rounded-xl bg-white/15 p-3 backdrop-blur-md">
              <img src={TEAM[0].image} alt={TEAM[0].name} className="h-24 w-20 rounded-lg object-cover" />
              <div className="flex flex-col gap-1.5 pr-2">
                <p className="text-sm font-medium text-white">{TEAM[0].name}</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">{TEAM[0].role}</p>
                <a href={CONTACT.phones[0].href} className="text-sm text-white/80 hover:text-white">
                  {CONTACT.phones[0].label}
                </a>
              </div>
            </Reveal>
          </div>

          <Panel className="w-full max-w-md p-5 sm:p-6">
            {sent ? (
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">Thank you{amount ? ` for pledging ₹${amount}` : ''}.</h3>
                <p className="text-sm leading-relaxed text-white/75">
                  Online payment is not connected yet. To complete your donation, please call {CONTACT.phones.map((p) => p.label).join(' or ')} or write to {CONTACT.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">Cardholder’s name</span>
                  <input required className={`${input} mt-2`} placeholder="Full name" />
                </label>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">Email</span>
                  <input required type="email" className={`${input} mt-2`} placeholder="you@example.com" />
                </label>
                <label className="block">
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">Amount (INR)</span>
                  <input required type="number" min={1} value={amount} onChange={(e) => setAmount(e.target.value)} className={`${input} mt-2`} placeholder="500" />
                </label>
                <PrimaryBtn type="submit">Pay now</PrimaryBtn>
              </form>
            )}
          </Panel>
        </div>
      </Section>
    </>
  );
}
