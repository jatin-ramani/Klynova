"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Anim";

const faqs = [
  {
    q: "How do you price projects?",
    a: "Most engagements are scoped as a fixed-price project after a short discovery call, so you know the cost up front. For ongoing work we also offer flexible monthly retainers.",
  },
  {
    q: "What's a typical timeline?",
    a: "A focused MVP usually takes 4–8 weeks, while larger platforms run longer. We work in fast weekly iterations so you see progress the whole way through.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. Every project includes a support window after launch, and we offer maintenance retainers for bug fixes, improvements, and new features over time.",
  },
  {
    q: "What technologies do you use?",
    a: "We build with a modern stack — React, Next.js, TypeScript, and Node.js on the frontend and backend, with PostgreSQL or MongoDB and cloud hosting on AWS.",
  },
  {
    q: "How do we get started?",
    a: "Just reach out through our contact form. We'll book a quick call to understand your goals, then send a clear proposal with scope, timeline, and pricing.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Absolutely. We translate product ideas into a clear plan and handle the technical decisions for you, keeping you informed in plain language at every step.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section-light" style={{ padding: "120px 0" }}>
      <div className="lg-orb orb-purple" style={{ width: 360, height: 360, top: "6%", right: "-2%" }} />
      <div className="lg-orb orb-teal" style={{ width: 300, height: 300, bottom: "8%", left: "2%" }} />

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="lg-badge">FAQ</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
            Questions, <span className="lg-grad-text">answered</span>
          </h2>
          <p className="lg-sub" style={{ maxWidth: 500, margin: "0 auto", fontSize: 17 }}>
            The things founders and teams ask us most before we start.
          </p>
        </Reveal>

        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="lg-glass lg--soft"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    padding: "22px 26px",
                    background: "transparent",
                    border: 0,
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "var(--ink)",
                    fontWeight: 700,
                    fontSize: 16.5,
                    textAlign: "left",
                    fontFamily: "inherit",
                  }}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    size={20}
                    strokeWidth={2.2}
                    color="#6b5cf0"
                    style={{
                      flexShrink: 0,
                      marginLeft: 16,
                      transition: "transform .3s ease",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: isOpen ? 240 : 0,
                    overflow: "hidden",
                    transition: "max-height .4s ease",
                  }}
                >
                  <p style={{ padding: "0 26px 22px", color: "var(--ink-soft)", fontSize: 14.5, lineHeight: 1.65 }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
