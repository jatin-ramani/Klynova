import { Reveal, Stagger, Parallax } from "@/components/Anim";
import TiltCard from "@/components/TiltCard";

const WORK_BG =
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=2400&q=90";

const projects = [
  {
    image: "/projects/caelvi.png",
    title: "Caelvi",
    desc: "A modern fashion e-commerce storefront with a polished, conversion-focused experience.",
    url: "https://caelvi.com",
  },
  {
    image: "/projects/carido.png",
    title: "Carido",
    desc: "A seamless car-rental booking platform — browse, book in minutes, or list your own car.",
    url: "https://car-rental-tau-wheat.vercel.app/",
  },
  {
    image: "/projects/nexura.png",
    title: "Nexura",
    desc: "A responsive shoe store with cart, filters, and a fast, app-like browsing experience.",
    url: "https://nexura-shoes.vercel.app/",
  },
  {
    image: "/projects/exptra.png",
    title: "Exptra",
    desc: "A dark-mode finance dashboard for tracking income, expenses, and insights across devices.",
    url: "https://finance-insight-psi.vercel.app/",
  },
];

export default function Work() {
  return (
    <section id="work" className="section section-dark" style={{ padding: "130px 0" }}>
      <div className="lg-bg" style={{ backgroundImage: `url('${WORK_BG}')` }} />
      <div className="lg-bg-overlay" />

      <Parallax speed={0.3} className="lg-orb orb-blue" style={{ width: 420, height: 420, top: "6%", left: "0%", position: "absolute" }} />
      <div className="lg-orb orb-purple" style={{ width: 320, height: 320, bottom: "6%", right: "4%" }} />

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="lg-badge">Selected Work</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
            Recent <span className="lg-grad-text">Projects</span>
          </h2>
          <p className="lg-sub" style={{ maxWidth: 500, margin: "0 auto", fontSize: 17 }}>
            Real products we&apos;ve designed and built — web apps, e-commerce, and dashboards.
          </p>
        </Reveal>

        <Stagger
          each={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((p) => (
            <TiltCard
              key={p.title}
              className="lg-glass lg--bubble work-card"
              style={{ overflow: "hidden", padding: 0 }}
            >
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", textDecoration: "none" }}
              >
              <div style={{ position: "relative", height: 200, overflow: "hidden", borderRadius: "var(--r) var(--r) 0 0" }}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="work-img"
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s cubic-bezier(.2,.6,.2,1)" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,6,15,0.55), transparent 55%)" }} />
              </div>
              <div style={{ padding: "22px 24px 26px" }}>
                <h3 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                <span className="lg-btn lg-btn-ghost" style={{ fontSize: 13, padding: "8px 20px", pointerEvents: "none" }}>
                  View Project →
                </span>
              </div>
              </a>
            </TiltCard>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
