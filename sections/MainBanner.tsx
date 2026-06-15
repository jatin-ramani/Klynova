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

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="d-table">
        <div className="d-table-cell">
          <div className="container">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-5">
                <div className="hero-content">
                  <h1>Secure IT Solutions for a more secure environment</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                  <a href="#" className="btn btn-primary">
                    GET STARTED
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

      <div className="shape1">
        <img src={`${ASSET}/shape1.png`} alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src={`${ASSET}/shape2.svg`} alt="shape" />
      </div>
      <div className="shape3">
        <img src={`${ASSET}/shape3.svg`} alt="shape" />
      </div>
      <div className="shape4">
        <img src={`${ASSET}/shape4.svg`} alt="shape" />
      </div>
      <div className="shape5">
        <img src={`${ASSET}/shape5.png`} alt="shape" />
      </div>
      <div className="shape6 rotateme">
        <img src={`${ASSET}/shape4.svg`} alt="shape" />
      </div>
      <div className="shape7">
        <img src={`${ASSET}/shape4.svg`} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={`${ASSET}/shape2.svg`} alt="shape" />
      </div>
    </div>
  );
}
