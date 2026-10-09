import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type Props = {
  delay?: number;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Reveal({ delay = 0, as: Tag = 'div', className = '', children }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms`, transitionProperty: 'all', transitionDuration: '700ms', transitionTimingFunction: 'ease-out' }}
      className={`will-change-transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} ${className}`}
    >
      {children}
    </Tag>
  );
}
