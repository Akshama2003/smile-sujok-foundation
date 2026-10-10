import { useEffect, useState } from 'react';
import { HomeIcon, ShieldCheck, Video } from 'lucide-react';
import { Btn, Container, Eyebrow, PointMark } from './ui';
import { FootArt, HandArt } from './Illustrations';
import { CONTACT, GALLERY } from '../data';

// Real photos from the foundation, picked from the gallery by position.
const SLIDES = [0, 4, 1, 6, 5].map((i) => GALLERY[i]);
const ORIGINS = ['35% 40%', '60% 30%', '50% 45%', '40% 60%', '55% 35%'];

function prefersReducedMotion() {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch {
    return false;
  }
}

export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 6500);
    return () => clearInterval(t);
  }, [i]);

  return (
    <section id="top" className="relative isolate overflow-hidden bg-forest-dark text-white">
      {/* moving photo background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        {SLIDES.map((s, k) => (
          <img
            key={s.src}
            src={s.src}
            alt=""
            style={{ transformOrigin: ORIGINS[k] }}
            className={`kenburns absolute inset-0 h-full w-full object-cover transition-opacity duration-[1600ms] ease-in-out ${k === i ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,36,26,.94)_0%,rgba(24,44,18,.82)_42%,rgba(34,54,23,.38)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-forest-dark/80 to-transparent" />

        {/* meridian lines with acupressure points */}
        <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1440 760" preserveAspectRatio="none">
          <g fill="none" stroke="#f6e7c1" strokeOpacity=".55" strokeWidth="1.6">
            <path className="dash" d="M-40 640 C 280 540 420 760 760 610 S 1180 380 1500 470" />
            <path className="dash" d="M-40 700 C 300 620 520 700 820 660 S 1200 560 1500 600" style={{ animationDuration: '22s' }} />
          </g>
        </svg>
      </div>

      <Container className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr_.85fr] lg:py-24">
        <div className="rise">
          <Eyebrow light>Su-Jok acupressure · Dehradun, Uttarakhand</Eyebrow>
          <h1 className="mt-5 text-[2.7rem] font-semibold leading-[1.03] sm:text-6xl lg:text-[4.6rem]">
            Natural healing through the <span className="text-gold-soft">hands and feet.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Smile Su-Jok Foundation provides affordable healthcare and education to the community, and supports the poorer among the poor with quality medical services. Gentle acupressure, no medication, since 2015.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn href={CONTACT.phones[0].href} variant="gold">
              Book a consultation
            </Btn>
            <Btn href="#/learn" variant="light">
              Learn Su-Jok
            </Btn>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/85">
            {[
              [ShieldCheck, 'No side effects'],
              [HomeIcon, 'Home services available'],
              [Video, 'Online consultations'],
            ].map(([Icon, label]) => {
              const I = Icon as typeof ShieldCheck;
              return (
                <li key={label as string} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 ring-1 ring-white/25 backdrop-blur">
                    <I size={17} />
                  </span>
                  {label as string}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Su-Jok points: hand and foot */}
        <div className="rise relative mx-auto hidden w-full max-w-md lg:block" style={{ animationDelay: '.2s' }}>
          <div className="floaty rounded-[2.2rem] bg-white/12 p-6 ring-1 ring-white/30 backdrop-blur-md">
            <div className="flex items-end justify-center gap-6 rounded-[1.6rem] bg-white/90 px-6 pb-5 pt-6">
              <HandArt mode="points" className="h-56 w-auto" />
              <FootArt className="h-48 w-auto" />
            </div>
            <div className="mt-4 flex items-start gap-3 px-1">
              <PointMark className="mt-1 shrink-0 text-gold-soft" />
              <p className="text-sm leading-snug text-white/90">
                <span className="block font-display text-lg font-semibold text-white">The body, mapped on hand and foot</span>
                Press the matching point and the corresponding part of the body responds.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* slide caption and controls */}
      <Container className="relative pb-6">
        <div className="flex items-center justify-between gap-4 text-xs text-white/75">
          <p className="truncate">{SLIDES[i].title}</p>
          <div className="flex items-center gap-2" role="group" aria-label="Choose background photo">
            {SLIDES.map((s, k) => (
              <button
                key={s.src}
                onClick={() => setI(k)}
                aria-label={`Show photo: ${s.title}`}
                aria-current={k === i}
                className={`h-1.5 rounded-full transition-all duration-300 ${k === i ? 'w-8 bg-gold' : 'w-3 bg-white/40 hover:bg-white/70'}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

const RIBBON = ['Hand points', 'Foot points', 'Colour therapy', 'Seed therapy', 'Magnet therapy', 'Moxibustion', 'Home services', 'Online sessions', '27 centres across India'];

export function Ribbon() {
  const row = (
    <ul className="flex shrink-0 items-center" aria-hidden>
      {RIBBON.map((r) => (
        <li key={r} className="flex items-center gap-6 pr-6 font-display text-lg font-semibold text-forest sm:text-xl">
          {r}
          <PointMark className="text-gold" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee-wrap overflow-hidden border-y border-sage-200 bg-white py-4" aria-label="Su-Jok techniques and services">
      <div className="marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
