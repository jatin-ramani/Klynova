import MainBanner from "@/sections/MainBanner";
import ServiceBoxes from "@/sections/ServiceBoxes";
import CloudHosting from "@/sections/CloudHosting";
import DesignDevelopment from "@/sections/DesignDevelopment";
import Features from "@/sections/Features";
import Team from "@/sections/Team";
import Stats from "@/sections/Stats";
import RecentWorks from "@/sections/RecentWorks";
import PricingPlans from "@/sections/PricingPlans";
import Testimonials from "@/sections/Testimonials";
import FinalCTA from "@/sections/FinalCTA";
import Partners from "@/sections/Partners";
import Blog from "@/sections/Blog";

export default function Home() {
  return (
    <>
      <MainBanner />
      <ServiceBoxes />
      <CloudHosting />
      <DesignDevelopment />
      <Features />
      <Team />
      <Stats />
      <RecentWorks />
      <PricingPlans />
      <Testimonials />
      <FinalCTA />
      <Partners />
      <Blog />
    </>
  );
}
