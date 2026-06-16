"use client";

import { useEffect, useState } from "react";
import FeatherIcon from "@/components/FeatherIcon";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads/2020/11";

// Placeholder reviews — replace with real client testimonials when available.
const feedback = [
  {
    img: "client-1.jpg",
    name: "Marcus Bennett",
    role: "Founder, ClearList",
    text: "Klynova shipped our MVP in six weeks — clean code, clear communication, and exactly what we needed to launch. They felt like part of our team from day one.",
  },
  {
    img: "client-2.jpg",
    name: "Elena Frost",
    role: "CEO, Brightpath",
    text: "It felt like having a senior engineer on our own team. They understood the business, not just the code, and pushed back when something could be better.",
  },
  {
    img: "client-3.jpg",
    name: "Rahul Iyer",
    role: "CTO, Finly",
    text: "The AI features they built genuinely moved our numbers. Fast, reliable, and a real pleasure to work with from kickoff to launch.",
  },
  {
    img: "client-4.jpg",
    name: "Sophie Martin",
    role: "Product Lead, Nudge",
    text: "Beautiful design paired with rock-solid engineering. Our users noticed the difference right away, and our conversion went up within the first month.",
  },
  {
    img: "client-5.jpg",
    name: "David Okoro",
    role: "Founder, Stackly",
    text: "Honest timelines, no surprises, and real support after launch. Exactly what you want in a development partner — we'll absolutely work with them again.",
  },
];

const N = feedback.length;
const mod = (n: number) => ((n % N) + N) % N;

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => mod(a + 1)), 5000);
    return () => clearInterval(id);
  }, []);

  const current = feedback[active];
  const window5 = [-2, -1, 0, 1, 2].map((off) => mod(active + off));

  return (
    <section className="feedback-area ptb-80 bg-f7fafd">
      <div className="section-title ">
        <span className="klynova-tag">Testimonials</span>
        <h2>What Clients Are Saying</h2>
        <div className="bar"></div>
        <p>
          A few words from founders and teams we&apos;ve helped build and ship
          their products.
        </p>
      </div>

      <div className="feedback-slides">
        <div className="client-feedback">
          <div>
            <div className="item">
              <div
                className="single-feedback"
                key={active}
                style={{ animation: "fadeIn 0.6s" }}
              >
                <div className="client-img">
                  <img src={`${UPLOAD}/${current.img}`} alt={current.name} />
                </div>
                <h3>{current.name}</h3>
                <span>{current.role}</span>
                <p>{current.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="client-thumbnails">
          <div style={{ display: "flex", alignItems: "center" }}>
            {window5.map((realIndex, i) => (
              <div
                key={`${realIndex}-${i}`}
                className={`item ${i === 2 ? "slick-center" : ""}`}
                style={{ flex: "0 0 20%", maxWidth: "20%" }}
                onClick={() => setActive(realIndex)}
              >
                <div className="img-fill">
                  <img
                    src={`${UPLOAD}/${feedback[realIndex].img}`}
                    alt={feedback[realIndex].name}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="prev-arrow slick-arrow"
            onClick={() => setActive((a) => mod(a - 1))}
            aria-label="Previous"
          >
            <FeatherIcon name="arrow-left" />
          </button>
          <button
            type="button"
            className="next-arrow slick-arrow"
            onClick={() => setActive((a) => mod(a + 1))}
            aria-label="Next"
          >
            <FeatherIcon name="arrow-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
