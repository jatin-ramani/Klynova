import { Reveal } from "@/components/Anim";

const TESTIMONIALS_BG =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=2400&q=90";

const testimonials = [
  {
    quote:
      "Klynova shipped our MVP weeks ahead of schedule without cutting corners. The quality held up as we scaled, and our users noticed.",
    initials: "MB",
    name: "Marcus Bennett",
    role: "Founder · Northwind",
  },
  {
    quote:
      "Communication was effortless — clear updates, fast turnarounds, and a team that actually understood our product.",
    initials: "EF",
    name: "Elena Frost",
    role: "Product Lead · Brightloop",
  },
  {
    quote:
      "They rebuilt our platform on a tight deadline and the result was rock solid. Clean code, thoughtful UX, zero drama at launch.",
    initials: "RI",
    name: "Rahul Iyer",
    role: "CTO · Finable",
  },
  {
    quote:
      "The AI features they added genuinely moved our numbers. Support requests dropped and onboarding got noticeably smoother.",
    initials: "SO",
    name: "Sofia Okafor",
    role: "Head of Ops · Lumen",
  },
  {
    quote:
      "Design and engineering in one team made everything faster. The final product looked and felt better than our mockups.",
    initials: "DK",
    name: "David Kim",
    role: "Co-founder · Pathwise",
  },
];

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <div
      className="lg-glass lg--medium"
      style={{ width: 360, flexShrink: 0, padding: "28px 28px", marginRight: 22, whiteSpace: "normal" }}
    >
      <p style={{ color: "rgba(255,255,255,0.82)", fontSize: 15, lineHeight: 1.7, fontStyle: "italic" }}>
        &ldquo;{t.quote}&rdquo;
      </p>
      <hr className="lg-divider" style={{ margin: "22px 0" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: "50%",
            background: "linear-gradient(135deg,#7B6EF6,#4FC3C3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: 14,
            flexShrink: 0,
          }}
        >
          {t.initials}
        </div>
        <div>
          <div style={{ color: "#fff", fontWeight: 600 }}>{t.name}</div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 13 }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section section-dark" style={{ padding: "130px 0" }}>
      <div className="lg-bg" style={{ backgroundImage: `url('${TESTIMONIALS_BG}')` }} />
      <div className="lg-bg-overlay" />

      <div className="lg-orb orb-purple" style={{ width: 400, height: 400, top: "4%", right: "6%" }} />
      <div className="lg-orb orb-teal" style={{ width: 300, height: 300, bottom: "6%", left: "4%" }} />

      <div className="lg-content">
        <div className="container">
          <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="lg-badge">Client Love</span>
            <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
              What clients <span className="lg-grad-text">say</span>
            </h2>
            <p className="lg-sub" style={{ maxWidth: 500, margin: "0 auto", fontSize: 17 }}>
              Founders and product teams on what it&apos;s like to build with us.
            </p>
          </Reveal>
        </div>

        {/* Infinite moving row (pauses on hover) */}
        <div className="lg-marquee-mask" style={{ overflow: "hidden", padding: "10px 0" }}>
          <div className="lg-marquee" style={{ animationDuration: "52s" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
