"use client";

import OwlCarousel from "@/components/OwlCarousel";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads/2020/11";

// Placeholder team — swap names/photos/roles with the real team when ready.
const members = [
  {
    img: "team-1.jpg",
    name: "Daniel Kim",
    role: "Lead Engineer",
    bio: "Architects scalable systems and leads delivery across the full stack.",
  },
  {
    img: "team-2.jpg",
    name: "Sara Lopez",
    role: "Product Designer",
    bio: "Turns complex problems into clean, intuitive, conversion-focused interfaces.",
  },
  {
    img: "team3-1.jpg",
    name: "Omar Hassan",
    role: "Full-Stack Developer",
    bio: "Builds fast, reliable features from the database all the way to the UI.",
  },
  {
    img: "team-4.jpg",
    name: "Maya Chen",
    role: "AI Engineer",
    bio: "Integrates AI and automation that creates real, measurable product value.",
  },
  {
    img: "team-5.jpg",
    name: "Tom Walker",
    role: "Project Manager",
    bio: "Keeps every project on track with clear, honest communication.",
  },
];

const socials = [
  { icon: "fab fa-linkedin-in", href: "#" },
  { icon: "fab fa-twitter", href: "#" },
  { icon: "fab fa-github", href: "#" },
];

export default function Team() {
  const items = members.map((m, i) => (
    <div className="col-lg-12" key={i}>
      <div className="single-team">
        <div className="team-image">
          <img src={`${UPLOAD}/${m.img}`} alt={m.name} />
        </div>
        <div className="team-content">
          <div className="team-info">
            <h3>{m.name}</h3>
            <span>{m.role}</span>
          </div>
          <ul>
            {socials.map((s) => (
              <li key={s.icon}>
                <a href={s.href} aria-label="social">
                  <i className={s.icon}></i>
                </a>
              </li>
            ))}
          </ul>
          <p>{m.bio}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="about" className="team-area ptb-80 bg-f9f6f6">
      <div className="section-title ">
        <span className="klynova-tag">Our Team</span>
        <h2>The People Behind Klynova</h2>
        <div className="bar"></div>
        <p>
          A small, senior team of engineers and designers who build your product
          with you — no hand-offs, no middlemen.
        </p>
      </div>

      <div className="row m-0">
        <OwlCarousel
          items={items}
          loop
          autoplay={false}
          dots
          responsive={{ 0: 1, 768: 2, 1200: 3, 1500: 4 }}
        />
      </div>
    </section>
  );
}
