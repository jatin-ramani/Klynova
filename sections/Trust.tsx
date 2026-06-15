const points = [
  {
    icon: "fas fa-handshake",
    title: "Direct access to the developer building your product — every time.",
  },
  {
    icon: "fas fa-rocket",
    title: "Built on modern, future-proof technology from day one.",
  },
  {
    icon: "fas fa-eye",
    title: "Honest timelines and transparent communication throughout.",
  },
];

export default function Trust() {
  return (
    <section className="ptb-80 bg-f9f6f6">
      <div className="section-title ">
        <span className="klynova-tag">Trust</span>
        <h2>Why Work With Klynova</h2>
        <div className="bar"></div>
      </div>

      <div className="container">
        <div className="row">
          {points.map((p, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="klynova-trust-card">
                <div className="klynova-trust-icon">
                  <i className={p.icon}></i>
                </div>
                <p>{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
