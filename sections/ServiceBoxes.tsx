const boxes = [
  {
    icon: "fas fa-laptop-code",
    iconBg: "rgba(91, 139, 245, 0.14)",
    iconColor: "#5b8bf5",
    title: "Web App Development",
    desc: "Fast, responsive, and scalable web apps built with React and Next.js.",
  },
  {
    icon: "fas fa-robot",
    iconBg: "rgba(29, 207, 170, 0.14)",
    iconColor: "#1dcfaa",
    title: "AI Integration",
    desc: "Chatbots, automation, and intelligent features built into your product.",
  },
  {
    icon: "fas fa-pen-nib",
    iconBg: "rgba(91, 139, 245, 0.14)",
    iconColor: "#5b8bf5",
    title: "UI/UX Design",
    desc: "Clean, modern interfaces designed for clarity and conversion.",
  },
  {
    icon: "fas fa-server",
    iconBg: "rgba(29, 207, 170, 0.14)",
    iconColor: "#1dcfaa",
    title: "API & Backend",
    desc: "Robust APIs and backend systems, ready to scale with your product.",
  },
];

export default function ServiceBoxes() {
  return (
    <div className="boxes-area ">
      <div className="container">
        <div className="row">
          {boxes.map((box) => (
            <div className="col-lg-3 col-md-6" key={box.title}>
              <div className="single-box text-unset">
                <div className="icon" style={{ background: box.iconBg }}>
                  <i className={box.icon} style={{ color: box.iconColor }}></i>
                </div>
                <h3>
                  <a href="/services">{box.title}</a>
                </h3>
                <p>{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
