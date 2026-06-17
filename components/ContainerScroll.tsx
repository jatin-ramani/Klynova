"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Aceternity "Container Scroll" / Macbook-style reveal: the panel starts
 * tilted back and rotates flat (and scales up) as it scrolls into view.
 */
export default function ContainerScroll({
  header,
  children,
}: {
  header?: ReactNode;
  children: ReactNode;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const card = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReduced() || !card.current) return;
      gsap.set(card.current, { rotateX: 30, scale: 0.84, transformPerspective: 1400 });
      gsap.to(card.current, {
        rotateX: 0,
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top 78%",
          end: "top 16%",
          scrub: true,
        },
      });
    },
    { scope: wrap }
  );

  return (
    <div ref={wrap} style={{ perspective: "1400px" }}>
      {header}
      <div ref={card} style={{ transformStyle: "preserve-3d", willChange: "transform" }}>
        {children}
      </div>
    </div>
  );
}
