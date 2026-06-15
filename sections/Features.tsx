const features = [
  {
    icon: "fas fa-bolt",
    variant: "blue",
    title: "Fast Turnaround",
    desc: "We move quickly without compromising on quality — most projects ship in weeks, not months.",
  },
  {
    icon: "fas fa-layer-group",
    variant: "teal",
    title: "Modern Tech Stack",
    desc: "Every project is built with current, well-supported technology — no legacy code, no shortcuts.",
  },
  {
    icon: "fas fa-comments",
    variant: "blue",
    title: "Direct Communication",
    desc: "Work directly with the person building your product — no account managers, no middlemen.",
  },
  {
    icon: "fas fa-tags",
    variant: "teal",
    title: "Transparent Pricing",
    desc: "Clear, upfront project pricing with no hidden costs or surprise invoices.",
  },
  {
    icon: "fas fa-microchip",
    variant: "blue",
    title: "AI-Ready Architecture",
    desc: "Every product we build is structured to integrate AI features now or in the future.",
  },
  {
    icon: "fas fa-headset",
    variant: "teal",
    title: "Post-Launch Support",
    desc: "We don't disappear after launch — ongoing support and iteration available.",
  },
];

export default function Features() {
  return (
    <section className="features-area ptb-80">
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
                <div className={`icon ${f.variant}`}>
                  <i className={f.icon}></i>
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
