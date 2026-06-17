import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Services from "@/sections/Services";
import Process from "@/sections/Process";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Services — Klynova",
  description:
    "Web application development, AI integration, UI/UX design, and API & backend development with React, Next.js, and modern AI tooling.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="What We Do"
        title="Services that"
        highlight="ship products"
        subtitle="From web apps and AI integration to design and backend — every layer of your product, handled by one focused team."
      />
      <Services />
      <Process />
      <CTA />
    </>
  );
}
