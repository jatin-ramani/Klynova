"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Base = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

/** Fade/slide/scale in once the element scrolls into view. */
export function Reveal({
  children,
  className,
  style,
  y = 44,
  scale = 1,
  blur = false,
  delay = 0,
  duration = 0.95,
  start = "top 86%",
}: Base & {
  y?: number;
  scale?: number;
  blur?: boolean;
  delay?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReduced() || !ref.current) return;
      gsap.from(ref.current, {
        autoAlpha: 0,
        y,
        scale,
        ...(blur ? { filter: "blur(16px)" } : {}),
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start, once: true },
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/** Reveal direct children with a stagger (for grids / lists). */
export function Stagger({
  children,
  className,
  style,
  y = 40,
  each = 0.09,
  start = "top 84%",
}: Base & { y?: number; each?: number; start?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReduced() || !ref.current) return;
      gsap.from(Array.from(ref.current.children), {
        autoAlpha: 0,
        y,
        duration: 0.85,
        ease: "power3.out",
        stagger: each,
        scrollTrigger: { trigger: ref.current, start, once: true },
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/** Scroll-linked vertical parallax. speed>0 moves up as you scroll. */
export function Parallax({
  children,
  className,
  style,
  speed = 0.25,
}: Base & { speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReduced() || !ref.current) return;
      gsap.to(ref.current, {
        yPercent: -speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

/** Rotates with scroll progress — for decorative orbs / rings / objects. */
export function ScrollSpin({
  children,
  className,
  style,
  turns = 1,
  scrub = 1.2,
}: Base & { turns?: number; scrub?: number | boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (prefersReduced() || !ref.current) return;
      gsap.to(ref.current, {
        rotation: 360 * turns,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub,
        },
      });
    },
    { scope: ref }
  );
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
