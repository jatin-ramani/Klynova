const ASSET =
  "https://themes.envytheme.com/startp/wp-content/themes/startnext/assets/img/services-right-image";

const rightImages: { file: string; cls: string; delay?: boolean }[] = [
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
  { icon: "fa fa-database", label: "Cloud databases" },
  { icon: "fa fa-hdd-o", label: "File storage" },
  { icon: "fa fa-globe", label: "Website hosting" },
  { icon: "fa fa-line-chart", label: "Forex trading" },
  { icon: "fa fa-folder-open-o", label: "File backups" },
  { icon: "fa fa-desktop", label: "Remote desktop" },
  { icon: "fa fa-envelope-o", label: "Email servers" },
  { icon: "fa fa-soundcloud", label: "Hybrid cloud" },
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
    <section className="services-area ptb-80 bg-f7fafd">
      <div className="container">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-lg-6 col-md-12 services-right-image sr-image-top">
            <ImageSet />
          </div>

          <div className="col-lg-6 col-md-12 services-content">
            <div className="section-title">
              <h2>Cloud Hosting Services</h2>
              <div className="bar"></div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
