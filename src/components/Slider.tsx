import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from '../data';

// Auto-sliding photo banner. Native scroll-snap, so it also swipes by touch.
export default function Slider() {
  const ref = useRef<HTMLUListElement>(null);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = GALLERY.length;

  const go = (k: number) => {
    const el = ref.current;
    if (!el) return;
    const idx = (k + n) % n;
    el.scrollTo({ left: idx * el.clientWidth, behavior: 'smooth' });
    setI(idx);
  };

  useEffect(() => {
    let reduce = false;
    try {
      reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {}
    if (paused || reduce) return;
    const t = setInterval(() => go(i + 1), 4200);
    return () => clearInterval(t);
  });

  const onScroll = () => {
    const el = ref.current;
    if (el) setI(Math.round(el.scrollLeft / el.clientWidth));
  };

  return (
    <section className="bg-white py-8 sm:py-12" aria-label="Photos from our camps and classes">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}>
          <ul ref={ref} onScroll={onScroll} className="flex snap-x snap-mandatory overflow-x-auto rounded-3xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {GALLERY.map((g) => (
              <li key={g.src} className="relative aspect-[4/3] w-full shrink-0 snap-center sm:aspect-[16/7]">
                <img src={g.src} alt={g.alt} className="h-full w-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark/85 to-transparent px-5 pb-5 pt-16 sm:px-8">
                  <p className="font-display text-lg font-semibold text-white sm:text-2xl">{g.title}</p>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => go(i - 1)} aria-label="Previous photo" className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow sm:flex">
            <ChevronLeft size={22} />
          </button>
          <button onClick={() => go(i + 1)} aria-label="Next photo" className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-forest shadow sm:flex">
            <ChevronRight size={22} />
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2" role="group" aria-label="Choose photo">
          {GALLERY.map((g, k) => (
            <button key={g.src} onClick={() => go(k)} aria-label={`Show ${g.title}`} aria-current={k === i} className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-gold' : 'w-2 bg-sage-200 hover:bg-leaf'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
