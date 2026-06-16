import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import RecentWorks from "@/sections/RecentWorks";
import Stats from "@/sections/Stats";
import Testimonials from "@/sections/Testimonials";
import FinalCTA from "@/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Our Work — Klynova",
  description:
    "Selected projects by Klynova — web applications, AI tools, and commerce experiences built with React and Next.js.",
};

export default function WorkPage() {
  return (
    <>
      <PageBanner title="Our Work" />
      <RecentWorks />
      <Stats />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
