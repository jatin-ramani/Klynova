"use client";

import { useEffect, useRef, useState } from "react";

/** Counts up from 0 to `to` once it scrolls into view. */
export default function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.8,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          let raf = 0;
          let startTs = 0;
          const tick = (now: number) => {
            if (!startTs) startTs = now;
            const p = Math.min(1, (now - startTs) / (duration * 1000));
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(to * eased);
            if (p < 1) raf = requestAnimationFrame(tick);
            else setVal(to);
          };
          raf = requestAnimationFrame(tick);
          el.dataset.raf = String(raf);
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {Math.round(val)}
      {suffix}
    </span>
  );
}
