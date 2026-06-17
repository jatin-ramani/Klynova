import { Reveal, Stagger, ScrollSpin } from "@/components/Anim";
import TiltCard from "@/components/TiltCard";
import { Code2, Bot, Palette, Server } from "lucide-react";

const services = [
  {
    Icon: Code2,
    title: "Web App Development",
    desc: "Fast, responsive, and scalable web apps built with React and Next.js.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    Icon: Bot,
    title: "AI Integration",
    desc: "Chatbots, automation, and intelligent features built into your product.",
    tags: ["OpenAI", "Claude API", "Automation"],
  },
  {
    Icon: Palette,
    title: "UI/UX Design",
    desc: "Clean, modern interfaces designed for clarity and conversion.",
    tags: ["Figma", "Design Systems"],
  },
  {
    Icon: Server,
    title: "API & Backend",
    desc: "Robust APIs and backend systems, ready to scale with your product.",
    tags: ["REST", "GraphQL", "Node.js"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-light" style={{ padding: "130px 0" }}>
      <div className="lg-orb orb-purple" style={{ width: 420, height: 420, top: "2%", right: "6%" }} />
      <div className="lg-orb orb-teal" style={{ width: 320, height: 320, bottom: "4%", left: "4%" }} />
      <div className="lg-orb orb-pink" style={{ width: 260, height: 260, top: "40%", left: "30%" }} />

      <ScrollSpin
        turns={-1}
        style={{ position: "absolute", top: "-6%", left: "-4%", width: 360, height: 360, zIndex: 2 }}
      >
        <div className="lg-ring" style={{ position: "absolute", inset: 0 }} />
        <div className="lg-ring" style={{ position: "absolute", inset: 60 }} />
      </ScrollSpin>

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="lg-badge">What We Do</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
            Full-Stack <span className="lg-grad-text">Services</span>
          </h2>
          <p className="lg-sub" style={{ maxWidth: 480, margin: "0 auto", fontSize: 17 }}>
            From concept to deployment — every layer of your product, handled.
          </p>
        </Reveal>

        <Stagger
          each={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(244px, 1fr))",
            gap: 22,
          }}
        >
          {services.map((s) => (
            <TiltCard
              key={s.title}
              className="lg-glass lg--medium"
              style={{
                padding: "30px 26px",
                display: "flex",
                flexDirection: "column",
                minHeight: 240,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(123,110,246,0.12)",
                  border: "1px solid rgba(123,110,246,0.22)",
                  marginBottom: 18,
                }}
              >
                <s.Icon size={24} strokeWidth={1.7} color="#6b5cf0" />
              </div>
              <h3 style={{ color: "var(--ink)", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>
                {s.title}
              </h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.6, marginBottom: 18, flex: 1 }}>
                {s.desc}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {s.tags.map((t) => (
                  <span key={t} className="lg-tag">
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
