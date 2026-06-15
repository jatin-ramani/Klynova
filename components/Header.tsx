"use client";

import { useEffect, useRef, useState } from "react";
import { NAV_TREE, type NavNode } from "@/constants/nav";

const LOGO =
  "https://themes.envytheme.com/startp/wp-content/uploads/2025/01/startnext-main-logo.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [headroom, setHeadroom] = useState("headroom--top headroom--pinned");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openPaths, setOpenPaths] = useState<Set<string>>(new Set());
  const lastScroll = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 120);
      const offset = 100;
      if (y <= offset) {
        setHeadroom("headroom--top headroom--pinned");
      } else if (y > lastScroll.current) {
        setHeadroom("headroom--not-top headroom--unpinned");
      } else {
        setHeadroom("headroom--not-top headroom--pinned");
      }
      lastScroll.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const togglePath = (path: string) =>
    setOpenPaths((prev) => {
      const next = new Set(prev);
      next.has(path) ? next.delete(path) : next.add(path);
      return next;
    });

  // ── Desktop menu (CSS-hover dropdowns) ───────────────────────
  const renderNode = (node: NavNode, path: string, depth: number) => {
    const hasChildren = !!node.children?.length;
    const liClass = ["nav-item", hasChildren ? "menu-item-has-children dropdown" : ""]
      .filter(Boolean)
      .join(" ");
    const aClass = [
      depth === 0 ? "nav-link" : "dropdown-item",
      depth === 0 && hasChildren ? "dropdown-toggle" : "",
      node.active ? "active" : "",
    ]
      .filter(Boolean)
      .join(" ");
    return (
      <li className={liClass} key={path}>
        <a
          href="#"
          className={aClass}
          onClick={(e) => hasChildren && e.preventDefault()}
        >
          {node.label}
        </a>
        {hasChildren && (
          <ul className="dropdown-menu">
            {node.children!.map((c, i) => renderNode(c, `${path}-${i}`, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  // ── Mobile menu (click-to-expand) ────────────────────────────
  const renderMobileNode = (node: NavNode, path: string) => {
    const hasChildren = !!node.children?.length;
    const open = openPaths.has(path);
    return (
      <li className={`${open ? "open" : ""} ${node.active ? "active" : ""}`.trim()} key={path}>
        <a
          href="#"
          onClick={(e) => {
            if (hasChildren) {
              e.preventDefault();
              togglePath(path);
            } else {
              setMenuOpen(false);
            }
          }}
        >
          {node.label}
          {hasChildren && <i className="fas fa-chevron-down mnav-caret"></i>}
        </a>
        {hasChildren && (
          <ul>{node.children!.map((c, i) => renderMobileNode(c, `${path}-${i}`))}</ul>
        )}
      </li>
    );
  };

  return (
    <header
      id="header"
      className={`headroom ${scrolled ? "is-sticky" : ""} ${headroom}`}
    >
      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="header-left-content">
                <p>Welcome to StartNext</p>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="header-right-content">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i> +1-541-754-3010
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope-o"></i> 3261 Anmoore Road, NY
                      11230
                    </a>
                  </li>
                  <li>
                    <i className="fa fa-clock-o"></i> 9:00 AM – 8:00 PM
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className={`startp-nav ${scrolled ? "is-sticky" : ""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <a href="#" className="navbar-brand">
              <img src={LOGO} alt="StartNext" />
            </a>

            <div className="collapse navbar-collapse mean-menu">
              <ul className="navbar-nav nav ml-auto">
                {NAV_TREE.map((node, i) => renderNode(node, `${i}`, 0))}
              </ul>
            </div>

            <a href="#" className="cart-link">
              <i className="bx bx-cart-alt"></i>
              <span className="mini-cart-count">0</span>
            </a>

            <div className="others-option">
              <a href="#" className="btn btn-primary">
                Support
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="clone-mnav">
        <a href="#" className="clone-mnav-logo">
          <img src={LOGO} alt="StartNext" />
        </a>
        <div className="clone-mnav-right">
          <a href="#" className="cart-link">
            <i className="bx bx-cart-alt"></i>
            <span className="mini-cart-count">0</span>
          </a>
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
          <ul>{NAV_TREE.map((node, i) => renderMobileNode(node, `m${i}`))}</ul>
        </nav>
      </div>
    </header>
  );
}
