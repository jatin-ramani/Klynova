import { Reveal, Stagger, ScrollSpin } from "@/components/Anim";
import Hero3D from "@/components/Hero3D";
import Meteors from "@/components/Meteors";
import Spotlight from "@/components/Spotlight";
import FlipWords from "@/components/FlipWords";

const HERO_BG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=2400&q=90";

const stats = [
  { number: "20+", label: "Projects Delivered" },
  { number: "3+", label: "Years Building" },
  { number: "100%", label: "Remote-First" },
];

export default function Hero() {
  return (
    <section
      className="section section-dark"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 120,
        paddingBottom: 80,
      }}
    >
      <div className="lg-bg" style={{ backgroundImage: `url('${HERO_BG}')` }} />
      <div className="lg-bg-overlay" />
      <Meteors count={18} />
      <Spotlight />

      {/* floating refractive 3D crystal (lazy, desktop only) */}
      <Hero3D />

      {/* ambient orbs — refracted by the glass */}
      <div className="lg-orb orb-purple" style={{ width: 520, height: 520, top: "4%", left: "-8%" }} />
      <div className="lg-orb orb-teal" style={{ width: 360, height: 360, bottom: "8%", right: "-6%" }} />
      <div className="lg-orb orb-blue" style={{ width: 300, height: 300, top: "44%", right: "22%" }} />

      {/* scroll-rotating decorative rings with an orbiting bubble */}
      <ScrollSpin
        turns={1.4}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 820,
          height: 820,
          marginTop: -410,
          marginLeft: -410,
          zIndex: 2,
          opacity: 0.8,
        }}
      >
        <div className="lg-ring" style={{ position: "absolute", inset: 0 }} />
        <div className="lg-ring" style={{ position: "absolute", inset: 110 }} />
        <div className="lg-ring" style={{ position: "absolute", inset: 240 }} />
        <div
          style={{
            position: "absolute",
            top: -10,
            left: "50%",
            width: 20,
            height: 20,
            marginLeft: -10,
            borderRadius: "50%",
            background: "var(--teal)",
            boxShadow: "0 0 28px var(--teal)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 100,
            left: "calc(50% - 6px)",
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "var(--purple-soft)",
            boxShadow: "0 0 22px var(--purple)",
          }}
        />
      </ScrollSpin>

      <div className="lg-content container" style={{ textAlign: "center" }}>
        <Reveal>
          <span className="lg-badge">
            <span className="dot" />
            AI-Powered Software Studio
          </span>
        </Reveal>

        <Reveal delay={0.05} y={60}>
          <h1
            className="lg-h1"
            style={{ fontSize: "clamp(34px, 7vw, 82px)", margin: "26px 0 24px" }}
          >
            We build digital products
            <br />
            <FlipWords
              className="lg-grad-text"
              words={[
                "that grow your business",
                "that scale with you",
                "your users will love",
                "powered by AI",
              ]}
            />
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p
            className="lg-sub"
            style={{
              fontSize: "clamp(16px, 2.2vw, 20px)",
              maxWidth: 600,
              margin: "0 auto 44px",
            }}
          >
            Klynova crafts modern web applications, AI-powered tools, and scalable
            digital products with React, Next.js, and cutting-edge AI integrations.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
            <a href="/contact" className="lg-btn lg-btn-primary" style={{ fontSize: 16 }}>
              Start a Project →
            </a>
            <a href="/work" className="lg-btn lg-btn-ghost moving-border" style={{ fontSize: 16 }}>
              View Our Work
            </a>
          </div>
        </Reveal>

        <Stagger
          each={0.12}
          style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="lg-glass lg--chroma lg-interactive"
              style={{
                padding: "20px 30px",
                minWidth: 170,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 30, fontWeight: 800 }}>
                {s.number}
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.6)",
                  marginTop: 4,
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
