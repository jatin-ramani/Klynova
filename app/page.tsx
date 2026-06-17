import Hero from "@/sections/Hero";
import Marquee from "@/sections/Marquee";
import Services from "@/sections/Services";
import Work from "@/sections/Work";
import Showcase from "@/sections/Showcase";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import Faq from "@/sections/Faq";
import CTA from "@/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Showcase />
      <Stats />
      <Testimonials />
      <Faq />
      <CTA />
    </>
  );
}
