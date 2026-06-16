"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", mega: true },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

const MEGA = [
  {
    icon: "fas fa-laptop-code",
    title: "Web Development",
    items: ["React & Next.js", "TypeScript apps", "Progressive web apps", "Performance & SEO"],
  },
  {
    icon: "fas fa-robot",
    title: "AI & Automation",
    items: ["AI chatbots & assistants", "OpenAI & Anthropic APIs", "Workflow automation", "AI-powered search"],
  },
  {
    icon: "fas fa-pen-nib",
    title: "Design",
    items: ["UI/UX design", "Design systems", "Prototyping", "Brand identity"],
  },
  {
    icon: "fas fa-server",
    title: "Backend & APIs",
    items: ["REST & GraphQL APIs", "Database design", "Authentication", "Integrations"],
  },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [headroom, setHeadroom] = useState("headroom--top headroom--pinned");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 120);
      const offset = 100;
      if (y <= offset) setHeadroom("headroom--top headroom--pinned");
      else if (y > lastScroll.current)
        setHeadroom("headroom--not-top headroom--unpinned");
      else setHeadroom("headroom--not-top headroom--pinned");
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logo = "/logo/klynova-logo-light.svg";

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      id="header"
      className={`headroom ${scrolled ? "is-sticky" : ""} ${headroom}`}
    >
      {/* Desktop Navbar */}
      <div className={`startp-nav ${scrolled ? "is-sticky" : ""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/" className="navbar-brand">
              <img src={logo} alt="Klynova" width={150} height={36} />
            </Link>

            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav nav ml-auto">
                {NAV.map((item) => (
                  <li
                    className={`nav-item ${item.mega ? "has-mega" : ""}`}
                    key={item.label}
                  >
                    <Link
                      href={item.href}
                      className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                    >
                      {item.label}
                      {item.mega && (
                        <i className="fas fa-chevron-down mega-caret"></i>
                      )}
                    </Link>

                    {item.mega && (
                      <div className="klynova-mega">
                        <div className="klynova-mega-grid">
                          {MEGA.map((col) => (
                            <div className="klynova-mega-col" key={col.title}>
                              <Link href="/services" className="klynova-mega-head">
                                <span className="klynova-mega-ic">
                                  <i className={col.icon}></i>
                                </span>
                                {col.title}
                              </Link>
                              <ul>
                                {col.items.map((it) => (
                                  <li key={it}>
                                    <Link href="/services">{it}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="klynova-mega-foot">
                          <span>
                            Need a custom build or AI integration? Let&apos;s
                            talk.
                          </span>
                          <Link href="/contact" className="btn btn-primary">
                            Contact Now!
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="others-option">
              <Link href="/contact" className="btn btn-primary">
                Start a Project
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="clone-mnav">
        <Link href="/" className="clone-mnav-logo">
          <img src={logo} alt="Klynova" width={140} height={34} />
        </Link>
        <div className="clone-mnav-right">
          <button
            type="button"
            className="clone-mnav-burger"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <nav className={`clone-mnav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {NAV.map((item) => (
              <li key={item.label} className={isActive(item.href) ? "active" : ""}>
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mnav-cta"
                onClick={() => setMenuOpen(false)}
              >
                Start a Project
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
