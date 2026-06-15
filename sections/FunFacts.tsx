"use client";

import Counter from "@/components/Counter";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";

const facts = [
  { count: 180, suffix: "K", label: "Downloaded" },
  { count: 30, suffix: "K", label: "Feedback" },
  { count: 500, suffix: "+", label: "Workers" },
  { count: 70, suffix: "+", label: "Contrubutors" },
];

export default function FunFacts() {
  return (
    <section className="funfacts-area ptb-80">
      <div className="section-title ">
        <h2>We Always Try To Understand Users Expectation</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="container">
        <div className="row">
          {facts.map((f) => (
            <div className="col-lg-3 col-6 col-sm-3" key={f.label}>
              <div className="funfact">
                <h3>
                  <Counter count={f.count} />
                  {f.suffix}
                </h3>
                <p>{f.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-cta-box">
          <h3>Have any question about us?</h3>
          <p>Don&apos;t hesitate to contact us</p>
          <a href="#" className="btn btn-primary">
            Contact Us
          </a>
        </div>

        <div className="map-bg" style={{ textAlign: "center" }}>
          <img src={`${UPLOAD}/2020/11/map-one.png`} alt="map" />
        </div>
      </div>
    </section>
  );
}
