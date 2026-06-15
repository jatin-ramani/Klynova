const features = [
  {
    icon: "fas fa-handshake",
    iconBg: "#cdf1d8",
    iconColor: "#44ce6f",
    title: "Zero Configuration",
  },
  {
    icon: "fas fa-code",
    iconBg: "#fddcef",
    iconColor: "#f78acb",
    title: "Code Security",
  },
  {
    icon: "fas fa-users",
    iconBg: "#edc3fc",
    iconColor: "#c679e3",
    title: "Team Management",
  },
  {
    icon: "fab fa-ravelry",
    iconBg: "#f9d2c4",
    iconColor: "#eb6b3d",
    title: "Access Controlled",
  },
  {
    icon: "fas fa-bell",
    iconBg: "#f9d2c4",
    iconColor: "#eb6b3d",
    title: "Deadline Reminders",
  },
  {
    icon: "fas fa-question",
    iconBg: "#cdf1d8",
    iconColor: "#44ce6f",
    title: "Information Retrieval",
  },
];

export default function Features() {
  return (
    <section className="features-area ptb-80 bg-f7fafd">
      <div className="section-title ">
        <h2>Our Features</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="container ">
        <div className="row">
          {features.map((f) => (
            <div className="col-lg-6 col-md-6" key={f.title}>
              <div className="single-features text-unset">
                <div className="icon" style={{ background: f.iconBg }}>
                  <i className={f.icon} style={{ color: f.iconColor }}></i>
                </div>
                <h3>
                  <a href="#">{f.title}</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet elit, adipiscing, sed do eiusmod
                  tempor incididunt ut labore dolore magna.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
