"use client";

import { useEffect, useRef } from "react";

/**
 * Liquid-glass refraction filters.
 *
 * A lens displacement map is generated once on the client (neutral grey in the
 * centre, edges encoding an inward refraction vector) and fed to two SVG
 * filters via <feImage>. With `primitiveUnits="objectBoundingBox"` the same map
 * stretches to any element size, so one filter serves every glass panel — the
 * backdrop physically bends at the rim like real curved glass.
 * Referenced from CSS as `backdrop-filter: url(#liquid-glass)` (Chromium only).
 */
function makeLensMap(size = 320, band = 0.16): string {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d");
  if (!ctx) return "";
  const img = ctx.createImageData(size, size);
  const d = img.data;
  const smooth = (t: number) => {
    const s = Math.min(1, Math.max(0, t));
    return s * s * (3 - 2 * s);
  };
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const u = x / (size - 1);
      const v = y / (size - 1);
      const dx = smooth(1 - u / band) - smooth(1 - (1 - u) / band);
      const dy = smooth(1 - v / band) - smooth(1 - (1 - v) / band);
      const i = (y * size + x) * 4;
      d[i] = Math.round(128 + dx * 127); // R → x displacement
      d[i + 1] = Math.round(128 + dy * 127); // G → y displacement
      d[i + 2] = 128;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

export default function LiquidFilters() {
  const img1 = useRef<SVGFEImageElement>(null);
  const img2 = useRef<SVGFEImageElement>(null);

  useEffect(() => {
    const url = makeLensMap();
    if (!url) return;
    img1.current?.setAttribute("href", url);
    img2.current?.setAttribute("href", url);
  }, []);

  return (
    <svg
      aria-hidden="true"
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
    >
      <defs>
        <filter
          id="liquid-glass"
          primitiveUnits="objectBoundingBox"
          x="0"
          y="0"
          width="1"
          height="1"
          colorInterpolationFilters="sRGB"
        >
          <feImage ref={img1} result="map" preserveAspectRatio="none" x="0" y="0" width="1" height="1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.003" result="b" />
          <feDisplacementMap in="b" in2="map" scale="0.16" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        <filter
          id="liquid-glass-strong"
          primitiveUnits="objectBoundingBox"
          x="0"
          y="0"
          width="1"
          height="1"
          colorInterpolationFilters="sRGB"
        >
          <feImage ref={img2} result="map" preserveAspectRatio="none" x="0" y="0" width="1" height="1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.004" result="b" />
          <feDisplacementMap in="b" in2="map" scale="0.30" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
