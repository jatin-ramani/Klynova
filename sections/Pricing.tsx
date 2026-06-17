import { Reveal, Stagger } from "@/components/Anim";
import TiltCard from "@/components/TiltCard";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$1,500+",
    desc: "Landing pages & small sites.",
    featured: false,
    features: [
      "1–3 pages",
      "Responsive design",
      "Basic SEO",
      "2 revision rounds",
      "2-week delivery",
    ],
  },
  {
    name: "Growth",
    price: "$4,000+",
    desc: "Full web apps & dashboards.",
    featured: true,
    features: [
      "Everything in Starter",
      "Custom web app",
      "API & database",
      "AI integration",
      "Priority support",
      "30 days post-launch support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Complex, scalable platforms.",
    featured: false,
    features: [
      "Everything in Growth",
      "Dedicated team",
      "Architecture consulting",
      "SLA & uptime",
      "Ongoing retainer",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="section section-light" style={{ padding: "130px 0" }}>
      <div className="lg-orb orb-purple" style={{ width: 400, height: 400, top: "4%", right: "6%" }} />
      <div className="lg-orb orb-teal" style={{ width: 300, height: 300, bottom: "6%", left: "4%" }} />

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="lg-badge">Pricing</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
            Simple, transparent <span className="lg-grad-text">pricing</span>
          </h2>
          <p className="lg-sub" style={{ maxWidth: 500, margin: "0 auto", fontSize: 17 }}>
            No surprises — pick a starting point and we tailor from there.
          </p>
        </Reveal>

        <Stagger
          each={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            alignItems: "stretch",
          }}
        >
          {plans.map((p) => (
            <TiltCard
              key={p.name}
              max={6}
              className={`lg-glass ${p.featured ? "lg--chroma" : "lg--medium"}`}
              style={{
                position: "relative",
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.featured && (
                <span
                  className="lg-badge"
                  style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)" }}
                >
                  Most Popular
                </span>
              )}
              <h3 style={{ color: "var(--ink)", fontWeight: 700, fontSize: 20 }}>{p.name}</h3>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "14px 0 6px" }}>
                <span className="lg-step-num">{p.price}</span>
                {p.price !== "Custom" && (
                  <span style={{ color: "var(--ink-soft)", fontSize: 14 }}>/project</span>
                )}
              </div>
              <p style={{ color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.6 }}>{p.desc}</p>

              <hr className="lg-divider" style={{ margin: "24px 0" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--ink-soft)", fontSize: 14.5 }}>
                    <Check size={17} strokeWidth={2.6} color="#2c9a92" style={{ flexShrink: 0, marginTop: 1 }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="/contact"
                className={`lg-btn ${p.featured ? "lg-btn-primary" : "lg-btn-ghost"}`}
                style={{ justifyContent: "center", marginTop: "auto" }}
              >
                Get Started →
              </a>
            </TiltCard>
          ))}
        </Stagger>

        <p className="lg-sub" style={{ textAlign: "center", fontSize: 14, marginTop: 32 }}>
          All projects include a free discovery call. Prices are starting points.
        </p>
      </div>
    </section>
  );
}
