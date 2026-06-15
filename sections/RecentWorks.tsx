"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { WORKS_DATA } from "@/constants";
import { FiLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function RecentWorks() {
  const [current, setCurrent] = useState(0);
  const visibleCount =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;
  const total = WORKS_DATA.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(WORKS_DATA[(current + i) % total]);
    }
    return items;
  };

  return (
    <section className="ptb-80 bg-bg-light">
      <div className="container">
        <SectionTitle
          title="Our Recent Works"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {getVisible().map((work, i) => (
              <motion.div
                key={`${work.title}-${current}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative overflow-hidden"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={450}
                  height={340}
                  className="w-full h-auto object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* Link Icon */}
                <Link
                  href={work.link}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-main text-white flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 hover:bg-secondary z-10"
                >
                  <FiLink className="text-lg" />
                </Link>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    <Link href={work.link} className="hover:text-main">
                      {work.title}
                    </Link>
                  </h3>
                  <p className="text-white/70 text-sm mb-0 line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-heading hover:bg-main hover:text-white transition-all z-10 cursor-pointer"
            aria-label="Previous work"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-heading hover:bg-main hover:text-white transition-all z-10 cursor-pointer"
            aria-label="Next work"
          >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
