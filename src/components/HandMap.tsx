import { useState } from 'react';

type RegionId = 'head' | 'chest' | 'abdomen' | 'limbs';

const REGIONS: { id: RegionId; part: string; body: string; detail: string }[] = [
  { id: 'head', part: 'Thumb', body: 'Head and neck', detail: 'The thumb identifies the head and the neck.' },
  { id: 'chest', part: 'Base of the thumb', body: 'Chest', detail: 'The fleshy part of the palm under the thumb is the chest.' },
  { id: 'abdomen', part: 'Palm', body: 'Abdomen', detail: 'The palm as a whole refers to the abdominal region.' },
  {
    id: 'limbs',
    part: 'Four fingers',
    body: 'Arms and legs',
    detail: 'The body has five protruding parts: the head, two arms and two legs. The five fingers mirror them, so the fingers are used to reach the limbs.',
  },
];

const FINGERS = [
  { x: 96, y: 96, w: 38, h: 130, r: -5 },
  { x: 138, y: 68, w: 40, h: 150, r: 0 },
  { x: 182, y: 90, w: 38, h: 130, r: 4 },
  { x: 224, y: 135, w: 32, h: 100, r: 9 },
];
const THUMB = { x: 64, y: 225, w: 40, h: 125, r: -38, cx: 84, cy: 350 };
const PALM = 'M92 215 H258 V320 Q258 402 175 406 Q108 406 92 340 Z';

const POINTS: Record<RegionId, [number, number][]> = {
  head: [[18, 282]],
  chest: [[122, 322]],
  abdomen: [[184, 290]],
  limbs: [
    [115, 150],
    [158, 130],
    [201, 150],
    [240, 182],
  ],
};

export default function HandMap() {
  const [active, setActive] = useState<RegionId>('abdomen');
  const current = REGIONS.find((r) => r.id === active)!;

  const shapes = (stroke: boolean) => (
    <g fill="#e7f0e0" stroke={stroke ? '#385624' : 'none'} strokeWidth={stroke ? 3 : 0} strokeLinejoin="round">
      {FINGERS.map((f, i) => (
        <rect key={i} x={f.x} y={f.y} width={f.w} height={f.h} rx={f.w / 2} transform={`rotate(${f.r} ${f.x + f.w / 2} ${f.y + f.h})`} />
      ))}
      <rect x={THUMB.x} y={THUMB.y} width={THUMB.w} height={THUMB.h} rx={THUMB.w / 2} transform={`rotate(${THUMB.r} ${THUMB.cx} ${THUMB.cy})`} />
      <path d={PALM} />
    </g>
  );

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
      <div className="mx-auto w-full max-w-[380px] rounded-[2rem] border border-sage-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(56,86,36,.45)]">
        <svg viewBox="0 0 320 440" role="img" aria-label="Diagram of an open palm showing which part of the body each region of the hand corresponds to" className="h-auto w-full">
          <g transform="translate(24 0)">
            {shapes(true)}
            {shapes(false)}

            {/* highlighted region */}
            <g fill="#c68a12" fillOpacity=".28" stroke="#c68a12" strokeWidth="2">
              {active === 'head' && <rect x={THUMB.x} y={THUMB.y} width={THUMB.w} height={THUMB.h} rx={THUMB.w / 2} transform={`rotate(${THUMB.r} ${THUMB.cx} ${THUMB.cy})`} />}
              {active === 'chest' && <ellipse cx="122" cy="322" rx="30" ry="50" transform="rotate(-18 122 322)" />}
              {active === 'abdomen' && <ellipse cx="184" cy="298" rx="58" ry="62" />}
              {active === 'limbs' && FINGERS.map((f, i) => <rect key={i} x={f.x} y={f.y} width={f.w} height={f.h * 0.78} rx={f.w / 2} transform={`rotate(${f.r} ${f.x + f.w / 2} ${f.y + f.h})`} />)}
            </g>

            {/* faint points on every region, pulsing on the active one */}
            {(Object.keys(POINTS) as RegionId[]).flatMap((id) =>
              POINTS[id].map(([x, y], i) => (
                <g key={`${id}-${i}`} onClick={() => setActive(id)} className="cursor-pointer">
                  {id === active && <circle className="pulse-ring" cx={x} cy={y} r="7" fill="#c68a12" />}
                  <circle cx={x} cy={y} r="14" fill="transparent" />
                  <circle cx={x} cy={y} r={id === active ? 6 : 4} fill={id === active ? '#c68a12' : '#385624'} stroke="#fff" strokeWidth="2" />
                </g>
              )),
            )}
          </g>
        </svg>
        <p className="mt-2 text-center text-xs text-ink/55">Open palm, right hand. Tap a point or a region.</p>
      </div>

      <div>
        <div role="tablist" aria-label="Regions of the hand" className="grid gap-3 sm:grid-cols-2">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              role="tab"
              aria-selected={active === r.id}
              onClick={() => setActive(r.id)}
              className={`rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${
                active === r.id ? 'border-forest bg-forest text-white' : 'border-sage-200 bg-white hover:border-forest/40'
              }`}
            >
              <span className={`block text-xs font-semibold uppercase tracking-[0.15em] ${active === r.id ? 'text-gold-soft' : 'text-leaf'}`}>{r.part}</span>
              <span className="mt-1 block font-display text-lg font-semibold">{r.body}</span>
            </button>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-sage-100 p-6" aria-live="polite">
          <p className="font-display text-xl font-semibold text-forest">{current.part} <span className="text-ink/40">→</span> {current.body}</p>
          <p className="mt-2 text-ink/75">{current.detail}</p>
        </div>
      </div>
    </div>
  );
}
