const boxes = [
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
];

export default function Boxes() {
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
                  <a href="#">{box.title}</a>
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
    </div>
  );
}
