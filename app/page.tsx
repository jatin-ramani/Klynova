import MainBanner from "@/sections/MainBanner";
import Services from "@/sections/Services";
import Features from "@/sections/Features";
import Founder from "@/sections/Founder";
import Stats from "@/sections/Stats";
import Portfolio from "@/sections/Portfolio";
import PricingPlans from "@/sections/PricingPlans";
import Trust from "@/sections/Trust";
import FinalCTA from "@/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <MainBanner />
      <Services />
      <Features />
      <Founder />
      <Stats />
      <Portfolio />
      <PricingPlans />
      <Trust />
      <FinalCTA />
    </>
  );
}
