import type { Metadata } from "next";
import Work from "@/sections/Work";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "Our Work — Klynova",
  description:
    "Selected projects by Klynova — web applications, AI tools, and commerce experiences built with React and Next.js.",
};

export default function WorkPage() {
  return (
    <>
      <Work />
      <CTA />
    </>
  );
}
