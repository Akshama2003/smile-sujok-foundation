import { Check, Home as HomeIcon, Video } from 'lucide-react';
import { Btn, Container, SectionHead } from '../components/ui';
import { LEARN_FAQS, CERTIFICATION, LEVELS, OFFLINE_BENEFITS, ONLINE_EXPECT, ONLINE_POINTS, CONTACT, portrait } from '../data';
import { FaqList } from './Home';

const PROGRAMMES = ['Basic Correspondence System', 'Human Energy System (EFT)', 'Six Ki', 'Twist Therapy', 'Sam Won Dong', 'Triorigin Therapy', 'Smile Meditation', 'Smile Yoga'];

const ADVANCED = [
  { t: 'Smile Meditation', b: 'A simple, calming practice from Prof. Park Jae Woo’s teaching, for a quiet mind and a better quality of life.' },
  { t: 'Sam Won Dong', b: 'Another practice from Prof. Park’s Triorigin teaching, which ISA also promotes alongside Smile Meditation. Ask us about upcoming sessions.' },
  { t: 'Twist Therapy', b: 'An advanced approach taught in specialist courses, built on the basic Su-Jok system.' },
  { t: 'Triorigin Chronopuncture', b: 'Studies how the timing of an event, such as an injury or the onset of symptoms, relates to the body’s energy, and when to treat.' },
];

const SYLLABUS = [
  { t: 'Foundations', items: ['Meridian system and Ki energy', 'Revision of the Basic correspondence system', 'Locating meridian points on hands and feet'] },
  { t: 'Practice', items: ['Treating with meridian points', 'Case discussion and practical sessions', 'Assessment and certification'] },
];

const section = 'scroll-mt-24 py-16 sm:py-24';

