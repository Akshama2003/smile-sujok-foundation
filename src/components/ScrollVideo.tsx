import { useEffect, useRef, useState } from 'react';
import { VIDEO_URL } from '../data';

const MAX_FRAMES = 90;
const MAX_WIDTH = 960;

export default function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasFrame, setHasFrame] = useState(false);
  const [cacheReady, setCacheReady] = useState(false);

  const frames = useRef<ImageBitmap[]>([]);
  const cacheReadyRef = useRef(false);
  const smoothed = useRef(0);
  const target = useRef(0);
  const lastSeek = useRef(-1);

  // visible video: wait for a decoded frame
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onLoaded = () => {
      setHasFrame(true);
      v.pause();
    };
    v.addEventListener('loadeddata', onLoaded);
    if (v.readyState >= 2) onLoaded();
    return () => v.removeEventListener('loadeddata', onLoaded);
  }, []);

  // frame cache extraction via offscreen video
  useEffect(() => {
    if (!hasFrame) return;
    let cancelled = false;

    const run = async () => {
      await new Promise((r) => setTimeout(r, 300));
      if (cancelled) return;

      const off = document.createElement('video');
      off.crossOrigin = 'anonymous';
      off.muted = true;
      off.playsInline = true;
      off.preload = 'auto';
      off.src = VIDEO_URL;

      await new Promise<void>((resolve, reject) => {
        off.addEventListener('loadeddata', () => resolve(), { once: true });
        off.addEventListener('error', () => reject(new Error('offscreen video error')), { once: true });
      });
      if (cancelled) return;

      const duration = off.duration;
      if (!isFinite(duration) || duration <= 0) return;
      const count = Math.max(24, Math.min(MAX_FRAMES, Math.floor(duration * 12)));
      const scale = Math.min(1, MAX_WIDTH / off.videoWidth);
      const w = Math.round(off.videoWidth * scale);
      const h = Math.round(off.videoHeight * scale);
      const work = document.createElement('canvas');
      work.width = w;
      work.height = h;
      const ctx = work.getContext('2d');
      if (!ctx) return;

      const out: ImageBitmap[] = [];
      for (let i = 0; i < count; i++) {
        if (cancelled) return;
        const t = (i / (count - 1)) * Math.max(0, duration - 0.05);
        await new Promise<void>((resolve) => {
          off.addEventListener('seeked', () => resolve(), { once: true });
          off.currentTime = t;
        });
        ctx.drawImage(off, 0, 0, w, h);
        out.push(await createImageBitmap(work));
      }
      if (cancelled) return;
      frames.current = out;
      cacheReadyRef.current = true;
      setCacheReady(true);
    };

    run().catch(() => {
      /* fall back to seeking the visible video */
    });
    return () => {
      cancelled = true;
    };
  }, [hasFrame]);

  // scroll + render loop
  useEffect(() => {
    const readTarget = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      target.current = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    };
    readTarget();
    window.addEventListener('scroll', readTarget, { passive: true });
    window.addEventListener('resize', readTarget);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const sizeCanvas = () => {
      const c = canvasRef.current;
      if (!c) return;
      c.width = Math.round(window.innerWidth * dpr);
      c.height = Math.round(window.innerHeight * dpr);
    };
    sizeCanvas();
    window.addEventListener('resize', sizeCanvas);

    let raf = 0;
    const tick = () => {
      smoothed.current += (target.current - smoothed.current) * 0.12;
      const p = smoothed.current;

      if (cacheReadyRef.current && frames.current.length) {
        const c = canvasRef.current;
        const ctx = c?.getContext('2d');
        if (c && ctx) {
          const f = frames.current[Math.min(frames.current.length - 1, Math.round(p * (frames.current.length - 1)))];
          const s = Math.max(c.width / f.width, c.height / f.height);
          const dw = f.width * s;
          const dh = f.height * s;
          ctx.drawImage(f, (c.width - dw) / 2, (c.height - dh) / 2, dw, dh);
        }
      } else {
        const v = videoRef.current;
        if (v && v.readyState >= 2 && isFinite(v.duration)) {
          const t = p * (v.duration - 0.05);
          if (Math.abs(t - lastSeek.current) > 0.04) {
            lastSeek.current = t;
            v.currentTime = t;
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', readTarget);
      window.removeEventListener('resize', readTarget);
      window.removeEventListener('resize', sizeCanvas);
    };
  }, []);

  const posterVisible = !(hasFrame || cacheReady);
  const videoVisible = hasFrame && !cacheReady;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
      <div
        className={`absolute inset-0 bg-gradient-to-b from-[#1b2430] via-[#2a3442] to-[#0a0a0a] transition-opacity duration-500 ${
          posterVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      />
      <video
        ref={videoRef}
        src={VIDEO_URL}
        muted
        playsInline
        preload="auto"
        crossOrigin="anonymous"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          videoVisible ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 h-full w-full transition-opacity duration-500 ${cacheReady ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
}
