import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Team from "@/sections/Team";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import FinalCTA from "@/sections/FinalCTA";

const UPLOAD = "https://themes.envytheme.com/startp/wp-content/uploads";

export const metadata: Metadata = {
  title: "About — Klynova",
  description:
    "Klynova is a software development studio building modern web applications, AI-powered tools, and scalable digital products.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Klynova" />

      <section className="ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <img
                src={`${UPLOAD}/2020/11/about-us.png`}
                alt="About Klynova"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 services-content">
              <div className="section-title">
                <span className="klynova-tag">Who We Are</span>
                <h2>A studio built for modern products</h2>
                <div className="bar"></div>
                <p>
                  Klynova is a software development studio focused on building
                  digital products that actually move the needle — modern web
                  applications, AI-powered tools, and scalable platforms.
                </p>
                <p>
                  We work with founders and teams who care about quality,
                  speed, and honest collaboration. No bloated agencies, no
                  middlemen — just clean code, thoughtful design, and a partner
                  invested in your results. Based in Gujarat, India, working
                  with clients globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
