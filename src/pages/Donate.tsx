import { useState, type FormEvent } from 'react';
import { Baby, Shirt, Utensils } from 'lucide-react';
import { Btn, Container, SectionHead } from '../components/ui';
import { CONTACT, DRIVES, DRIVE_TAGS, TEAM, consultation } from '../data';
import { SafeImg } from '../components/ui';

const section = 'scroll-mt-24 py-16 sm:py-24';
const field =
  'mt-2 w-full rounded-xl border border-sage-200 bg-white px-4 py-3 text-base text-ink placeholder-ink/35 outline-none transition-colors focus:border-forest';
const amounts = ['500', '1000', '2500', '5000'];

export default function Donate() {
  const [sent, setSent] = useState(false);
  const [amount, setAmount] = useState('1000');

  // No payment gateway is connected yet: submitting records the pledge and shows contact details.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const icons = [Shirt, Baby, Utensils];

  return (
    <>
      <section className="bg-sage-50">
        <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="rise">
            <SectionHead
              eyebrow="Donate"
              title="Compassion fuels lasting change."
              lead="We bring joy and support to those in need across various sectors. Your generosity helps us provide essential items and services to children, animals and individuals facing challenges."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="#/donate#pay">Donate now</Btn>
              <Btn href="#/#contact" variant="outline" arrow={false}>
                Contact us
              </Btn>
            </div>
          </div>
          <img src={consultation} alt="A therapist holds a participant’s hand during a free consultation camp" className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_rgba(34,54,23,.55)]" />
        </Container>
      </section>

      <section id="drives" className={`${section} bg-paper`}>
        <Container>
          <SectionHead eyebrow="Our drives" title="Be a part of us." lead={`Choose where your help goes: ${DRIVE_TAGS.join(', ').toLowerCase()}.`} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {DRIVES.map((d, i) => {
              const Icon = icons[i];
              return (
                <article key={d.title} className="overflow-hidden rounded-3xl border border-sage-200 bg-white">
                  <div className="flex h-40 items-center justify-center bg-sage-100 text-forest/40">
                    <Icon size={56} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                    <p className="mt-2 text-ink/70">{d.body}</p>
                    <a href="#/donate#pay" className="mt-5 inline-block rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-dark">
                      Be a part of us
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="pay" className={`${section} bg-sage-100`}>
        <Container className="grid items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Secure payment" title="Give a smile today." lead="Every rupee goes toward care, education and essentials for those who need them most." />
            <div className="mt-8 flex items-center gap-4 rounded-3xl bg-white p-4 ring-1 ring-sage-200">
              <SafeImg src={TEAM[0].image} alt={TEAM[0].name} label={TEAM[0].name.replace('Dr. ', '')} className="h-24 w-20 shrink-0 rounded-2xl object-cover" />
              <div>
                <p className="font-display text-lg font-semibold">{TEAM[0].name}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-leaf">{TEAM[0].role}</p>
                <a href={CONTACT.phones[0].href} className="mt-1 block text-ink/75 hover:text-forest">
                  {CONTACT.phones[0].label}
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-6 ring-1 ring-sage-200 sm:p-8">
            {sent ? (
              <div className="space-y-3" aria-live="polite">
                <h3 className="font-display text-2xl font-semibold text-forest">Thank you for pledging ₹{amount}.</h3>
                <p className="text-ink/75">
                  Online payment is not connected yet. To complete your donation, please call {CONTACT.phones.map((p) => p.label).join(' or ')} or write to {CONTACT.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <label className="block text-sm font-semibold" htmlFor="name">
                  Full name
                  <input id="name" required className={field} placeholder="Your name" />
                </label>
                <label className="block text-sm font-semibold" htmlFor="email">
                  Email
                  <input id="email" required type="email" className={field} placeholder="you@example.com" />
                </label>
                <div>
                  <label className="block text-sm font-semibold" htmlFor="amount">
                    Amount (INR)
                  </label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {amounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setAmount(a)}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${amount === a ? 'border-forest bg-forest text-white' : 'border-sage-200 hover:border-forest/50'}`}
                      >
                        ₹{a}
                      </button>
                    ))}
                  </div>
                  <input id="amount" required type="number" min={1} value={amount} onChange={(e) => setAmount(e.target.value)} className={field} />
                </div>
                <Btn type="submit" className="w-full">
                  Pledge ₹{amount || '0'}
                </Btn>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
