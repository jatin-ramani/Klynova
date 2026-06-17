import { Reveal, Stagger, ScrollSpin } from "@/components/Anim";
import { MessagesSquare, Cpu, BadgeCheck } from "lucide-react";

const ABOUT_BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&q=90";

const values = [
  { Icon: MessagesSquare, title: "Direct Collaboration", text: "Work directly with the people building your product — no account managers, no middlemen." },
  { Icon: Cpu, title: "Modern Engineering", text: "Every project is built with current, well-supported technology — clean code, no shortcuts." },
  { Icon: BadgeCheck, title: "Honest Delivery", text: "Clear timelines, transparent pricing, and real support after launch." },
];

export default function About() {
  return (
    <section className="section section-dark" style={{ padding: "170px 0 130px" }}>
      <div className="lg-bg" style={{ backgroundImage: `url('${ABOUT_BG}')` }} />
      <div className="lg-bg-overlay" />

      <div className="lg-orb orb-purple" style={{ width: 440, height: 440, top: "4%", right: "0%" }} />
      <div className="lg-orb orb-teal" style={{ width: 320, height: 320, bottom: "8%", left: "2%" }} />

      <ScrollSpin
        turns={1}
        style={{ position: "absolute", top: "8%", left: "-4%", width: 320, height: 320, zIndex: 2, opacity: 0.7 }}
      >
        <div className="lg-ring" style={{ position: "absolute", inset: 0 }} />
        <div className="lg-ring" style={{ position: "absolute", inset: 70 }} />
      </ScrollSpin>

      <div className="lg-content container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="lg-badge">About Klynova</span>
        </Reveal>
        <Reveal delay={0.05} y={56}>
          <h1 className="lg-h1" style={{ fontSize: "clamp(32px, 5.6vw, 62px)", margin: "22px 0 22px" }}>
            A studio built for <span className="lg-grad-text">modern products</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="lg-sub" style={{ fontSize: 18, maxWidth: 660, margin: "0 auto" }}>
            Klynova is a software development studio focused on building digital
            products that move the needle — modern web applications, AI-powered
            tools, and scalable platforms. We pair clean engineering with
            thoughtful design, working with founders and teams worldwide.
          </p>
        </Reveal>

        <Stagger
          each={0.12}
          style={{
            marginTop: 64,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 22,
            textAlign: "left",
          }}
        >
          {values.map((v) => (
            <div key={v.title} className="lg-glass lg--medium lg-interactive" style={{ padding: "30px 28px" }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 16,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  marginBottom: 18,
                }}
              >
                <v.Icon size={24} strokeWidth={1.7} color="#A099FF" />
              </div>
              <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{v.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, lineHeight: 1.6 }}>{v.text}</p>
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
