import type { ReactNode } from 'react';

/* Hand-drawn style Su-Jok art. Every drawing shares the same palette: leaf green line, sage fill, gold points. */

const FINGERS = [
  { x: 96, y: 96, w: 38, h: 130, r: -5 },
  { x: 138, y: 68, w: 40, h: 150, r: 0 },
  { x: 182, y: 90, w: 38, h: 130, r: 4 },
  { x: 224, y: 135, w: 32, h: 100, r: 9 },
];
const THUMB = { x: 64, y: 225, w: 40, h: 125, r: -38, cx: 84, cy: 350 };
const PALM = 'M92 215 H258 V320 Q258 402 175 406 Q108 406 92 340 Z';

const PT = {
  thumb: [18, 282],
  index: [115, 108],
  middle: [157, 84],
  ring: [201, 106],
  little: [240, 148],
  chest: [122, 322],
  palm: [184, 298],
} as const;
type PointName = keyof typeof PT;

function HandBase({ className, children }: { className?: string; children: ReactNode }) {
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
    <svg viewBox="0 0 330 430" className={className} aria-hidden>
      <g transform="translate(24 12)">
        {shapes(true)}
        {shapes(false)}
        {children}
      </g>
    </svg>
  );
}

export function HandArt({ mode = 'points', className = '' }: { mode?: 'points' | 'colour' | 'seed'; className?: string }) {
  const names = Object.keys(PT) as PointName[];
  const colours: Record<PointName, string> = {
    thumb: '#d64545',
    index: '#f2c230',
    middle: '#3fa34d',
    ring: '#2f7fd1',
    little: '#7a4fc4',
    chest: '#f08a24',
    palm: '#e0709a',
  };
  return (
    <HandBase className={className}>
      {/* faint meridian lines running up each finger */}
      <g fill="none" stroke="#385624" strokeOpacity=".18" strokeWidth="2" strokeDasharray="3 7">
        <path d="M115 340 C112 260 114 190 115 108" />
        <path d="M157 360 C157 260 157 160 157 84" />
        <path d="M201 340 C203 260 201 180 201 106" />
        <path d="M232 330 C238 260 240 200 240 148" />
        <path d="M110 340 C70 330 40 310 18 282" />
      </g>
      {names.map((n) => {
        const [x, y] = PT[n];
        if (mode === 'colour') {
          return (
            <g key={n}>
              <circle cx={x} cy={y} r="17" fill={colours[n]} opacity=".25" />
              <circle cx={x} cy={y} r="10" fill={colours[n]} stroke="#fff" strokeWidth="2.5" />
            </g>
          );
        }
        if (mode === 'seed') {
          return (
            <g key={n}>
              <rect x={x - 15} y={y - 7} width="30" height="14" rx="3" fill="#f6e7c1" stroke="#c68a12" strokeOpacity=".6" strokeWidth="1" transform={`rotate(-12 ${x} ${y})`} />
              <ellipse cx={x} cy={y} rx="8.5" ry="6" fill="#8b5a2b" transform={`rotate(-30 ${x} ${y})`} />
              <ellipse cx={x - 2} cy={y - 2} rx="3" ry="1.6" fill="#c9955a" transform={`rotate(-30 ${x} ${y})`} />
            </g>
          );
        }
        return (
          <g key={n}>
            <circle className="pulse-ring" cx={x} cy={y} r="8" fill="#c68a12" />
            <circle cx={x} cy={y} r="6.5" fill="#c68a12" stroke="#fff" strokeWidth="2.5" />
          </g>
        );
      })}
    </HandBase>
  );
}

const SOLE =
  'M72 98 C120 88 190 110 192 170 C194 230 180 270 170 305 C160 340 120 352 96 336 C74 320 82 270 76 230 C70 190 56 140 72 98 Z';
