const ASSET =
  "https://themes.envytheme.com/startp/wp-content/themes/startnext/assets/img/services-right-image";

const rightImages: { file: string; cls: string }[] = [
  { file: "book-self.png", cls: "wow fadeInDown" },
  { file: "box.png", cls: "wow fadeInUp" },
  { file: "chair.png", cls: "wow fadeInLeft" },
  { file: "cloud.png", cls: "wow zoomIn" },
  { file: "cup.png", cls: "wow bounceIn" },
  { file: "flower-top.png", cls: "wow fadeInDown" },
  { file: "head-phone.png", cls: "wow zoomIn" },
  { file: "monitor.png", cls: "wow fadeInUp" },
  { file: "mug.png", cls: "wow rotateIn" },
  { file: "table.png", cls: "wow fadeInUp" },
  { file: "tissue.png", cls: "wow zoomIn" },
  { file: "water-bottle.png", cls: "wow zoomIn" },
  { file: "wifi.png", cls: "wow fadeInLeft" },
  { file: "cercle-shape.png", cls: "bg-image rotateme" },
  { file: "main-pic.png", cls: "wow fadeInUp" },
];

const boxes = [
  { icon: "fas fa-laptop-code", label: "Custom web apps" },
  { icon: "fas fa-shopping-cart", label: "E-commerce platforms" },
  { icon: "fas fa-mobile-alt", label: "Progressive web apps" },
  { icon: "fas fa-bolt", label: "Performance optimization" },
  { icon: "fas fa-code", label: "REST & GraphQL APIs" },
  { icon: "fas fa-database", label: "Database design" },
  { icon: "fas fa-lock", label: "Authentication systems" },
  { icon: "fas fa-puzzle-piece", label: "Third-party integrations" },
];

function ImageSet() {
  return (
    <>
      {rightImages.map((img) => (
        <img
          key={img.file}
          src={`${ASSET}/${img.file}`}
          className={img.cls}
          {...(img.cls.startsWith("wow") ? { "data-wow-delay": "0.6s" } : {})}
          alt={img.file.replace(".png", "")}
        />
      ))}
    </>
  );
}

export default function CloudHosting() {
  return (
    <section id="services" className="services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12 services-right-image sr-image-top">
            <ImageSet />
          </div>

          <div className="col-lg-6 col-md-12 services-content">
            <div className="section-title">
              <span className="klynova-tag">What We Build</span>
              <h2>End-to-End Product Development</h2>
              <div className="bar"></div>
              <p>
                From idea to launch — modern web applications built with React,
                Next.js, and Node.js, designed to perform and ready to scale.
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

          <div className="col-lg-6 col-md-12 services-right-image sr-image-bottom">
            <ImageSet />
          </div>
        </div>
      </div>
    </section>
  );
}
