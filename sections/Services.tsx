const services = [
  {
    icon: "fas fa-laptop-code",
    variant: "blue",
    title: "Web Application Development",
    desc: "We build fast, responsive, and scalable web applications using React and Next.js — from MVPs to full production platforms.",
    points: [
      "Custom web apps",
      "E-commerce platforms",
      "Progressive web apps",
      "Performance optimization",
    ],
  },
  {
    icon: "fas fa-robot",
    variant: "teal",
    title: "AI Integration & Automation",
    desc: "We integrate AI capabilities — chatbots, content generation, automation workflows, and intelligent search — directly into your product.",
    points: [
      "AI chatbots & assistants",
      "Workflow automation",
      "AI-powered search & recommendations",
      "API integrations (OpenAI, Anthropic, etc.)",
    ],
  },
  {
    icon: "fas fa-pen-nib",
    variant: "blue",
    title: "UI/UX Design",
    desc: "Clean, modern interfaces designed for clarity and conversion — from wireframes to polished design systems.",
    points: ["Product design", "Design systems", "Prototyping", "Brand identity"],
  },
  {
    icon: "fas fa-server",
    variant: "teal",
    title: "API & Backend Development",
    desc: "Robust backend systems and APIs built with Node.js, ready to scale with your product.",
    points: [
      "REST & GraphQL APIs",
      "Database design",
      "Authentication systems",
      "Third-party integrations",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="services-area ptb-80 bg-f7fafd">
      <div className="section-title">
        <span className="klynova-tag">What We Do</span>
        <h2>Services Built for Modern Products</h2>
        <div className="bar"></div>
        <p>
          From web apps to AI integration — end-to-end product development with
          React, Next.js, and modern tooling.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {services.map((s) => (
            <div className="col-lg-6 col-md-6" key={s.title}>
              <div className="klynova-service-card">
                <div className={`klynova-service-icon ${s.variant}`}>
                  <i className={s.icon}></i>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="klynova-list">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
