import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Blog from "@/sections/Blog";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Insights — Klynova",
  description:
    "Articles on building modern web products, AI integration, and design.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Insights"
        title="Ideas worth"
        highlight="sharing"
        subtitle="Notes on building modern web products, AI integration, and design that converts."
        bg="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=2400&q=90"
      />
      <Blog />
      <CTA />
    </>
  );
}
