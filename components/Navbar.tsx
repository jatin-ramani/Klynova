"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Code2,
  ShoppingCart,
  BarChart3,
  Bot,
  MessageSquare,
  Workflow,
  Palette,
  Component,
  PenTool,
  type LucideIcon,
} from "lucide-react";

const NAV = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/blog" },
];

type MegaItem = { Icon: LucideIcon; t: string; d: string; href: string };
const MEGA: { heading: string; items: MegaItem[] }[] = [
  {
    heading: "Web & Apps",
    items: [
      { Icon: Code2, t: "Web App Development", d: "React & Next.js apps", href: "/services" },
      { Icon: ShoppingCart, t: "E-Commerce", d: "Stores that convert", href: "/services" },
      { Icon: BarChart3, t: "Dashboards", d: "Data & analytics UIs", href: "/services" },
    ],
  },
  {
    heading: "AI & Automation",
    items: [
      { Icon: Bot, t: "AI Integration", d: "LLMs in your product", href: "/services" },
      { Icon: MessageSquare, t: "Chatbots & Agents", d: "Support & ops bots", href: "/services" },
      { Icon: Workflow, t: "Workflow Automation", d: "Save hours weekly", href: "/services" },
    ],
  },
  {
    heading: "Design",
    items: [
      { Icon: Palette, t: "UI/UX Design", d: "Clean, modern interfaces", href: "/services" },
      { Icon: Component, t: "Design Systems", d: "Consistent at scale", href: "/services" },
      { Icon: PenTool, t: "Prototyping", d: "Validate ideas fast", href: "/services" },
    ],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);
  const [mega, setMega] = useState(false);
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const [pill, setPill] = useState({ left: 0, width: 0, opacity: 0 });
  const railRef = useRef<HTMLUListElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const activeIndex = NAV.findIndex(
    (n) => n.href === pathname || (n.href !== "/" && pathname.startsWith(n.href))
  );

  const moveTo = (idx: number) => {
    const li = railRef.current?.querySelectorAll("li")[idx] as HTMLElement | undefined;
    if (li) setPill({ left: li.offsetLeft, width: li.offsetWidth, opacity: 1 });
  };
  const resetPill = () => {
    if (activeIndex >= 0) moveTo(activeIndex);
    else setPill((p) => ({ ...p, opacity: 0 }));
  };

  useEffect(() => {
    const detect = () => {
      setScrolled(window.scrollY > 30);
      const els = document.elementsFromPoint(Math.round(window.innerWidth / 2), 38);
      for (const el of els) {
        if (el.classList?.contains("section-light")) return setLight(true);
        if (el.classList?.contains("section-dark")) return setLight(false);
      }
      setLight(false);
    };
    const raf = requestAnimationFrame(detect);
    window.addEventListener("scroll", detect, { passive: true });
    window.addEventListener("resize", detect, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", detect);
      window.removeEventListener("resize", detect);
    };
  }, [pathname]);

  useEffect(() => {
    const raf = requestAnimationFrame(resetPill);
    const onResize = () => resetPill();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const openMega = () => {
    window.clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = window.setTimeout(() => setMega(false), 130);
  };

  const bg = light
    ? scrolled
      ? "rgba(255,255,255,0.62)"
      : "rgba(255,255,255,0.42)"
    : scrolled
      ? "rgba(8,8,20,0.74)"
      : "rgba(12,14,32,0.34)";

  return (
    <header
      style={{
        position: "fixed",
        top: 14,
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(95vw, 1180px)",
        zIndex: 1000,
      }}
    >
      <nav
        className={`nav-bar${light ? " is-light" : ""}`}
        style={{
          padding: "13px 14px 13px 22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: bg,
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={light ? "/logo/klynova-logo-light.svg" : "/logo/klynova-logo-dark.svg"}
            alt="Klynova"
            width={134}
            height={34}
            priority
          />
        </Link>

        <ul className="nav-rail nav-links-desktop" ref={railRef} onMouseLeave={resetPill}>
          <span className="nav-pill" style={{ left: pill.left, width: pill.width, opacity: pill.opacity }} />
          {NAV.map((item, i) => (
            <li
              key={item.label}
              style={{ listStyle: "none" }}
              onMouseEnter={() => {
                moveTo(i);
                if (item.mega) openMega();
                else closeMega();
              }}
              onMouseLeave={item.mega ? closeMega : undefined}
            >
              <Link href={item.href} className={`nav-link${i === activeIndex ? " active" : ""}`}>
                {item.label}
                {item.mega && (
                  <span className="nav-caret" style={{ transform: mega ? "rotate(180deg)" : "none" }}>▼</span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/contact" className="lg-btn lg-btn-primary nav-cta-desktop" style={{ fontSize: 14.5, padding: "10px 20px" }}>
            Start a Project →
          </Link>
          <button
            type="button"
            aria-label="Menu"
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            style={{
              background: light ? "rgba(18,22,40,0.06)" : "rgba(255,255,255,0.08)",
              border: `1px solid ${light ? "rgba(18,22,40,0.16)" : "rgba(255,255,255,0.2)"}`,
              borderRadius: 12,
              width: 44,
              height: 44,
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: light ? "#0c1024" : "#fff",
              fontSize: 19,
            }}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mega menu */}
      {mega && (
        <div className="mega-panel lg-glass" onMouseEnter={openMega} onMouseLeave={closeMega}>
          {MEGA.map((col) => (
            <div key={col.heading}>
              <div className="mega-heading">{col.heading}</div>
              {col.items.map((it) => (
                <Link key={it.t} href={it.href} className="mega-item" onClick={() => setMega(false)}>
                  <span className="mega-ic">
                    <it.Icon size={18} strokeWidth={1.8} color="#c4bdff" />
                  </span>
                  <span>
                    <span className="t" style={{ display: "block" }}>{it.t}</span>
                    <span className="d" style={{ display: "block" }}>{it.d}</span>
                  </span>
                </Link>
              ))}
            </div>
          ))}
          <Link href="/contact" className="mega-feature" onClick={() => setMega(false)}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
                Have a project in mind?
              </div>
              <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 13.5, lineHeight: 1.55 }}>
                Book a free discovery call and we&apos;ll map out a plan.
              </p>
            </div>
            <span className="lg-btn lg-btn-ghost" style={{ marginTop: 16, fontSize: 13.5, padding: "9px 18px", pointerEvents: "none", alignSelf: "flex-start" }}>
              Get in touch →
            </span>
          </Link>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="lg-glass" style={{ marginTop: 10, padding: 14, display: "flex", flexDirection: "column", gap: 2 }}>
          {NAV.map((item) =>
            item.mega ? (
              <div key={item.label}>
                <button
                  type="button"
                  onClick={() => setSvcOpen((v) => !v)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", background: "transparent", border: 0, color: "rgba(255,255,255,0.88)", fontSize: 15.5, fontWeight: 500, padding: "13px 16px", cursor: "pointer", fontFamily: "inherit" }}
                >
                  Services
                  <span style={{ fontSize: 11, transform: svcOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }}>▼</span>
                </button>
                {svcOpen && (
                  <div style={{ paddingLeft: 12 }}>
                    {MEGA.flatMap((c) => c.items).map((it) => (
                      <Link key={it.t} href={it.href} onClick={() => setOpen(false)} style={{ display: "flex", gap: 10, alignItems: "center", color: "rgba(255,255,255,0.66)", fontSize: 14, padding: "9px 16px" }}>
                        <it.Icon size={16} strokeWidth={1.8} color="#A099FF" /> {it.t}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} style={{ color: "rgba(255,255,255,0.88)", fontSize: 15.5, fontWeight: 500, padding: "13px 16px", borderRadius: 12 }}>
                {item.label}
              </Link>
            )
          )}
          <Link href="/contact" onClick={() => setOpen(false)} className="lg-btn lg-btn-primary" style={{ justifyContent: "center", marginTop: 8 }}>
            Start a Project →
          </Link>
        </div>
      )}
    </header>
  );
}
