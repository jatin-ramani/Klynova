const stats = [
  { value: "100%", label: "Client-Focused", text: false },
  { value: "24–48h", label: "Response Time", text: false },
  { value: "React / Next.js", label: "Core Stack", text: true },
  { value: "Remote", label: "Global Availability", text: true },
];

export default function Stats() {
  return (
    <section className="funfacts-area ptb-80 bg-f7fafd">
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
      </div>
    </section>
  );
}
