"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/constants";

export default function Partners() {
  return (
    <section className="relative -mt-12 z-10 pb-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-xl px-8 py-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {PARTNER_LOGOS.map((partner, i) => (
              <a
                key={i}
                href="#"
                className="group flex items-center justify-center p-3 transition-all"
              >
                {/* Default (grayscale) */}
                <Image
                  src={partner.defaultImage}
                  alt={partner.alt}
                  width={130}
                  height={60}
                  className="block group-hover:hidden opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
                {/* Hover (color) */}
                <Image
                  src={partner.hoverImage}
                  alt={partner.alt}
                  width={130}
                  height={60}
                  className="hidden group-hover:block object-contain"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
