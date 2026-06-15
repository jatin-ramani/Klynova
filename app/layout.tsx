import type { Metadata } from "next";
import "./globals.css";
import Preloader from "@/components/Preloader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoTop from "@/components/GoTop";
import DemoToolbar from "@/components/DemoToolbar";
import Wow from "@/components/Wow";

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
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>
        <Preloader />
        <Header />
        <div id="content" className="site-content">
          {children}
        </div>
        <Footer />
        <GoTop />
        <DemoToolbar />
        <Wow />
      </body>
    </html>
  );
}
