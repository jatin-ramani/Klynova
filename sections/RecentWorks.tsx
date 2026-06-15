"use client";

import OwlCarousel from "@/components/OwlCarousel";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";

const works = [
  { img: "2019/04/works-image-7.jpg", title: "Logo Branding" },
  { img: "2019/04/works-image-6.jpg", title: "Strategic Planning" },
  { img: "2020/11/works-image-8.jpg", title: "Design & Development" },
  { img: "2020/11/works-image-5.jpg", title: "Digital Marketing" },
  { img: "2020/11/works-image-4.jpg", title: "Social Media Marketing" },
  { img: "2020/11/works-image-3.jpg", title: "Competitor Analysis" },
  { img: "2020/11/works-image-2.jpg", title: "SEO Consultancy" },
  { img: "2019/04/works-image-9.jpg", title: "Incredible infrastructure" },
  { img: "2020/11/works-image-1.jpg", title: "Network Marketing" },
];

export default function RecentWorks() {
  const items = works.map((w, i) => (
    <div className="col-lg-12" key={i}>
      <div className="single-works">
        <img src={`${UPLOAD}/${w.img}`} alt="image" />
        <a href="#" className="icon">
          <i className="fas fa-link"></i>
        </a>
        <div className="works-content">
          <h3>
            <a href="#">{w.title}</a>
          </h3>
          <p>
            Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor
            incididunt ut labore dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="works-area ptb-80 bg-f7fafd">
      <div className="section-title ">
        <h2>Our Recent Works</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="row m-0">
        <OwlCarousel
          items={items}
          className="works-slides"
          loop
          autoplay
          dots={false}
          responsive={{ 0: 1, 768: 2, 1200: 3, 1500: 4 }}
        />
      </div>
    </section>
  );
}