const TOES: [number, number, number, number][] = [
  [98, 62, 27, 31],
  [140, 76, 15, 20],
  [163, 98, 13, 17],
  [180, 124, 11, 15],
  [190, 150, 10, 13],
];
const FOOT_PTS: [number, number][] = [
  [98, 62],
  [140, 78],
  [163, 100],
  [180, 126],
  [112, 160],
  [128, 232],
  [128, 312],
];

export function FootArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 370" className={className} aria-hidden>
      <g fill="#e7f0e0" stroke="#385624" strokeWidth="3" strokeLinejoin="round">
        {TOES.map(([cx, cy, rx, ry], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx} ry={ry} />
        ))}
        <path d={SOLE} />
      </g>
      <g fill="#e7f0e0">
        {TOES.map(([cx, cy, rx, ry], i) => (
          <ellipse key={i} cx={cx} cy={cy} rx={rx - 1.5} ry={ry - 1.5} />
        ))}
        <path d={SOLE} />
      </g>
      <g fill="none" stroke="#385624" strokeOpacity=".2" strokeWidth="2" strokeDasharray="3 7">
        <path d="M100 330 C96 260 104 200 100 100" />
        <path d="M150 300 C160 240 150 180 140 90" />
      </g>
      {FOOT_PTS.map(([x, y], i) => (
        <g key={i}>
          <circle className="pulse-ring" cx={x} cy={y} r="7" fill="#c68a12" style={{ animationDelay: `${i * 0.3}s` }} />
          <circle cx={x} cy={y} r="6" fill="#c68a12" stroke="#fff" strokeWidth="2.5" />
        </g>
      ))}
    </svg>
  );
}

export function MagnetArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g fill="none" stroke="#385624" strokeOpacity=".35" strokeWidth="2" strokeDasharray="4 6">
        <path d="M55 165 C20 190 20 120 50 100" />
        <path d="M145 165 C180 190 180 120 150 100" />
        <path d="M70 175 C100 200 100 200 130 175" />
      </g>
      <path d="M58 135 V85 A42 42 0 0 1 142 85 V135" fill="none" stroke="#c0392b" strokeWidth="28" />
      <rect x="44" y="135" width="28" height="30" fill="#d7e0d0" stroke="#385624" strokeWidth="2.5" />
      <rect x="128" y="135" width="28" height="30" fill="#d7e0d0" stroke="#385624" strokeWidth="2.5" />
      <path d="M58 135 V85 A42 42 0 0 1 142 85 V135" fill="none" stroke="#385624" strokeWidth="2.5" strokeOpacity=".5" transform="translate(0 0)" />
      <text x="58" y="157" textAnchor="middle" fontSize="15" fontWeight="700" fill="#385624">N</text>
      <text x="142" y="157" textAnchor="middle" fontSize="15" fontWeight="700" fill="#385624">S</text>
    </svg>
  );
}

export function MoxaArt({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <g fill="none" stroke="#385624" strokeOpacity=".4" strokeWidth="3" strokeLinecap="round" transform="translate(40 8)">
        <path className="dash" d="M62 70 C48 55 76 45 62 28" />
        <path className="dash" d="M84 64 C70 48 98 38 84 18" />
        <path className="dash" d="M104 72 C92 58 118 48 106 32" />
      </g>
      <g transform="translate(40 168) rotate(-32)">
        <rect x="0" y="-18" width="118" height="30" rx="14" fill="#a8855a" stroke="#385624" strokeWidth="2.5" />
        <path d="M22 -18 V12 M44 -18 V12 M66 -18 V12" stroke="#385624" strokeOpacity=".25" strokeWidth="2" />
        <circle cx="122" cy="-3" r="13" fill="#f08a24" />
        <circle cx="122" cy="-3" r="7" fill="#ffd36a" />
      </g>
      <circle className="pulse-ring" cx="146" cy="140" r="7" fill="#c68a12" />
      <circle cx="146" cy="140" r="6" fill="#c68a12" stroke="#fff" strokeWidth="2.5" />
    </svg>
  );
}
