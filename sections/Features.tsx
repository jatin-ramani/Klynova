const features = [
  {
    icon: "fas fa-bolt",
    bg: "rgba(91, 139, 245, 0.14)",
    color: "#5b8bf5",
    title: "Fast Turnaround",
    desc: "We move quickly without compromising on quality — most projects ship in weeks, not months.",
  },
  {
    icon: "fas fa-layer-group",
    bg: "rgba(29, 207, 170, 0.14)",
    color: "#1dcfaa",
    title: "Modern Tech Stack",
    desc: "Every project is built with current, well-supported technology — no legacy code, no shortcuts.",
  },
  {
    icon: "fas fa-comments",
    bg: "rgba(91, 139, 245, 0.14)",
    color: "#5b8bf5",
    title: "Direct Communication",
    desc: "Work directly with the person building your product — no account managers, no middlemen.",
  },
  {
    icon: "fas fa-tags",
    bg: "rgba(29, 207, 170, 0.14)",
    color: "#1dcfaa",
    title: "Transparent Pricing",
    desc: "Clear, upfront project pricing with no hidden costs or surprise invoices.",
  },
  {
    icon: "fas fa-microchip",
    bg: "rgba(91, 139, 245, 0.14)",
    color: "#5b8bf5",
    title: "AI-Ready Architecture",
    desc: "Every product we build is structured to integrate AI features now or in the future.",
  },
  {
    icon: "fas fa-headset",
    bg: "rgba(29, 207, 170, 0.14)",
    color: "#1dcfaa",
    title: "Post-Launch Support",
    desc: "We don't disappear after launch — ongoing support and iteration available.",
  },
];

export default function Features() {
  return (
    <section className="features-area ptb-80 bg-f7fafd">
      <div className="section-title ">
        <span className="klynova-tag">Why Klynova</span>
        <h2>Built Around How You Want to Work</h2>
        <div className="bar"></div>
        <p>
          A focused, modern approach to building digital products — quality
          code, honest communication, and AI-ready foundations.
        </p>
      </div>

      <div className="container ">
        <div className="row">
          {features.map((f) => (
            <div className="col-lg-6 col-md-6" key={f.title}>
              <div className="single-features text-unset">
                <div className="icon" style={{ background: f.bg }}>
                  <i className={f.icon} style={{ color: f.color }}></i>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
