import { Reveal } from "@/components/Anim";

const tech = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "GraphQL",
  "AWS",
  "Docker",
  "OpenAI",
  "Figma",
];

export default function Marquee() {
  return (
    <section className="section section-dark" style={{ padding: "76px 0" }}>
      <div className="lg-orb orb-purple" style={{ width: 280, height: 280, top: "10%", right: "8%" }} />

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="lg-badge">Our Toolkit</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(22px, 3vw, 34px)", margin: "16px 0 0" }}>
            The modern stack we <span className="lg-grad-text">build with</span>
          </h2>
        </Reveal>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div className="lg-marquee">
          {[...tech, ...tech].map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="lg-glass lg--soft"
              style={{
                padding: "10px 22px",
                borderRadius: "var(--pill)",
                display: "inline-flex",
                gap: 10,
                whiteSpace: "nowrap",
                fontWeight: 600,
                color: "#fff",
                marginRight: 16,
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
