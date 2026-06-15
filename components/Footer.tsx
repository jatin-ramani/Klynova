import FeatherIcon from "./FeatherIcon";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="#home" className="navbar-brand">
                  <img
                    src="/logo/klynova-logo-dark.svg"
                    alt="Klynova"
                    width={170}
                    height={40}
                  />
                </a>
              </div>
              <div className="textwidget">
                <p>
                  Klynova builds intelligent digital products — websites, web
                  apps, and AI-powered tools.
                </p>
              </div>
              <ul className="social-links">
                <li>
                  <a target="_blank" rel="noopener" href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="#" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noopener" href="#" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Quick Links</h3>
              <ul className="menu">
                {links.map((l) => (
                  <li className="menu-item" key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="single-footer-widget">
              <h3>Get in Touch</h3>
              <div className="textwidget">
                <ul className="footer-contact-info">
                  <li>
                    <FeatherIcon name="mail" />{" "}
                    <a href="mailto:hello@klynova.in">hello@klynova.in</a>
                  </li>
                  <li>
                    <FeatherIcon name="map-pin" /> Gujarat, India — working with
                    clients globally
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>© 2026 Klynova. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
