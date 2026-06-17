import { Reveal, ScrollSpin } from "@/components/Anim";

const DEFAULT_BG =
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=2400&q=90";

export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  bg = DEFAULT_BG,
}: {
  badge: string;
  title: string;
  highlight?: string;
  subtitle: string;
  bg?: string;
}) {
  return (
    <section className="section section-dark" style={{ padding: "180px 0 90px" }}>
      <div className="lg-bg" style={{ backgroundImage: `url('${bg}')` }} />
      <div className="lg-bg-overlay" />

      <div className="lg-orb orb-purple" style={{ width: 420, height: 420, top: "-10%", right: "8%" }} />
      <div className="lg-orb orb-teal" style={{ width: 300, height: 300, bottom: "-12%", left: "6%" }} />

      <ScrollSpin
        turns={1}
        style={{ position: "absolute", top: "12%", left: "-3%", width: 300, height: 300, zIndex: 2, opacity: 0.6 }}
      >
        <div className="lg-ring" style={{ position: "absolute", inset: 0 }} />
        <div className="lg-ring" style={{ position: "absolute", inset: 60 }} />
      </ScrollSpin>

      <div className="lg-content container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="lg-badge">{badge}</span>
        </Reveal>
        <Reveal delay={0.05} y={50}>
          <h1 className="lg-h1" style={{ fontSize: "clamp(34px, 5.6vw, 66px)", margin: "20px 0 18px" }}>
            {title} {highlight && <span className="lg-grad-text">{highlight}</span>}
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lg-sub" style={{ fontSize: 18, maxWidth: 600, margin: "0 auto" }}>
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
