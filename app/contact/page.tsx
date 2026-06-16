import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import ContactForm from "@/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Klynova",
  description:
    "Have a project in mind? Get in touch with Klynova — we respond within 24–48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" />
      <ContactForm />
    </>
  );
}
