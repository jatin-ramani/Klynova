"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Lightweight WOW.js replacement.
 * Elements are hidden by CSS until revealed by adding `startnext_animated`.
 *  - Hero (.main-banner) reveals immediately on load.
 *  - Every other `.wow` element reveals only once it is scrolled into the upper
 *    ~75% of the viewport (a viewport-relative trigger, so a tall screen no
 *    longer animates lower sections before they're reached).
 * Re-runs on every route change so client-navigated pages animate too.
 */
export default function Wow() {
  const pathname = usePathname();

  // Always start a fresh load at the top so each section animates as it is
  // scrolled into view, rather than firing at a restored scroll position.
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    let io: IntersectionObserver | null = null;

    const reveal = (el: HTMLElement) => {
      if (el.classList.contains("startnext_animated")) return;
      const delay = el.getAttribute("data-wow-delay");
      const duration = el.getAttribute("data-wow-duration");
      if (delay) el.style.animationDelay = delay;
      if (duration) el.style.animationDuration = duration;
      el.style.visibility = "visible";
      el.classList.add("startnext_animated");
    };

    const setup = () => {
      // Hero animates immediately on load.
      document
        .querySelectorAll<HTMLElement>(".main-banner .wow")
        .forEach(reveal);

      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".wow")
      ).filter((el) => !el.classList.contains("startnext_animated"));
      if (els.length === 0) return;

      if (!("IntersectionObserver" in window)) {
        els.forEach(reveal);
        return;
      }

      io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              reveal(entry.target as HTMLElement);
              obs.unobserve(entry.target);
            }
          });
        },
        // Trigger when the element enters the top ~75% of the viewport.
        { rootMargin: "0px 0px -25% 0px", threshold: 0 }
      );

      els.forEach((el) => io!.observe(el));
    };

    const raf = requestAnimationFrame(setup);
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [pathname]);

  return null;
}
