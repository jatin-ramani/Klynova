import type { Metadata } from "next";
import Contact from "@/sections/Contact";

export const metadata: Metadata = {
  title: "Contact — Klynova",
  description:
    "Have a project in mind? Get in touch with Klynova — we respond within 24–48 hours.",
};

export default function ContactPage() {
  return <Contact />;
}
