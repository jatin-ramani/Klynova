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
  { icon: "fas fa-robot", label: "AI chatbots & assistants" },
  { icon: "fas fa-cogs", label: "Workflow automation" },
  { icon: "fas fa-search", label: "AI-powered search" },
  { icon: "fas fa-plug", label: "OpenAI & Anthropic APIs" },
  { icon: "fas fa-pen-nib", label: "Product design" },
  { icon: "fas fa-object-group", label: "Design systems" },
  { icon: "fas fa-shapes", label: "Prototyping" },
  { icon: "fas fa-palette", label: "Brand identity" },
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
              <span className="klynova-tag">Smarter Products</span>
              <h2>AI, Design &amp; Automation</h2>
              <div className="bar"></div>
              <p>
                We weave AI and thoughtful design into your product — automating
                the busywork and creating experiences your users actually enjoy.
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
