"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { TEAM_MEMBERS } from "@/constants";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function TeamSection() {
  const [current, setCurrent] = useState(0);
  const maxVisible = 4;
  const total = TEAM_MEMBERS.length;

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, []);

  // Get visible items (wrapping)
  const getVisibleMembers = () => {
    const visible = [];
    for (let i = 0; i < maxVisible; i++) {
      visible.push(TEAM_MEMBERS[(current + i) % total]);
    }
    return visible;
  };

  return (
    <section className="ptb-80">
      <div className="container">
        <SectionTitle
          title="Our Awesome Team"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="relative">
          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleMembers().map((member, i) => (
              <motion.div
                key={`${member.name}-${current}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-t-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={350}
                    height={350}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:border-4 group-hover:border-main"
                  />
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-[#44CE6F] to-[#43E794] py-3 px-4">
                    <h3 className="text-white text-base font-semibold">
                      {member.name}
                    </h3>
                    <span className="text-white/90 text-sm">{member.role}</span>
                  </div>
                  <div className="bg-white p-4 shadow-sm rounded-b-md">
                    <p className="text-sm mb-0">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-heading hover:bg-main hover:text-white transition-all z-10 cursor-pointer hidden lg:flex"
            aria-label="Previous"
          >
            <FiChevronLeft className="text-lg" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-heading hover:bg-main hover:text-white transition-all z-10 cursor-pointer hidden lg:flex"
            aria-label="Next"
          >
            <FiChevronRight className="text-lg" />
          </button>

          {/* Dots (mobile) */}
          <div className="flex items-center justify-center gap-2 mt-6 lg:hidden">
            {TEAM_MEMBERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  i === current ? "bg-main scale-125" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
