import Reveal from '../components/Reveal';
import { Badge, GlassBtn, H2, Lead, Panel, PrimaryBtn, Section, Spacer } from '../components/ui';
import { LEARN_FAQS, LEVELS, OFFLINE_BENEFITS, ONLINE_EXPECT, ONLINE_POINTS } from '../data';
import { FaqList } from './Home';

export default function Learn() {
  return (
    <>
      <Section id="learn-top">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Badge delay={120}>Know &amp; Learn Sujok</Badge>
          <Lead delay={220} className="max-w-sm sm:text-right">
            Sujok therapy is a natural healing method that uses the hands and feet to treat various ailments.
          </Lead>
        </div>
        <div className="max-w-xl">
          <H2 delay={180}>
            Learn Su-Jok,
            <br />
            therapy of healing.
          </H2>
          <Reveal delay={320} className="mt-6 max-w-md text-sm text-white/80 drop-shadow-md sm:text-base">
            Su means hand, jok means foot. Sujok produces no side effects — it is simple, safe and easy to perform, even by patients themselves.
          </Reveal>
          <Reveal delay={420} className="mt-8 flex flex-wrap gap-3">
            <PrimaryBtn href="#levels">View courses</PrimaryBtn>
            <GlassBtn href="#/donate">Become a member</GlassBtn>
          </Reveal>
        </div>
      </Section>

      <Spacer />

      <Section id="what" className="justify-start">
        <Badge>What is Sujok?</Badge>
        <H2>
          A hand &amp;
          <br />
          foot therapy.
        </H2>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Panel className="h-full p-5 sm:p-6">
              <h3 className="text-lg font-medium text-white">How it works</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Sujok therapy is a healing methodology based on acupressure — a simple method that produces highly effective results. Taking the pit of the stomach as the centre point and rotating the head 140 degrees, the parts of the hand correspond to particular parts of the body. The thumb identifies the head and the neck; the fleshy part of the palm under the thumb is the chest, and the palm as a whole refers to the abdominal region.
              </p>
            </Panel>
          </Reveal>
          <Reveal delay={110}>
            <Panel className="h-full p-5 sm:p-6">
              <h3 className="text-lg font-medium text-white">Benefits of Sujok therapy</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                The palm and foot represent all the organs or meridians in the body. Hands and feet hold systems of active points corresponding to all organs, so stimulating them produces a curative effect. The method is universal — various kinds of illnesses can be treated — natural, simple, with no side effects and no special precautions needed during treatment.
              </p>
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section id="online" className="justify-start">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Badge>Online classes</Badge>
          <Lead className="max-w-sm sm:text-right">Experience the healing power of Sujok therapy from the comfort of your own home.</Lead>
        </div>
        <H2>
          Learn Sujok
          <br />
          through online classes.
        </H2>
        <Reveal className="max-w-xl text-sm text-white/80 drop-shadow-md sm:text-base">
          Certified practitioners offer personalized consultations via video conferencing — covering stress relief, pain management, digestive issues and emotional balance, wherever you are.
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Panel className="h-full p-5 sm:p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">What to expect</p>
              <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-white/80">
                {ONLINE_EXPECT.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span className="text-white/40">/</span>
                    {x}
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
          <Reveal delay={110}>
            <Panel className="px-5 sm:px-6">
              {ONLINE_POINTS.map((p, i) => (
                <div key={p.t} className={`flex gap-5 py-4 ${i < ONLINE_POINTS.length - 1 ? 'border-b border-white/15' : ''}`}>
                  <span className="font-mono text-[11px] tracking-[0.15em] text-white/55">0{i + 1}</span>
                  <div>
                    <h3 className="text-base font-medium text-white">{p.t}</h3>
                    <p className="mt-1 text-sm text-white/70">{p.b}</p>
                  </div>
                </div>
              ))}
            </Panel>
          </Reveal>
        </div>
      </Section>

      <Section id="levels" className="justify-start">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <Badge>Offline classes</Badge>
          <Lead className="max-w-sm sm:text-right">Hands-on learning and personal guidance from expert instructors, in three levels.</Lead>
        </div>
        <H2>
          Three levels,
          <br />
          one path to mastery.
        </H2>
        <div className="grid gap-4 md:grid-cols-3">
          {LEVELS.map((l, i) => (
            <Reveal key={l.level} delay={i * 110}>
              <Panel className="flex h-full flex-col gap-3 p-5 sm:p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">{l.level}</p>
                <h3 className="text-lg font-medium text-white">{l.title}</h3>
                <p className="text-3xl font-normal tracking-tight text-white">{l.price}</p>
                <p className="text-sm leading-relaxed text-white/70">{l.body}</p>
              </Panel>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <Panel className="max-w-2xl p-5 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/60">Key benefits of offline classes</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {OFFLINE_BENEFITS.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-white/40">/</span>
                  {b}
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </Section>

      <Section id="learn-faq" className="justify-start">
        <Badge>FAQ</Badge>
        <H2>
          Questions about
          <br />
          Sujok therapy.
        </H2>
        <FaqList items={LEARN_FAQS} />
        <Reveal className="flex flex-wrap gap-3">
          <PrimaryBtn href="#/donate">Become a member</PrimaryBtn>
          <GlassBtn href="#/#contact">Contact us</GlassBtn>
        </Reveal>
      </Section>
    </>
  );
}
