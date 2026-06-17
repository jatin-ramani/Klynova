import Link from "next/link";
import Image from "next/image";
import FooterNewsletter from "@/components/FooterNewsletter";

const services = [
  { label: "Web App Development", href: "/services" },
  { label: "AI Integration", href: "/services" },
  { label: "UI/UX Design", href: "/services" },
  { label: "API & Backend", href: "/services" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "LinkedIn", icon: "in", href: "#" },
  { label: "GitHub", icon: "GH", href: "#" },
  { label: "X", icon: "X", href: "#" },
  { label: "Instagram", icon: "IG", href: "#" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-col">
            <Image src="/logo/klynova-logo-dark.svg" alt="Klynova" width={140} height={36} />
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14.5, lineHeight: 1.7, margin: "18px 0 22px", maxWidth: 320 }}>
              A software studio building modern web applications, AI-powered tools, and
              digital products that grow your business.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="footer-social">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            {services.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            {company.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div className="footer-col">
            <h4>Stay in the loop</h4>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.6, marginBottom: 6 }}>
              Occasional notes on building modern products. No spam.
            </p>
            <FooterNewsletter />
            <a
              href="mailto:hello@klynova.in"
              style={{ display: "inline-block", marginTop: 18, color: "var(--purple-soft)", fontSize: 14, fontWeight: 600 }}
            >
              hello@klynova.in
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Klynova. All rights reserved.</span>
          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)" }}>Privacy</a>
            <a href="#" style={{ color: "rgba(255,255,255,0.5)" }}>Terms</a>
            <span>Built with React &amp; Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
