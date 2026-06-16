const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";

const stats = [
  { value: "100%", label: "Client-Focused", text: false },
  { value: "24–48h", label: "Response Time", text: false },
  { value: "React / Next.js", label: "Core Stack", text: true },
  { value: "Remote", label: "Global Availability", text: true },
];

export default function Stats() {
  return (
    <section className="funfacts-area ptb-80">
      <div className="section-title ">
        <span className="klynova-tag">Why Teams Choose Us</span>
        <h2>We Build Products Around Your Goals</h2>
        <div className="bar"></div>
        <p>
          A focused studio that understands your business — not just your brief.
          Clear communication, modern engineering, and real results.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {stats.map((s) => (
            <div className="col-lg-3 col-6 col-sm-3" key={s.label}>
              <div className="funfact">
                <h3 className={s.text ? "klynova-stat-text" : ""}>{s.value}</h3>
                <p>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta-box">
          <h3>Have a project in mind?</h3>
          <p>Let&apos;s build something great together.</p>
          <a href="/contact" className="btn btn-primary">
            Start a Project
          </a>
        </div>

        <div className="map-bg" style={{ textAlign: "center" }}>
          <img src={`${UPLOAD}/2020/11/map-one.png`} alt="Working globally" />
        </div>
      </div>
    </section>
  );
}
