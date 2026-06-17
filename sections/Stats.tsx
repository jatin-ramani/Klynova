import { Reveal, Stagger } from "@/components/Anim";
import Counter from "@/components/Counter";

const stats = [
  { to: 40, prefix: "", suffix: "+", label: "Projects Shipped" },
  { to: 15, prefix: "", suffix: "+", label: "Happy Clients" },
  { to: 99, prefix: "", suffix: "%", label: "On-Time Delivery" },
  { to: 48, prefix: "24–", suffix: "h", label: "Avg. Response Time" },
];

export default function Stats() {
  return (
    <section className="section section-light" style={{ padding: "110px 0" }}>
      <div className="lg-orb orb-teal" style={{ width: 360, height: 360, top: "6%", left: "-2%" }} />
      <div className="lg-orb orb-purple" style={{ width: 300, height: 300, bottom: "8%", right: "4%" }} />

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="lg-badge">By The Numbers</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
            Results that <span className="lg-grad-text">speak</span>
          </h2>
          <p className="lg-sub" style={{ maxWidth: 500, margin: "0 auto", fontSize: 17 }}>
            A track record built on shipping real products, on time and with care.
          </p>
        </Reveal>

        <Stagger
          each={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 22,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="lg-glass lg-interactive"
              style={{ padding: "36px 26px", textAlign: "center" }}
            >
              <div className="lg-step-num" style={{ marginBottom: 12 }}>
                <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <div
                style={{
                  color: "var(--ink-soft)",
                  textTransform: "uppercase",
                  letterSpacing: ".06em",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
