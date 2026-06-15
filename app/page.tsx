import HeroBanner from "@/sections/HeroBanner";
import ServiceBoxes from "@/sections/ServiceBoxes";
import CloudHosting from "@/sections/CloudHosting";
import DesignDevelopment from "@/sections/DesignDevelopment";
import Features from "@/sections/Features";
import TeamSection from "@/sections/TeamSection";
import FunFacts from "@/sections/FunFacts";
import RecentWorks from "@/sections/RecentWorks";
import PricingPlans from "@/sections/PricingPlans";
import Testimonials from "@/sections/Testimonials";
import ReadyToTalk from "@/sections/ReadyToTalk";
import Partners from "@/sections/Partners";
import BlogSection from "@/sections/BlogSection";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServiceBoxes />
      <CloudHosting />
      <DesignDevelopment />
      <Features />
      <TeamSection />
      <FunFacts />
      <RecentWorks />
      <PricingPlans />
      <Testimonials />
      <ReadyToTalk />
      <Partners />
      <BlogSection />
    </>
  );
}