export default function Learn() {
  return (
    <>
      <section className="bg-sage-50">
        <Container className="grid items-center gap-12 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-20">
          <div className="rise">
            <SectionHead
              eyebrow="Know and learn Su-Jok"
              title="Learn Su-Jok, the therapy of healing."
              lead="Su-Jok therapy is a natural healing method that uses the hands and feet to treat various ailments. Su means hand and jok means foot. It produces no side effects and is simple enough for patients to perform themselves."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="#/learn#levels">View courses and fees</Btn>
              <Btn href={CONTACT.phones[0].href} variant="outline" arrow={false}>
                Call to enrol
              </Btn>
            </div>
          </div>
          <img src={portrait} alt="Dr. Subhash Chaudhary speaking at an event, with the Smile Sujok logo" className="mx-auto aspect-square w-full max-w-md rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_rgba(34,54,23,.55)]" />
        </Container>
      </section>

      <section id="what" className={`${section} bg-paper`}>
        <Container>
          <SectionHead eyebrow="What is Su-Jok?" title="A hand and foot therapy." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-sage-200 bg-white p-7">
              <h3 className="font-display text-xl font-semibold">How it works</h3>
              <p className="mt-3 text-ink/75">
                Su-Jok is a healing method based on acupressure, and a simple one that produces highly effective results. Taking the pit of the stomach as the centre point and rotating the head 140 degrees, the parts of the hand correspond to particular parts of the body. The thumb identifies the head and the neck, the fleshy part of the palm under the thumb is the chest, and the palm as a whole refers to the abdominal region.
              </p>
            </article>
            <article className="rounded-3xl border border-sage-200 bg-white p-7">
              <h3 className="font-display text-xl font-semibold">Benefits</h3>
              <p className="mt-3 text-ink/75">
                The palm and foot represent all the organs and meridians in the body. Hands and feet hold systems of active points that correspond to every organ, so stimulating them has a curative effect. The method is universal, natural and simple, with no side effects and no special precautions needed during treatment.
              </p>
            </article>
          </div>
        </Container>
      </section>

      <section id="online" className={`${section} bg-sage-50`}>
        <Container>
          <SectionHead eyebrow="Online classes" title="Learn Su-Jok from home." lead="Certified practitioners offer personalised consultations over video, covering stress relief, pain management, digestive issues and emotional balance." />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 ring-1 ring-sage-200">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-leaf">
                <Video size={16} /> What to expect
              </p>
              <ul className="mt-4 space-y-3">
                {ONLINE_EXPECT.map((x) => (
                  <li key={x} className="flex gap-3 text-ink/80">
                    <Check size={18} className="mt-1 shrink-0 text-gold" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {ONLINE_POINTS.map((p) => (
                <div key={p.t} className="rounded-3xl bg-white p-6 ring-1 ring-sage-200">
                  <dt className="font-display text-lg font-semibold text-forest">{p.t}</dt>
                  <dd className="mt-1.5 text-sm text-ink/70">{p.b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section id="levels" className={`${section} bg-paper`}>
        <Container>
          <SectionHead eyebrow="Offline classes" title="Three levels and a certification course." lead="Hands-on learning and personal guidance from expert instructors. Pay as you progress, and receive certification after each level." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[...LEVELS, CERTIFICATION].map((l, i) => (
              <article key={l.level} className={`flex flex-col rounded-3xl p-7 ${i === 3 ? 'bg-forest text-white' : 'border border-sage-200 bg-white'}`}>
                <p className={`text-xs font-semibold uppercase tracking-[0.15em] ${i === 3 ? 'text-gold-soft' : 'text-leaf'}`}>{l.level}</p>
                <h3 className="mt-2 font-display text-xl font-semibold">{l.title}</h3>
                <p className={`mt-4 font-display text-3xl font-semibold ${i === 3 ? 'text-gold-soft' : 'text-forest'}`}>{l.price}</p>
                <p className={`mt-4 ${i === 3 ? 'text-white/80' : 'text-ink/70'}`}>{l.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-sage-200 bg-white p-7">
            <p className="font-display text-lg font-semibold text-forest">Programmes we teach</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {PROGRAMMES.map((p) => (
                <li key={p} className="rounded-full bg-sage-100 px-4 py-1.5 text-sm font-medium text-ink/80">{p}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 rounded-3xl bg-white p-7 ring-1 ring-sage-200">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-leaf">Level 2 syllabus</p>
            <h3 className="mt-1 font-display text-xl font-semibold">Meridian Su-Jok Ki</h3>
            <p className="mt-2 text-sm text-ink/70">Eligibility: completed the Level I (Basic) course from an ISA qualified lecturer, with a valid certificate.</p>
            <div className="mt-5 space-y-3">
              {SYLLABUS.map((g) => (
                <details key={g.t} className="group rounded-2xl bg-sage-50 px-5 py-3 ring-1 ring-sage-200">
                  <summary className="cursor-pointer list-none font-display font-semibold text-forest">{g.t}</summary>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((x) => (
                      <li key={x} className="flex gap-3 text-sm text-ink/80"><Check size={16} className="mt-0.5 shrink-0 text-gold" />{x}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {ADVANCED.map((a) => (
              <article key={a.t} className="rounded-3xl border border-sage-200 bg-white p-6">
                <h3 className="font-display text-lg font-semibold text-forest">{a.t}</h3>
                <p className="mt-2 text-sm text-ink/75">{a.b}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 rounded-3xl bg-sage-100 p-7">
            <p className="flex items-center gap-2 font-display text-lg font-semibold text-forest">
              <HomeIcon size={18} /> Key benefits of our offline classes
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {OFFLINE_BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 text-ink/80">
                  <Check size={18} className="mt-1 shrink-0 text-gold" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section id="learn-faq" className={`${section} bg-sage-50`}>
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead eyebrow="Questions" title="About learning Su-Jok." lead="Su-Jok was developed by Professor Park Jae Woo. It is best used as a complementary therapy under the guidance of a qualified practitioner." />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="#/donate">Become a member</Btn>
              <Btn href="#/#contact" variant="outline" arrow={false}>
                Contact us
              </Btn>
            </div>
          </div>
          <FaqList items={LEARN_FAQS} />
        </Container>
      </section>
    </>
  );
}
