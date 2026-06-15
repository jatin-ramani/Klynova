const ASSET =
  "https://themes.envytheme.com/startp/wp-content/themes/startnext/assets/img/services-left-image";

const leftImages: { file: string; cls: string }[] = [
  { file: "big-monitor.png", cls: "wow fadeInDown" },
  { file: "creative.png", cls: "wow fadeInUp" },
  { file: "developer.png", cls: "wow fadeInLeft" },
  { file: "flower-top.png", cls: "wow zoomIn" },
  { file: "small-monitor.png", cls: "wow bounceIn" },
  { file: "small-top.png", cls: "wow fadeInDown" },
  { file: "table.png", cls: "wow zoomIn" },
  { file: "target.png", cls: "wow fadeInUp" },
  { file: "cercle-shape.png", cls: "bg-image rotateme" },
  { file: "main-pic.png", cls: "wow fadeInUp" },
];

const boxes = [
  { icon: "fa fa-th", label: "Responsive design" },
  { icon: "fa fa-code", label: "React web development" },
  { icon: "fa fa-mobile", label: "Android apps development" },
  { icon: "fa fa-terminal", label: "Laravel web development" },
  { icon: "fa fa-mobile", label: "iOS apps development" },
  { icon: "fa fa-codepen", label: "UX/UI design" },
  { icon: "fa fa-cart-plus", label: "E-commerce development" },
  { icon: "fa fa-grav", label: "Print ready design" },
];

export default function DesignDevelopment() {
  return (
    <section className="services-area ptb-80">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12 services-left-image">
            {leftImages.map((img) => (
              <img
                key={img.file}
                src={`${ASSET}/${img.file}`}
                className={img.cls}
                {...(img.cls.startsWith("wow") ? { "data-wow-delay": "0.6s" } : {})}
                alt={img.file.replace(".png", "")}
              />
            ))}
          </div>

          <div className="col-lg-6 col-md-12 services-content">
            <div className="section-title">
              <h2>Design &amp; Development</h2>
              <div className="bar"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.--
              </p>
            </div>

            <div className="row">
              {boxes.map((b) => (
                <div className="col-lg-6 col-md-6" key={b.label}>
                  <div className="box">
                    <i className={b.icon}></i> {b.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
