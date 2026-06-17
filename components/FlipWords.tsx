"use client";

import { useEffect, useState } from "react";

/** Cycles through words with a flip-in animation (Aceternity-style). */
export default function FlipWords({
  words,
  interval = 2600,
  className = "",
  style,
}: {
  words: string[];
  interval?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setI((v) => (v + 1) % words.length),
      interval
    );
    return () => window.clearInterval(id);
  }, [words.length, interval]);

  return (
    <span key={i} className={`flip-words ${className}`} style={style}>
      {words[i]}
    </span>
  );
}
