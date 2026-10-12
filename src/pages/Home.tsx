import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Award,
  Baby,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  Footprints,
  GraduationCap,
  Hand,
  HeartPulse,
  Home as HomeIcon,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Plus,
  Quote,
  ShieldCheck,
  Shirt,
  Thermometer,
  Users,
  Utensils,
  Video,
  X,
  Droplet,
  Brain,
  Wind,
} from 'lucide-react';
import HandMap from '../components/HandMap';
import Hero, { Ribbon } from '../components/Hero';
import { FootArt, HandArt, MagnetArt, MoxaArt } from '../components/Illustrations';
import { Btn, Container, Eyebrow, PointMark, SafeImg, SectionHead } from '../components/ui';
import { CONTACT, DRIVE_TAGS, EVENTS, FAQS, GALLERY, CERTIFICATION, LEVELS, SERVICES, TEAM, TESTIMONIALS, consultation, portrait, practitioners } from '../data';

const section = 'scroll-mt-24 py-16 sm:py-24';

function Stats() {
  const stats = [
    { n: '27', l: 'Healthcare centres across India' },
    { n: '2015', l: 'Serving the community since' },
    { n: '12+', l: 'Years of clinical practice' },
    { n: '3', l: 'Course levels, from beginner to mastery' },
  ];
  return (
    <section className="border-y border-sage-200 bg-white">
      <Container className="grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.l} className={`px-2 text-center lg:px-8 ${i > 0 ? 'lg:border-l lg:border-sage-200' : ''}`}>
            <p className="font-display text-4xl font-semibold text-forest sm:text-5xl">{s.n}</p>
            <p className="mx-auto mt-1 max-w-[16rem] text-sm text-ink/65">{s.l}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function About() {
  const pillars = [
    { icon: HeartPulse, t: 'Affordable healthcare', b: 'Quality Su-Jok treatment for those who need it most, including home services.' },
    { icon: GraduationCap, t: 'Training and education', b: 'Three course levels and regular camps for practitioners and families.' },
    { icon: Users, t: 'Community service', b: 'Food, clothing and children’s drives, and blood donation camps.' },
  ];
  return (
    <section id="about" className={`${section} bg-paper`}>
      <Container className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="relative">
          <img src={practitioners} alt="Seven practitioners standing together in front of a seminar welcome screen" className="aspect-[4/4.4] w-full rounded-t-[999px] rounded-b-[2rem] object-cover object-[30%_50%]" />
          <img src={portrait} alt="Dr. Subhash Chaudhary speaking at an event, with the Smile Sujok logo" className="absolute -bottom-8 right-4 hidden h-36 w-36 rounded-2xl border-4 border-paper object-cover shadow-lg sm:block" />
        </div>
        <div>
          <SectionHead
            eyebrow="About the foundation"
            title="Dedicated to natural health, open to everyone."
            lead="At Smile Su-Jok Foundation, we promote natural health through Su-Jok therapy. Our mission, ‘Smiles for All’, reflects our commitment to making holistic healing accessible to everyone, especially those in need."
          />
          <ul className="mt-8 space-y-5">
            {pillars.map((p) => (
              <li key={p.t} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-forest">
                  <p.icon size={22} />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                  <p className="text-ink/70">{p.b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function How() {
  const benefits = [
    { icon: ShieldCheck, t: 'No side effects', b: 'Su-Jok is natural and treats with the body’s own forces.' },
    { icon: Hand, t: 'Simple to perform', b: 'Easy enough for patients to do themselves, with no special precautions.' },
    { icon: Activity, t: 'Universal method', b: 'Hands and feet hold points for every organ, so many illnesses can be treated.' },
    { icon: Leaf, t: 'Safe and natural', b: 'Su means hand and jok means foot. It is one of the safest therapies known.' },
  ];
  return (
    <section id="how" className={`${section} bg-sage-50`}>
      <Container>
        <SectionHead
          eyebrow="How Su-Jok works"
          title="The hand is a map of the whole body."
          lead="Su-Jok is acupressure based on the idea that the palm and foot represent every organ and meridian. Press a point on the hand, and the matching part of the body responds."
        />
        <div className="mt-12">
          <HandMap />
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-2xl border border-sage-200 bg-white p-6">
              <b.icon className="text-gold" size={24} />
              <h3 className="mt-4 font-display text-lg font-semibold">{b.t}</h3>
              <p className="mt-1.5 text-sm text-ink/70">{b.b}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink/60">Su-Jok is a complementary therapy. It should not replace conventional medical treatment and is best used under the guidance of a qualified practitioner.</p>
      </Container>
    </section>
  );
}

function Therapies() {
  const items = [
    { t: 'Hand points', b: 'The palm and fingers map the whole body. The matching point is pressed with a fingertip or a small probe.', art: <HandArt mode="points" className="h-full w-auto" /> },
    { t: 'Foot points', b: 'The sole carries the same map in a second, larger form, and is used together with the hands.', art: <FootArt className="h-full w-auto" /> },
    { t: 'Colour therapy', b: 'Points are marked with coloured ink. The practitioner chooses each colour for its calming or stimulating effect.', art: <HandArt mode="colour" className="h-full w-auto" /> },
    { t: 'Seed therapy', b: 'Small seeds are fixed over the points with tape, giving gentle, continuous stimulation between visits.', art: <HandArt mode="seed" className="h-full w-auto" /> },
    { t: 'Magnet therapy', b: 'Small magnets are placed on the correspondence points as a gentle alternative to pressing by hand.', art: <MagnetArt className="h-full w-auto" /> },
    { t: 'Moxibustion', b: 'Warmth from a burning moxa stick is held near a point to stimulate it without touching the skin.', art: <MoxaArt className="h-full w-auto" /> },
  ];
  return (
    <section id="therapies" className={`${section} relative overflow-hidden bg-forest-dark text-white`}>
      <svg className="pointer-events-none absolute -left-32 top-10 h-[620px] w-[620px] text-white/[.06]" viewBox="0 0 200 200" aria-hidden>
        {[90, 72, 54, 36, 18].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="currentColor" strokeWidth="1" />
        ))}
      </svg>
      <Container className="relative">
        <SectionHead
          light
          eyebrow="Su-Jok therapies"
          title="Six ways to reach the same points."
          lead="Su-Jok practitioners use the hand and foot map with simple, non-invasive techniques. Your practitioner will advise which suit you."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article key={it.t} className="group rounded-[1.75rem] bg-white/[.07] p-4 ring-1 ring-white/15 transition-colors duration-300 hover:bg-white/[.11]">
              <div className="flex h-60 items-center justify-center rounded-2xl bg-sage-50 p-5 transition-transform duration-500 group-hover:-translate-y-1">{it.art}</div>
              <h3 className="mt-5 px-2 font-display text-xl font-semibold">{it.t}</h3>
              <p className="mt-1.5 px-2 pb-2 text-white/75">{it.b}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-white/60">Su-Jok is a complementary therapy and does not replace conventional medical treatment.</p>
      </Container>
    </section>
  );
}

function Trust() {
  const facts = [
    { icon: ShieldCheck, t: 'Registered trust', b: 'Registered under the Indian Trust Act, 1935.' },
    { icon: Users, t: 'International link', b: 'Works in collaboration with the International Sujok Association, Moscow.' },
    { icon: MapPin, t: '27 healthcare centres', b: 'Sujok Healthcare Centres run across India.' },
    { icon: Leaf, t: 'Health without medicine', b: 'Natural care, with NGOs serving the rural poor.' },
  ];
  const doing = ['Clinics', 'Camps', 'Workshops', 'Seminars', 'Discussions', 'Training'];
  return (
    <section className="bg-sage-100 py-12 sm:py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">One Sujok therapist in each family.</h2>
            <p className="mt-4 text-ink/75">This is the vision of Prof. Park Jae Woo, the founder of Su-Jok, and the one we work towards through</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {doing.map((d) => (
                <li key={d} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-forest ring-1 ring-sage-200">{d}</li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.t} className="rounded-2xl bg-white p-5 ring-1 ring-sage-200">
                <f.icon className="text-gold" size={22} />
                <h3 className="mt-3 font-display text-lg font-semibold">{f.t}</h3>
                <p className="mt-1 text-sm text-ink/70">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const steps = [
    { t: 'Book an appointment', b: 'Call or WhatsApp us, or book an online or home visit slot.' },
    { t: 'Doctor checkup', b: 'The doctor listens to your history and examines your hands and feet.' },
    { t: 'Su-Jok treatment', b: 'Pressure, seeds, colour, magnets or moxa on the points matched to you.' },
    { t: 'Follow-up and home care', b: 'You learn simple points to press yourself, and we review your progress.' },
  ];
  return (
    <section className={`${section} bg-paper`}>
      <Container>
        <SectionHead eyebrow="How we work" title="Appointment, checkup, treatment, follow-up." />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.t} className="relative rounded-2xl border border-sage-200 bg-white p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display text-lg font-semibold text-white">{i + 1}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{s.t}</h3>
              <p className="mt-1.5 text-sm text-ink/70">{s.b}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Services() {
  const icons = [Thermometer, Activity, Footprints];
  const also = ['Bronchitis', 'Asthma', 'Headaches', 'Dizziness', 'Migraines', 'Gastritis', 'Ulcers', 'Diabetes', 'Depression', 'Anxiety', 'Neck pain', 'Shoulder pain', 'Lower back pain', 'Sciatica', 'Sinus', 'Gastric acidity', 'Giddiness', 'Obesity'];
  const ways = [
    { icon: HomeIcon, t: 'Home services', b: 'Our practitioners can treat you at home.' },
    { icon: Video, t: 'Online sessions', b: 'Video consultations with certified practitioners, from anywhere.' },
    { icon: MapPin, t: '27 centres', b: 'Healthcare centres across India, plus practitioners abroad.' },
  ];
  return (
    <section id="services" className={`${section} bg-paper`}>
      <Container>
        <SectionHead
          eyebrow="Our services"
          title="Comprehensive Su-Jok therapy for everyday conditions."
          lead="Each patient receives personalised care without the need for medication. Our experienced practitioners promote healing through targeted acupressure on the hands and feet."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = icons[i];
            return (
              <article key={s.title} className="group rounded-3xl border border-sage-200 bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_50px_-32px_rgba(56,86,36,.6)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-white">
                  <Icon size={26} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-ink/70">{s.body}</p>
                <a href="#/#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  Ask about this <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </article>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl bg-sage-100 p-7 sm:p-9">
          <p className="font-display text-lg font-semibold text-forest">Su-Jok is also used for</p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {also.map((a) => (
              <li key={a} className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-ink/80 ring-1 ring-sage-200">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 border-t border-sage-200 pt-10 md:grid-cols-3">
          {ways.map((w) => (
            <div key={w.t} className="flex gap-4">
              <w.icon className="mt-1 shrink-0 text-gold" size={24} />
              <div>
                <h3 className="font-display text-lg font-semibold">{w.t}</h3>
                <p className="text-ink/70">{w.b}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Founder() {
  return (
    <section className="bg-forest-dark py-14 text-white sm:py-20">
      <Container className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <Eyebrow light>The founder</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Prof. Park Jae Woo, who gave the world Su-Jok.</h2>
          <p className="mt-4 text-white/80">Born in Seoul in 1942 and a graduate of Seoul National University, Prof. Park developed Su-Jok therapy and the Triorigin philosophy. He later served as president of the Su-Jok Academy in Moscow, and passed away there on 25 March 2010.</p>
          <p className="mt-3 text-white/80">Su-Jok practitioners around the world remember 25 March as Guru Dakshina Divas, a day of gratitude and service in his memory.</p>
        </div>
        <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/15">
          <PointMark className="text-gold-soft" />
          <p className="mt-3 font-display text-2xl font-semibold leading-snug">“One Sujok therapist in each family.”</p>
          <p className="mt-3 text-white/75">His vision is also ours. Every camp, class and clinic we run is a step towards it.</p>
        </div>
      </Container>
    </section>
  );
}

function Courses() {
  return (
    <section id="courses" className={`${section} bg-forest text-white`}>
      <Container className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHead
            light
            eyebrow="Learn Su-Jok"
            title="Train with the foundation, online or in person."
            lead="Hands-on classes with expert instructors, in three levels, followed by a certification course to practise as a therapist."
          />
          <img src={portrait} alt="Dr. Subhash Chaudhary speaking at an event, with the Smile Sujok logo" className="mt-8 hidden aspect-square w-56 rounded-3xl object-cover ring-4 ring-white/15 lg:block" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#/learn" variant="gold">
              Course details
            </Btn>
            <Btn href={CONTACT.phones[0].href} variant="light" arrow={false}>
              Call to enrol
            </Btn>
          </div>
        </div>
        <ol className="space-y-4">
          {[...LEVELS, CERTIFICATION].map((l, i) => (
            <li key={l.level} className="flex gap-5 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 sm:p-7">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold font-display text-xl font-semibold">{i + 1}</span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-xl font-semibold">{l.title}</h3>
                  <p className="font-display text-2xl font-semibold text-gold-soft">{l.price}</p>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">{l.level}</p>
                <p className="mt-2 text-white/80">{l.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Events() {
  const icons: Record<string, typeof Users> = { award: Award, cap: GraduationCap, drop: Droplet };
  return (
    <section id="events" className={`${section} bg-paper`}>
      <Container>
        <SectionHead
          eyebrow="Events"
          title="Join us through the year."
          lead="From training camps to international conferences, there is something for everyone interested in Su-Jok therapy and community health awareness."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {EVENTS.map((e) => {
            const Icon = icons[e.icon] ?? Users;
            return (
              <article key={e.title} className="rounded-3xl border border-sage-200 bg-white p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-100 text-forest">
                  <Icon size={26} />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">{e.title}</h3>
                <p className="mt-2 text-ink/70">{e.body}</p>
                <a href="#/#gallery" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-forest">
                  See photos <ArrowRight size={15} />
                </a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function TreatmentAreas() {
  const areas = [
    { icon: Brain, t: 'Head', b: 'Headaches, migraine, giddiness, sinus', pt: 'Thumb' },
    { icon: Wind, t: 'Neck and shoulder', b: 'Stiffness, shoulder and neck pain', pt: 'Thumb base' },
    { icon: HeartPulse, t: 'Chest', b: 'Asthma, bronchitis, breathing comfort', pt: 'Thumb pad' },
    { icon: Activity, t: 'Back', b: 'Upper and lower back pain, sciatica', pt: 'Middle finger line' },
    { icon: Utensils, t: 'Stomach', b: 'Gastric acidity, gastritis, ulcers', pt: 'Centre of palm' },
    { icon: Footprints, t: 'Knee and legs', b: 'Knee pain, joint stiffness', pt: 'Ring and little finger' },
    { icon: Hand, t: 'Arms and hands', b: 'Elbow, wrist and arm pain', pt: 'Index finger' },
    { icon: Footprints, t: 'Feet', b: 'Heel pain, tired and swollen feet', pt: 'Sole' },
  ];
  return (
    <section id="treatments" className={`${section} bg-sage-50`}>
      <Container>
        <SectionHead eyebrow="Treatment gallery" title="From head to feet, every area has its point." lead="Each part of the body has a matching spot on the hand and foot. These are the areas people visit us for most." />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((a) => (
            <li key={a.t} className="rounded-2xl border border-sage-200 bg-white p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest text-white"><a.icon size={22} /></span>
              <h3 className="mt-4 font-display text-lg font-semibold">{a.t}</h3>
              <p className="mt-1 text-sm text-ink/70">{a.b}</p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-leaf"><PointMark className="text-gold" /> {a.pt}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-ink/60">Su-Jok is a complementary therapy and does not replace medical treatment.</p>
      </Container>
    </section>
  );
}

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') setOpen((o) => (o === null ? o : (o + 1) % GALLERY.length));
      if (e.key === 'ArrowLeft') setOpen((o) => (o === null ? o : (o - 1 + GALLERY.length) % GALLERY.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <section id="gallery" className={`${section} bg-sage-50`}>
      <Container>
        <SectionHead eyebrow="Gallery" title="The foundation at work." lead="Camps, demonstrations and group sessions from our recent events." />
        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[190px] md:grid-cols-4 md:gap-4">
          {GALLERY.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl bg-sage-100 text-left ${g.span}`}
              aria-label={`Open photo: ${g.title}`}
            >
              <img src={g.src} alt={g.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 pt-10 text-sm font-semibold text-white">{g.title}</span>
            </button>
          ))}
        </div>
      </Container>

      {open !== null && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink/95 p-4" role="dialog" aria-modal="true" aria-label={GALLERY[open].title}>
          <div className="flex items-center justify-between text-white">
            <p className="font-display text-lg font-semibold">{GALLERY[open].title}</p>
            <button onClick={() => setOpen(null)} aria-label="Close" className="rounded-full bg-white/10 p-2.5 hover:bg-white/20">
              <X size={20} />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center py-4">
            <img src={GALLERY[open].src} alt={GALLERY[open].alt} className="max-h-full max-w-full rounded-xl object-contain" />
            <button onClick={() => setOpen((open - 1 + GALLERY.length) % GALLERY.length)} aria-label="Previous photo" className="absolute left-0 rounded-full bg-white/15 p-3 text-white hover:bg-white/25">
              <ChevronLeft />
            </button>
            <button onClick={() => setOpen((open + 1) % GALLERY.length)} aria-label="Next photo" className="absolute right-0 rounded-full bg-white/15 p-3 text-white hover:bg-white/25">
              <ChevronRight />
            </button>
          </div>
          <p className="text-center text-sm text-white/70">{GALLERY[open].alt}</p>
        </div>
      )}
    </section>
  );
}

function Team() {
  return (
    <section id="team" className={`${section} bg-paper`}>
      <Container>
        <SectionHead eyebrow="Our team" title="The practitioners behind the smile." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {TEAM.map((m) => (
            <article key={m.name} className="overflow-hidden rounded-3xl border border-sage-200 bg-white">
              <SafeImg src={m.image} alt={m.name} label={m.name.replace('Dr. ', '')} className="aspect-[4/4.2] w-full bg-sage-50 object-cover object-top" />
              <div className="min-w-0 p-6">
                <h3 className="font-display text-xl font-semibold">{m.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em] text-leaf">{m.role}</p>
                <p className="mt-3 text-ink/70">{m.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Videos() {
  const topics = ['Hand and foot points', 'Pain relief at home', 'Seed and colour therapy', 'Stories from our camps'];
  return (
    <section className="bg-sage-50 py-12 sm:py-16">
      <Container className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <Eyebrow>Watch and learn</Eyebrow>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Learn Su-Jok on our YouTube channel.</h2>
          <p className="mt-3 text-ink/75">Short videos from our camps, classes and demonstrations, so you can see the points being pressed.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Btn href="https://www.youtube.com/@smilesujokfoundationdehrad5435">Watch on YouTube</Btn>
            <Btn href="#/learn" variant="outline">Join a course</Btn>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {topics.map((t) => (
            <li key={t} className="rounded-2xl bg-white p-4 text-sm font-medium text-forest ring-1 ring-sage-200">{t}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Stories() {
  return (
    <section id="stories" className={`${section} bg-sage-50`}>
      <Container>
        <SectionHead eyebrow="Patient stories" title="Transformative healing." lead="Our patients share their journeys of recovery and hope." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between rounded-3xl border border-sage-200 bg-white p-7">
              <div>
                <Quote className="text-gold" size={26} />
                <blockquote className="mt-4 leading-relaxed text-ink/80">{t.quote}</blockquote>
              </div>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-sage-100 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest font-display font-semibold text-white">{t.name.replace('Dr. ', '')[0]}</span>
                <span>
                  <span className="block font-semibold">{t.name}</span>
                  <span className="block text-sm text-ink/60">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function DonateBand() {
  const icons = [Baby, Utensils, Shirt, HeartPulse, Briefcase];
  return (
    <section className="bg-forest-dark py-16 text-white sm:py-20">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <div>
          <SectionHead light eyebrow="Give a smile" title="Compassion fuels lasting change." lead="Your generosity helps us provide essential items and services to children, animals and individuals facing challenges." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href="#/donate" variant="gold">
              Donate now
            </Btn>
            <Btn href="#/donate" variant="light" arrow={false}>
              See our drives
            </Btn>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3">
          {DRIVE_TAGS.map((t, i) => {
            const Icon = icons[i];
            return (
              <li key={t} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/15">
                <Icon size={20} className="shrink-0 text-gold-soft" />
                <span className="font-semibold">{t}</span>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-sage-200 rounded-3xl border border-sage-200 bg-white px-6">
      {items.map((f, i) => (
        <div key={f.q}>
          <button className="flex w-full items-center justify-between gap-4 py-5 text-left" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
            <span className="font-display text-lg font-semibold">{f.q}</span>
            <Plus size={18} className={`shrink-0 text-gold transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`} />
          </button>
          {open === i && <p className="-mt-1 pb-5 text-ink/70">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

function Faq() {
  return (
    <section id="faq" className={`${section} bg-paper`}>
      <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
        <SectionHead eyebrow="Questions" title="Know before you heal." lead="Common questions about our services and the benefits of our holistic approach." />
        <FaqList items={FAQS} />
      </Container>
    </section>
  );
}

function Contact() {
  const rows = [
    { icon: Phone, t: 'Call us', lines: CONTACT.phones.map((p) => ({ text: p.label, href: p.href })) },
    { icon: Mail, t: 'Email us', lines: [{ text: CONTACT.email, href: `mailto:${CONTACT.email}` }] },
    { icon: MapPin, t: 'Visit us', lines: [{ text: CONTACT.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}` }] },
  ];
  return (
    <section id="contact" className={`${section} bg-sage-100`}>
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <SectionHead eyebrow="Contact" title="Let’s talk about your health." lead="Contact us for more information about our services and how we can help you. Home services and online sessions are available." />
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={CONTACT.phones[0].href}>Call now</Btn>
            <Btn href={`mailto:${CONTACT.email}`} variant="outline" arrow={false}>
              Send an email
            </Btn>
          </div>
        </div>
        <ul className="space-y-4">
          {rows.map((r) => (
            <li key={r.t} className="flex gap-4 rounded-3xl bg-white p-6 ring-1 ring-sage-200">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest text-white">
                <r.icon size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold">{r.t}</h3>
                {r.lines.map((l) => (
                  <a key={l.text} href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})} className="block break-words text-ink/75 hover:text-forest">
                    {l.text}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ribbon />
      <Stats />
      <Trust />
      <About />
      <How />
      <Therapies />
      <Process />
      <Services />
      <Founder />
      <Courses />
      <Events />
      <TreatmentAreas />
      <Gallery />
      <Team />
      <Videos />
      <Stories />
      <DonateBand />
      <Faq />
      <Contact />
    </>
  );
}
