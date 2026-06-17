"use client";

import type { FormEvent } from "react";
import { Reveal } from "@/components/Anim";

const CONTACT_BG =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=2400&q=90";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.18)",
  borderRadius: 14,
  color: "#fff",
  fontSize: 15,
  outline: "none",
  fontFamily: "inherit",
};

export default function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = String(f.get("subject") || "Project enquiry");
    const body = `Name: ${f.get("name")}\nEmail: ${f.get("email")}\n\n${f.get("message")}`;
    window.location.href = `mailto:hello@klynova.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section section-dark" style={{ padding: "170px 0 130px", minHeight: "100vh" }}>
      <div className="lg-bg" style={{ backgroundImage: `url('${CONTACT_BG}')` }} />
      <div className="lg-bg-overlay" />

      <div className="lg-orb orb-purple" style={{ width: 380, height: 380, top: "10%", left: "4%" }} />
      <div className="lg-orb orb-teal" style={{ width: 300, height: 300, bottom: "8%", right: "4%" }} />

      <div className="lg-content container" style={{ maxWidth: 640 }}>
        <Reveal style={{ textAlign: "center", marginBottom: 38 }}>
          <span className="lg-badge">Get In Touch</span>
          <h1 className="lg-h1" style={{ fontSize: "clamp(30px, 5vw, 54px)", margin: "16px 0 14px" }}>
            Let&apos;s build <span className="lg-grad-text">something</span>
          </h1>
          <p className="lg-sub" style={{ fontSize: 17 }}>
            Tell us about your project — we respond within 24–48 hours.
          </p>
        </Reveal>

        <Reveal y={50} scale={0.98}>
          <form
            onSubmit={onSubmit}
            className="lg-glass lg--medium"
            style={{ padding: "clamp(28px, 5vw, 44px)", display: "flex", flexDirection: "column", gap: 16 }}
          >
            <input name="name" type="text" placeholder="Your name" required style={inputStyle} />
            <input name="email" type="email" placeholder="Email address" required style={inputStyle} />
            <input name="subject" type="text" placeholder="Subject" style={inputStyle} />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              required
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button type="submit" className="lg-btn lg-btn-primary" style={{ justifyContent: "center", fontSize: 16 }}>
              Send Message →
            </button>
            <p style={{ textAlign: "center", color: "rgba(255,255,255,0.45)", fontSize: 13 }}>
              Or email us directly at{" "}
              <a href="mailto:hello@klynova.in" style={{ color: "var(--purple-soft)" }}>
                hello@klynova.in
              </a>
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
