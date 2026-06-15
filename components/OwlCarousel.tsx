"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Responsive = Record<number, number>; // minWidth(px) -> items visible

interface Props {
  items: ReactNode[];
  responsive: Responsive;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  dots?: boolean;
  margin?: number;
  smartSpeed?: number;
}

/**
 * Minimal Owl Carousel reimplementation that renders the exact owl-theme
 * DOM (owl-carousel/owl-stage/owl-item/owl-dots) so the ported vendor CSS
 * styles it identically. Supports responsive item counts, autoplay and an
 * infinite loop via cloned leading slides.
 */
export default function OwlCarousel({
  items,
  responsive,
  className = "",
  loop = true,
  autoplay = true,
  autoplayTimeout = 5000,
  dots = false,
  margin = 0,
  smartSpeed = 450,
}: Props) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [perView, setPerView] = useState(1);
  const [stageWidth, setStageWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState(true);

  // Resolve responsive item count + measure stage width.
  useEffect(() => {
    const recalc = () => {
      const w = window.innerWidth;
      const bps = Object.keys(responsive)
        .map(Number)
        .sort((a, b) => a - b);
      let v = responsive[bps[0]] ?? 1;
      for (const bp of bps) if (w >= bp) v = responsive[bp];
      setPerView(v);
      if (outerRef.current) setStageWidth(outerRef.current.clientWidth);
    };
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [responsive]);

  const itemWidth = stageWidth ? stageWidth / perView : 0;
  const cloneCount = loop ? perView : 0;
  const extended = loop ? [...items, ...items.slice(0, cloneCount)] : items;

  // Autoplay.
  useEffect(() => {
    if (!autoplay || itemWidth === 0) return;
    const id = setInterval(() => setIndex((i) => i + 1), autoplayTimeout);
    return () => clearInterval(id);
  }, [autoplay, autoplayTimeout, itemWidth]);

  // Seamless loop: when we've advanced into the clones, snap back silently.
  useEffect(() => {
    if (!loop) return;
    if (index >= items.length) {
      const t = setTimeout(() => {
        setAnim(false);
        setIndex((i) => i - items.length);
      }, smartSpeed);
      return () => clearTimeout(t);
    }
  }, [index, items.length, loop, smartSpeed]);

  // Re-enable animation one frame after a silent snap.
  useEffect(() => {
    if (anim) return;
    const t = setTimeout(() => setAnim(true), 50);
    return () => clearTimeout(t);
  }, [anim]);

  const translateX = -(index * itemWidth);
  const pages = Math.max(1, Math.ceil(items.length / perView));
  const activePage = Math.floor((((index % items.length) + items.length) % items.length) / perView);

  return (
    <div
      ref={outerRef}
      className={`owl-carousel owl-theme owl-loaded owl-drag ${className}`.trim()}
    >
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            width: itemWidth * extended.length,
            transform: `translate3d(${translateX}px, 0px, 0px)`,
            transition: anim ? `transform ${smartSpeed}ms ease` : "none",
          }}
        >
          {extended.map((item, i) => (
            <div
              className="owl-item"
              key={i}
              style={{ width: itemWidth, ...(margin ? { marginRight: margin } : {}) }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {dots && (
        <div className="owl-dots">
          {Array.from({ length: pages }).map((_, p) => (
            <button
              key={p}
              type="button"
              className={`owl-dot ${p === activePage ? "active" : ""}`.trim()}
              onClick={() => {
                setAnim(true);
                setIndex(p * perView);
              }}
              aria-label={`slide ${p + 1}`}
            >
              <span></span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
