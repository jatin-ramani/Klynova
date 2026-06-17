import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Pricing from "@/sections/Pricing";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing — Klynova",
  description:
    "Simple, transparent pricing for web apps, AI integration, and design work.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Plans that fit"
        highlight="your stage"
        subtitle="From a first landing page to a scalable platform — transparent pricing, no surprises."
      />
      <Pricing />
      <CTA />
    </>
  );
}
