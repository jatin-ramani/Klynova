import FeatherIcon from "./FeatherIcon";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";
const ASSET =
  "https://themes.envytheme.com/startp/wp-content/themes/startnext/assets/img";

const companyLinks = [
  "About Us",
  "Services",
  "Features",
  "Our Pricing",
  "Latest News",
];
const supportLinks = [
  "FAQ's",
  "Privacy Policy",
  "Terms & Condition",
  "Community",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3">
            <div className="single-footer-widget">
              <div className="logo">
                <a href="#" className="navbar-brand">
                  <img
                    src={`${UPLOAD}/2025/01/startnext-main-logo.png`}
                    alt="StartNext"
                  />
                </a>
              </div>
              <div>
                <div className="textwidget">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown
                    printer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="single-footer-widget col-lg-3 col-md-3">
            <h3>Company</h3>
            <div className="menu-footer-company-container">
              <ul className="menu">
                {companyLinks.map((label) => (
                  <li className="menu-item" key={label}>
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="single-footer-widget col-lg-3 col-md-3">
            <h3>Support</h3>
            <div className="menu-footer-support-container">
              <ul className="menu">
                {supportLinks.map((label) => (
                  <li className="menu-item" key={label}>
                    <a href="#">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3">
            <div className="single-footer-widget">
              <div>
                <h2 className="widgettitle">Address</h2>
                <div className="textwidget">
                  <ul className="footer-contact-info">
                    <li>
                      <FeatherIcon name="map-pin" /> 28 Division St, New York,{" "}
                      <br />
                      NY 10002, USA
                    </li>
                    <li>
                      <FeatherIcon name="mail" /> Email:{" "}
                      <a href="#">hello@startnext.com</a>
                    </li>
                    <li>
                      <FeatherIcon name="phone-call" /> Phone:{" "}
                      <a href="tel:+321984754">+ (321) 984 754</a>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className="social-links">
                <li>
                  <a target="_blank" href="#" className="twitter">
                    {" "}
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" className="facebook">
                    {" "}
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#" className="instagram">
                    {" "}
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    {" "}
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                © StartNext. All rights reserved by{" "}
                <a href="#" target="_blank" rel="noopener">
                  EnvyTheme
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="shape1">
        <img src={`${ASSET}/shape1.png`} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={`${ASSET}/shape2.svg`} alt="shape2" />
      </div>
    </footer>
  );
}
