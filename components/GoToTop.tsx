"use client";

import { useScrollPosition } from "@/hooks/useScrollPosition";
import { FaArrowUp } from "react-icons/fa";

export default function GoToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 400;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-11 h-11 rounded-full bg-main text-white flex items-center justify-center shadow-lg z-50 transition-all duration-300 hover:bg-secondary cursor-pointer ${
        isVisible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-4"
      }`}
      aria-label="Go to top"
    >
      <FaArrowUp className="text-sm" />
    </button>
  );
}
