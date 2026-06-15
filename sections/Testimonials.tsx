"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { TESTIMONIALS } from "@/constants";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const goTo = (index: number) => setCurrent(index);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="ptb-80 bg-bg-light">
      <div className="container">
        <SectionTitle
          title="What Users Saying"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="max-w-3xl mx-auto">
          {/* Main feedback */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-5 border-4 border-main">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-heading mb-1">
                {testimonial.name}
              </h3>
              <span className="text-secondary text-sm font-medium">
                {testimonial.role}
              </span>
              <p className="mt-5 text-base leading-relaxed max-w-xl mx-auto">
                {testimonial.text}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Thumbnail Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-12 h-12 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                  i === current
                    ? "border-2 border-main scale-110"
                    : "border-2 border-transparent opacity-50 hover:opacity-80"
                }`}
                aria-label={`Testimonial from ${t.name}`}
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
