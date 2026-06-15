import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import TopHeader from "@/components/TopHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StartNext – IT Startup & Technology Services",
  description:
    "Starter develops products that make your business grow. IT Startup & Technology Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-[family-name:var(--font-poppins)]">
        <TopHeader />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GoToTop />
      </body>
    </html>
  );
}
