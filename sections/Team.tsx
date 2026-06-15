"use client";

import OwlCarousel from "@/components/OwlCarousel";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";

const members = [
  { img: "2020/11/team-1.jpg", name: "Josh Buttler", role: "CEO & Founder" },
  { img: "2020/11/team-2.jpg", name: "Alex Maxwel", role: "Marketing Manager" },
  { img: "2020/11/team3-1.jpg", name: "Janny Cotller", role: "Web Developer" },
  { img: "2020/11/team-4.jpg", name: "Jason Statham", role: "UX/UI Designer" },
  { img: "2020/11/team-5.jpg", name: "Corey Anderson", role: "Project Manager" },
  { img: "2020/11/team-1.jpg", name: "Josh Buttler", role: "CEO & Founder" },
  { img: "2020/11/team-2.jpg", name: "Alex Maxwel", role: "Marketing Manager" },
  { img: "2020/11/team-4.jpg", name: "Jason Statham", role: "UX/UI Designer" },
  { img: "2020/11/team-5.jpg", name: "Jason Statham", role: "UX/UI Designer" },
];

export default function Team() {
  const items = members.map((m, i) => (
    <div className="col-lg-12" key={i}>
      <div className="single-team">
        <div className="team-image">
          <img
            src={`${UPLOAD}/${m.img}`}
            alt={m.name}
            className="bannerrightimg"
          />
        </div>
        <div className="team-content">
          <div className="team-info">
            <h3>{m.name}</h3>
            <span>{m.role}</span>
          </div>
          <ul></ul>
          <p>
            Risus commodo viverra maecenas accumsan lacus vel facilisis quis
            ipsum.
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="team-area ptb-80 bg-f9f6f6">
      <div className="section-title ">
        <h2>Our Awesome Team</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="row m-0">
        <OwlCarousel
          items={items}
          loop
          autoplay={false}
          dots
          responsive={{ 0: 1, 768: 2, 1200: 4, 1500: 5 }}
        />
      </div>
    </section>
  );
}
