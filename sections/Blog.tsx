import { Reveal, Stagger } from "@/components/Anim";

const BLOG_BG =
  "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=2400&q=90";

const articles = [
  {
    category: "Engineering",
    title: "Why we build SaaS products with Next.js",
    date: "Jan 14, 2026",
    excerpt:
      "Server components, streaming, and a single codebase for frontend and API. Here's how Next.js lets us ship production SaaS faster.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
  },
  {
    category: "AI",
    title: "5 ways to add AI to your product without the hype",
    date: "Feb 28, 2026",
    excerpt:
      "Not every feature needs a chatbot. We break down five practical, high-impact ways to weave AI into a real product your users will love.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
  {
    category: "Design",
    title: "Designing landing pages that actually convert",
    date: "Apr 9, 2026",
    excerpt:
      "Clarity beats clever. A look at the layout, copy, and motion choices that turn a good-looking landing page into one that converts.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
];

export default function Blog() {
  return (
    <section className="section section-dark" style={{ padding: "130px 0" }}>
      <div className="lg-bg" style={{ backgroundImage: `url('${BLOG_BG}')` }} />
      <div className="lg-bg-overlay" />

      <div className="lg-orb orb-purple" style={{ width: 400, height: 400, top: "4%", right: "6%" }} />
      <div className="lg-orb orb-teal" style={{ width: 300, height: 300, bottom: "6%", left: "4%" }} />

      <div className="lg-content container">
        <Reveal style={{ textAlign: "center", marginBottom: 60 }}>
          <span className="lg-badge">Insights</span>
          <h2 className="lg-h2" style={{ fontSize: "clamp(28px, 4.6vw, 54px)", margin: "18px 0 14px" }}>
            From the <span className="lg-grad-text">Klynova blog</span>
          </h2>
          <p className="lg-sub" style={{ maxWidth: 500, margin: "0 auto", fontSize: 17 }}>
            Notes from the team on building modern web products, AI, and design.
          </p>
        </Reveal>

        <Stagger
          each={0.1}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {articles.map((a) => (
            <a
              key={a.title}
              href="#"
              className="lg-glass lg--bubble lg-interactive"
              style={{ display: "block", textDecoration: "none", overflow: "hidden" }}
            >
              <img
                src={a.image}
                alt={a.title}
                style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: "var(--r) var(--r) 0 0" }}
              />
              <div style={{ padding: "22px 24px 26px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span className="lg-tag">{a.category}</span>
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 12 }}>{a.date}</span>
                </div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, margin: "12px 0 8px" }}>{a.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.62)", fontSize: 14, lineHeight: 1.6 }}>{a.excerpt}</p>
                <span style={{ color: "var(--purple-soft)", fontWeight: 600, fontSize: 13.5, display: "inline-block", marginTop: 14 }}>
                  Read article →
                </span>
              </div>
            </a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
