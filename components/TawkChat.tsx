"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

/** Tawk.to live-chat widget, loaded once site-wide. */
export default function TawkChat() {
  useEffect(() => {
    if (document.getElementById("tawkto-embed")) return;
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    const s = document.createElement("script");
    s.id = "tawkto-embed";
    s.async = true;
    s.src = "https://embed.tawk.to/6a31303a4946e31d43a1fac1/1jr828q0b";
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    document.body.appendChild(s);
  }, []);

  return null;
}
