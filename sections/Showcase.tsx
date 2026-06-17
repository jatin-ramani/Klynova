import { Reveal } from "@/components/Anim";
import ContainerScroll from "@/components/ContainerScroll";
import Meteors from "@/components/Meteors";

const SHOT = "/projects/exptra.png";

export default function Showcase() {
  return (
    <section className="section section-dark" style={{ padding: "120px 0 130px" }}>
      <div className="lg-bg-overlay" />
      <Meteors count={12} />
      <div className="lg-orb orb-purple" style={{ width: 420, height: 420, top: "10%", left: "4%" }} />
      <div className="lg-orb orb-teal" style={{ width: 320, height: 320, bottom: "6%", right: "6%" }} />

      <div className="lg-content container">
        <ContainerScroll
          header={
            <Reveal style={{ textAlign: "center", marginBottom: 44 }}>
              <span className="lg-badge">See It Live</span>
              <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
                Products that feel <span className="lg-grad-text">effortless</span>
              </h2>
              <p className="lg-sub" style={{ maxWidth: 520, margin: "0 auto", fontSize: 17 }}>
                Fast, polished interfaces your users actually enjoy — scroll to bring it into focus.
              </p>
            </Reveal>
          }
        >
          {/* Browser mockup */}
          <div
            className="lg-glass lg--bubble"
            style={{ maxWidth: 1000, margin: "0 auto", padding: 12, borderRadius: 18 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 8px 12px" }}>
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
              <span
                style={{
                  marginLeft: 14,
                  flex: 1,
                  height: 22,
                  borderRadius: 7,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              />
            </div>
            <img
              src={SHOT}
              alt="Product preview"
              style={{ width: "100%", display: "block", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)" }}
            />
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
