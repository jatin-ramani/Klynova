import type { Metadata } from "next";
import About from "@/sections/About";
import Process from "@/sections/Process";
import CTA from "@/sections/CTA";

export const metadata: Metadata = {
  title: "About — Klynova",
  description:
    "Klynova is a software development studio building modern web applications, AI-powered tools, and scalable digital products.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Process />
      <CTA />
    </>
  );
}
