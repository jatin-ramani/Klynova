"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants";
import { FaChevronDown, FaTimes, FaBars, FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`hidden lg:block transition-all duration-300 z-50 w-full ${
          isSticky
            ? "fixed top-0 left-0 bg-white shadow-md py-2"
            : "relative bg-[#F8F8F8] py-3"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="https://themes.envytheme.com/startp/wp-content/uploads/2020/11/startnext-main-logo.png"
                alt="StartNext"
                width={140}
                height={36}
                priority
              />
            </Link>

            {/* Nav Links */}
            <ul className="flex items-center gap-0">
              {NAV_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() =>
                    item.children && setActiveDropdown(item.label)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-4 py-5 text-[15px] font-medium inline-flex items-center gap-1 transition-colors duration-200 text-nav-link hover:text-main ${
                      item.label === "Home" ? "text-main" : ""
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <FaChevronDown className="text-[10px] ml-0.5" />
                    )}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <ul
                      className={`absolute top-full left-0 min-w-[220px] bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200 ${
                        activeDropdown === item.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href}
                            className="block px-5 py-2 text-sm text-nav-link hover:text-main hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Right CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="flex items-center gap-1.5 text-nav-link hover:text-main"
              >
                <FaShoppingCart />
              </Link>
              <Link href="#" className="btn-light">
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="lg:hidden bg-white shadow-sm py-3 sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <Image
              src="https://themes.envytheme.com/startp/wp-content/uploads/2020/11/startnext-main-logo.png"
              alt="StartNext"
              width={120}
              height={32}
              priority
            />
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-heading text-xl p-2"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
          }`}
        >
          <ul className="py-4 px-6">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="border-b border-gray-100 last:border-0">
                <div
                  className="flex items-center justify-between py-3 cursor-pointer"
                  onClick={() =>
                    item.children &&
                    setActiveDropdown(
                      activeDropdown === item.label ? null : item.label
                    )
                  }
                >
                  <Link
                    href={item.href}
                    className="text-heading text-[15px] font-medium hover:text-main"
                    onClick={(e) => item.children && e.preventDefault()}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <FaChevronDown
                      className={`text-xs text-gray-400 transition-transform ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>
                {item.children && activeDropdown === item.label && (
                  <ul className="pb-3 pl-4">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-body hover:text-main"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-4">
              <Link href="#" className="btn-primary block text-center">
                Support
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
