import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiquidFilters from "@/components/LiquidFilters";
import SmoothScroll from "@/components/SmoothScroll";
import TawkChat from "@/components/TawkChat";

export const metadata: Metadata = {
  metadataBase: new URL("https://klynova.vercel.app"),
  title: "Klynova — AI-Powered Software Development Studio",
  description:
    "Klynova builds intelligent web applications, AI integrations, and digital products using React, Next.js, and modern AI tooling.",
  icons: {
    icon: "/logo/klynova-icon-favicon-28.svg",
  },
  openGraph: {
    title: "Klynova — AI-Powered Software Development Studio",
    description:
      "Klynova builds intelligent web applications, AI integrations, and digital products using React, Next.js, and modern AI tooling.",
    url: "https://klynova.vercel.app",
    siteName: "Klynova",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#06060f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
        />
      </head>
      <body>
        <LiquidFilters />
        <Navbar />
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <TawkChat />
      </body>
    </html>
  );
}
