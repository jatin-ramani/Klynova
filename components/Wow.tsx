"use client";

import { useEffect } from "react";

/**
 * Lightweight WOW.js replacement matching the theme config:
 *   boxClass: 'wow', animateClass: 'startnext_animated', offset: 20.
 * Elements keep their animate.css class (e.g. `fadeInDown`) and are hidden
 * until scrolled into view, then revealed by adding `startnext_animated`.
 */
export default function Wow() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>(".wow")
    ).filter((el) => !el.classList.contains("startnext_animated"));

    const reveal = (el: HTMLElement) => {
      const delay = el.getAttribute("data-wow-delay");
      const duration = el.getAttribute("data-wow-duration");
      if (delay) el.style.animationDelay = delay;
      if (duration) el.style.animationDuration = duration;
      el.style.visibility = "visible";
      el.classList.add("startnext_animated");
    };

    if (!("IntersectionObserver" in window)) {
      els.forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -20px 0px", threshold: 0 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
