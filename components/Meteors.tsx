/**
 * Aceternity-style meteor shower. Deterministic placement (no Math.random)
 * so server and client markup match. Purely decorative.
 */
export default function Meteors({ count = 16 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 2, pointerEvents: "none" }}
    >
      {items.map((_, i) => {
        const left = (i / count) * 130 - 15;
        const top = (i * 31) % 45;
        const delay = (i % 6) * 0.9 + i * 0.17;
        const duration = 4 + (i % 5);
        return (
          <span
            key={i}
            className="meteor"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        );
      })}
    </div>
  );
}
