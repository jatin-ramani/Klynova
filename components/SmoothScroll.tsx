"use client";

import { ReactLenis, type LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const QUERY = "(prefers-reduced-motion: reduce)";

function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(QUERY);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(QUERY).matches,
    () => false
  );
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    ScrollTrigger.refresh();
    return () => gsap.ticker.remove(update);
  }, [reduced]);

  // Respect reduced-motion: skip smooth scroll entirely.
  if (reduced) return <>{children}</>;

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.1,
        duration: 1.4,
        smoothWheel: true,
        syncTouch: true,
        autoRaf: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
