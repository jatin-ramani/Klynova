"use client";

import OwlCarousel from "@/components/OwlCarousel";

const works = [
  {
    img: "/projects/caelvi.png",
    title: "Caelvi",
    tag: "E-Commerce",
    desc: "A modern fashion e-commerce storefront with a polished, conversion-focused shopping experience.",
    url: "https://caelvi.com",
  },
  {
    img: "/projects/carido.png",
    title: "Carido",
    tag: "Web App",
    desc: "A seamless car-rental booking platform — browse cars, book in minutes, or list your own.",
    url: "https://car-rental-tau-wheat.vercel.app/",
  },
  {
    img: "/projects/nexura.png",
    title: "Nexura",
    tag: "E-Commerce",
    desc: "A responsive shoe store with cart, filters, and a fast, app-like browsing experience.",
    url: "https://nexura-shoes.vercel.app/",
  },
  {
    img: "/projects/exptra.png",
    title: "Exptra",
    tag: "Dashboard",
    desc: "A dark-mode finance dashboard for tracking income, expenses, and insights across devices.",
    url: "https://finance-insight-psi.vercel.app/",
  },
];

export default function RecentWorks() {
  const items = works.map((w, i) => (
    <div className="col-lg-12" key={i}>
      <div className="single-works">
        <img src={w.img} alt={w.title} />
        <a
          href={w.url}
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
          aria-label={`Open ${w.title}`}
        >
          <i className="fas fa-link"></i>
        </a>
        <div className="works-content">
          <span className="klynova-work-tag">{w.tag}</span>
          <h3>
            <a href={w.url} target="_blank" rel="noopener noreferrer">
              {w.title}
            </a>
          </h3>
          <p>{w.desc}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="work" className="works-area ptb-80 bg-f7fafd">
      <div className="section-title ">
        <span className="klynova-tag">Selected Work</span>
        <h2>Recent Projects</h2>
        <div className="bar"></div>
        <p>
          A selection of products we&apos;ve designed and built — web apps,
          e-commerce, and dashboards.
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
