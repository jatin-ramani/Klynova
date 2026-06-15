"use client";

import { useEffect, useState } from "react";
import FeatherIcon from "./FeatherIcon";

/** Back-to-top button: appears past 300px scroll, smooth-scrolls to top. */
export default function GoTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="go-top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
      }}
    >
      <FeatherIcon name="arrow-up" />
    </div>
  );
}
