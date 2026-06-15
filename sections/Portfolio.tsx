// Project 1 is from the brief; projects 2–3 are placeholders to swap with
// real screenshots/case studies later.
const projects = [
  {
    tag: "Web App",
    title: "Project Management Dashboard",
    desc: "A dark-mode Kanban-style task tracker with analytics, built with Next.js 14 and MongoDB.",
    variant: 1,
    icon: "fas fa-chart-line",
  },
  {
    tag: "AI Product",
    title: "AI Content Assistant",
    desc: "A SaaS tool that drafts and refines copy using the OpenAI API, with team workspaces and history.",
    variant: 2,
    icon: "fas fa-wand-magic-sparkles",
  },
  {
    tag: "E-Commerce",
    title: "Headless Storefront",
    desc: "A high-performance commerce frontend built with Next.js and Stripe, tuned for speed and conversion.",
    variant: 3,
    icon: "fas fa-bag-shopping",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="works-area ptb-80 bg-f7fafd">
      <div className="section-title ">
        <span className="klynova-tag">Selected Work</span>
        <h2>Recent Projects</h2>
        <div className="bar"></div>
        <p>
          A look at the kind of products we build — web applications, AI tools,
          and commerce experiences.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {projects.map((p) => (
            <div className="col-lg-6 col-md-6" key={p.title}>
              <div className="klynova-work-card">
                <div className={`klynova-work-thumb v${p.variant}`}>
                  <i className={`${p.icon} klynova-work-ic`}></i>
                </div>
                <div className="klynova-work-body">
                  <span className="klynova-work-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-6 col-md-6">
            <div className="klynova-work-card klynova-work-soon">
              <div>
                <span className="klynova-grid">
                  <i></i>
                  <em></em>
                </span>
                <h3>More projects coming soon</h3>
                <p>New case studies are on the way.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
