"use client";

import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const GlassScene = dynamic(() => import("./three/GlassScene"), { ssr: false });

const QUERY = "(prefers-reduced-motion: reduce)";

function useShow3D() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(QUERY);
      mq.addEventListener("change", cb);
      window.addEventListener("resize", cb);
      return () => {
        mq.removeEventListener("change", cb);
        window.removeEventListener("resize", cb);
      };
    },
    () => !window.matchMedia(QUERY).matches && window.innerWidth > 720,
    () => false
  );
}

export default function Hero3D() {
  const show = useShow3D();
  if (!show) return null;

  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}
    >
      {/* glow halo behind the crystal (also a graceful presence if WebGL is weak) */}
      <div
        style={{
          position: "absolute",
          top: "38%",
          left: "72%",
          width: 460,
          height: 460,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(123,110,246,0.5), rgba(79,195,195,0.22) 45%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <GlassScene />
    </div>
  );
}
