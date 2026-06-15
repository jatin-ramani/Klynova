"use client";

import { useEffect, useState } from "react";

/** Full-screen preloader that fades out on window load (jQuery `.fadeOut()`). */
export default function Preloader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const start = () => setHidden(true);
    if (document.readyState === "complete") {
      const t = setTimeout(start, 200);
      return () => clearTimeout(t);
    }
    window.addEventListener("load", start);
    return () => window.removeEventListener("load", start);
  }, []);

  useEffect(() => {
    if (!hidden) return;
    const t = setTimeout(() => setRemoved(true), 600);
    return () => clearTimeout(t);
  }, [hidden]);

  if (removed) return null;

  return (
    <div
      className="preloader"
      style={{
        opacity: hidden ? 0 : 1,
        transition: "opacity 0.4s ease",
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <div className="spinner"></div>
    </div>
  );
}
