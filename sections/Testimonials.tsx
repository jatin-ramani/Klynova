"use client";

import { useEffect, useState } from "react";
import FeatherIcon from "@/components/FeatherIcon";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";

const TEXT =
  "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const feedback = [
  { img: "2020/11/client-1.jpg", name: "Maxwel Warner" },
  { img: "2020/11/client-2.jpg", name: "Steven Smith" },
  { img: "2020/11/client-3.jpg", name: "Luice Lucy" },
  { img: "2020/11/client-4.jpg", name: "Jhon Terry" },
  { img: "2020/11/client-5.jpg", name: "Ayan Mitchel" },
  { img: "2020/11/client-1.jpg", name: "Steven Smith" },
  { img: "2020/11/client-4.jpg", name: "Maxwel Warner" },
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
  // centerMode window of 5 thumbnails centered on the active item.
  const window5 = [-2, -1, 0, 1, 2].map((off) => mod(active + off));

  return (
    <section className="feedback-area ptb-80 bg-f7fafd">
      <div className="section-title ">
        <h2>What Users Saying</h2>
        <div className="bar"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
                <span>Web Developer</span>
                <p>{TEXT}</p>
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
