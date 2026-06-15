import MainBanner from "@/sections/MainBanner";
import Boxes from "@/sections/Boxes";
import CloudHosting from "@/sections/CloudHosting";
import DesignDevelopment from "@/sections/DesignDevelopment";
import Features from "@/sections/Features";
import Team from "@/sections/Team";
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
      <MainBanner />
      <Boxes />
      <CloudHosting />
      <DesignDevelopment />
      <Features />
      <Team />
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
