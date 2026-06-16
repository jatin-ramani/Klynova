const ASSET =
  "https://themes.envytheme.com/startp/wp-content/themes/startnext/assets/img";

const bannerImages: { file: string; anim: string }[] = [
  { file: "man.png", anim: "fadeInDown" },
  { file: "code.png", anim: "fadeInUp" },
  { file: "carpet.png", anim: "fadeInLeft" },
  { file: "bin.png", anim: "zoomIn" },
  { file: "book.png", anim: "bounceIn" },
  { file: "dekstop.png", anim: "fadeInDown" },
  { file: "dot.png", anim: "zoomIn" },
  { file: "flower-top-big.png", anim: "fadeInUp" },
  { file: "flower-top.png", anim: "rotateIn" },
  { file: "keyboard.png", anim: "fadeInUp" },
  { file: "pen.png", anim: "zoomIn" },
  { file: "table.png", anim: "zoomIn" },
  { file: "tea-cup.png", anim: "fadeInLeft" },
  { file: "headphone.png", anim: "rollIn" },
  { file: "main-pic.png", anim: "fadeInUp" },
];

const shapes = [
  { cls: "shape1", file: "shape1.png" },
  { cls: "shape2 rotateme", file: "shape2.svg" },
  { cls: "shape3", file: "shape3.svg" },
  { cls: "shape4", file: "shape4.svg" },
  { cls: "shape5", file: "shape5.png" },
  { cls: "shape6 rotateme", file: "shape4.svg" },
  { cls: "shape7", file: "shape4.svg" },
  { cls: "shape8 rotateme", file: "shape2.svg" },
];

export default function MainBanner() {
  return (
    <div id="home" className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1>We build digital products that grow your business</h1>
                  <p>
                    Klynova is a software development studio crafting modern web
                    applications, AI-powered tools, and scalable digital products
                    with React, Next.js, and cutting-edge AI integrations.
                  </p>
                  <a href="/contact" className="btn btn-primary">
                    Start a Project
                  </a>
                  <a href="/work" className="btn btn-light">
                    View Our Work
                  </a>
                </div>
              </div>

              <div className="col-lg-6 offset-lg-1">
                <div className="banner-image">
                  {bannerImages.map((img) => (
                    <img
                      key={img.file}
                      src={`${ASSET}/banner-image/${img.file}`}
                      className={`wow ${img.anim}`}
                      data-wow-delay="0.6s"
                      alt={img.file.replace(".png", "")}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {shapes.map((s) => (
        <div className={s.cls} key={s.cls}>
          <img src={`${ASSET}/${s.file}`} alt="shape" />
        </div>
      ))}
    </div>
  );
}
