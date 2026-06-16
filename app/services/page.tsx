import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import CloudHosting from "@/sections/CloudHosting";
import DesignDevelopment from "@/sections/DesignDevelopment";
import Features from "@/sections/Features";
import PricingPlans from "@/sections/PricingPlans";
import FinalCTA from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Services — Klynova",
  description:
    "Web application development, AI integration, UI/UX design, and API & backend development with React, Next.js, and modern AI tooling.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />
      <CloudHosting />
      <DesignDevelopment />
      <Features />
      <PricingPlans />
      <FinalCTA />
    </>
  );
}
