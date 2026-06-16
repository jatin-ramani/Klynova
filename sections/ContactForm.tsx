"use client";

import type { FormEvent } from "react";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";

const infoBoxes = [
  {
    icon: "fas fa-envelope-open",
    title: "Mail Here",
    lines: [{ text: "hello@klynova.in", href: "mailto:hello@klynova.in" }],
  },
  {
    icon: "fas fa-map-marker-alt",
    title: "Based In",
    lines: [{ text: "Gujarat, India — working globally", href: "" }],
  },
  {
    icon: "fas fa-clock",
    title: "Response Time",
    lines: [{ text: "Within 24–48 hours", href: "" }],
  },
];

export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const subject = String(f.get("subject") || "Project enquiry");
    const body =
      `Name: ${f.get("name")}\n` +
      `Email: ${f.get("email")}\n` +
      `Phone: ${f.get("phone")}\n\n` +
      `${f.get("message")}`;
    window.location.href = `mailto:hello@klynova.in?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <section className="contact-area ptb-80">
        <div className="container">
          <div className="section-title ">
            <span className="klynova-tag">Contact</span>
            <h2>Get In Touch With Us</h2>
            <div className="bar"></div>
            <p>Tell us about your project — we&apos;ll be glad to help.</p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src={`${UPLOAD}/2020/11/about-us.png`}
                alt="Contact Klynova"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            <div className="col-lg-6 col-md-12">
              <div id="contactForm">
                <form onSubmit={onSubmit}>
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          cols={30}
                          rows={5}
                          placeholder="Your Message"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <button type="submit" className="btn btn-primary">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-area pb-80">
        <div className="container">
          <div className="row">
            {infoBoxes.map((box) => (
              <div className="col-lg-4 col-md-4 col-sm-6" key={box.title}>
                <div className="contact-info-box">
                  <div className="icon">
                    <i className={box.icon}></i>
                  </div>
                  <h3>{box.title}</h3>
                  {box.lines.map((l) => (
                    <p key={l.text}>
                      {l.href ? <a href={l.href}>{l.text}</a> : l.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
