import { Reveal, Stagger } from "@/components/Anim";

const steps = [
  { n: "01", title: "Discover", desc: "We learn your goals, users, and constraints to define what success looks like." },
  { n: "02", title: "Design", desc: "Wireframes and polished UI that match your brand and convert visitors." },
  { n: "03", title: "Build", desc: "Clean, scalable code with React & Next.js — shipped in fast iterations." },
  { n: "04", title: "Launch", desc: "Deploy, measure, and keep improving with you after go-live." },
];

export default function Process() {
  return (
    <section className="section section-light" style={{ padding: "130px 0" }}>
      <div className="lg-orb orb-teal" style={{ width: 380, height: 380, top: "8%", left: "-4%" }} />
      <div className="lg-orb orb-purple" style={{ width: 300, height: 300, bottom: "6%", right: "2%" }} />

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="lg-badge">How We Work</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
            A simple, transparent <span className="lg-grad-text">process</span>
          </h2>
          <p className="lg-sub" style={{ maxWidth: 480, margin: "0 auto", fontSize: 17 }}>
            Four focused steps from first call to a launched product.
          </p>
        </Reveal>

        <Stagger
          each={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 22,
          }}
        >
          {steps.map((s) => (
            <div
              key={s.n}
              className="lg-glass lg--soft lg-interactive"
              style={{ padding: "30px 26px", minHeight: 210 }}
            >
              <div className="lg-step-num" style={{ marginBottom: 16 }}>{s.n}</div>
              <h3 style={{ color: "var(--ink)", fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
