"use client";

import { useEffect, useRef, useState } from "react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [headroom, setHeadroom] = useState("headroom--top headroom--pinned");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScroll = useRef(0);

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

  const logo = scrolled
    ? "/logo/klynova-logo-light.svg"
    : "/logo/klynova-logo-dark.svg";

  return (
    <header
      id="header"
      className={`headroom ${scrolled ? "is-sticky" : ""} ${headroom}`}
    >
      {/* Desktop Navbar */}
      <div className={`startp-nav ${scrolled ? "is-sticky" : ""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a href="#home" className="navbar-brand">
              <img src={logo} alt="Klynova" width={150} height={36} />
            </a>

            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav nav ml-auto">
                {NAV.map((item) => (
                  <li className="nav-item" key={item.label}>
                    <a href={item.href} className="nav-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="others-option">
              <a href="#contact" className="btn btn-primary">
                Start a Project
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="clone-mnav">
        <a href="#home" className="clone-mnav-logo">
          <img src={logo} alt="Klynova" width={140} height={34} />
        </a>
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
              <li key={item.label}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mnav-cta"
                onClick={() => setMenuOpen(false)}
              >
                Start a Project
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
