import { Reveal, ScrollSpin } from "@/components/Anim";
import Meteors from "@/components/Meteors";

const CTA_BG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=2400&q=90";

export default function CTA() {
  return (
    <section className="section section-dark" style={{ padding: "130px 0" }}>
      <div className="lg-bg" style={{ backgroundImage: `url('${CTA_BG}')` }} />
      <div className="lg-bg-overlay" />
      <Meteors count={14} />

      <div className="lg-orb orb-purple" style={{ width: 520, height: 520, top: "0%", left: "8%" }} />
      <div className="lg-orb orb-teal" style={{ width: 340, height: 340, bottom: "0%", right: "10%" }} />

      <ScrollSpin
        turns={1.2}
        style={{ position: "absolute", top: "50%", right: "6%", width: 280, height: 280, marginTop: -140, zIndex: 2, opacity: 0.6 }}
      >
        <div className="lg-ring" style={{ position: "absolute", inset: 0 }} />
        <div className="lg-ring" style={{ position: "absolute", inset: 50 }} />
      </ScrollSpin>

      <div className="lg-content container" style={{ maxWidth: 760 }}>
        <Reveal y={50} scale={0.97}>
          <div
            className="lg-glass lg--chroma"
            style={{ padding: "clamp(40px, 6vw, 76px)", textAlign: "center" }}
          >
            <span className="lg-badge" style={{ marginBottom: 22 }}>Let&apos;s Work Together</span>
            <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.2vw, 50px)", margin: "0 0 18px" }}>
              Ready to build something{" "}
              <span className="lg-grad-text">extraordinary?</span>
            </h2>
            <p className="lg-sub" style={{ fontSize: 17, maxWidth: 480, margin: "0 auto 38px" }}>
              Tell us about your project and let&apos;s create a digital product that
              makes a real difference.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/contact" className="lg-btn lg-btn-primary" style={{ fontSize: 16 }}>
                Start a Project →
              </a>
              <a href="mailto:hello@klynova.in" className="lg-btn lg-btn-ghost" style={{ fontSize: 16 }}>
                Send an Email
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
