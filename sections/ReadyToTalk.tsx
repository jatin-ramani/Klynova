"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const IMG_BASE = "https://themes.envytheme.com/startp/wp-content/uploads";

export default function ReadyToTalk() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#44CE6F] to-[#43E794] z-0" />

      {/* Decorative shapes */}
      <div className="absolute top-4 left-4 animate-movebounce z-0 opacity-30">
        <Image
          src={`${IMG_BASE}/2020/11/shape1.png`}
          alt=""
          width={120}
          height={120}
        />
      </div>
      <div className="absolute bottom-4 right-4 animate-rotateme z-0 opacity-30">
        <Image
          src={`${IMG_BASE}/2020/11/shape2.svg`}
          alt=""
          width={25}
          height={25}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-white"
        >
          <h2 className="text-2xl md:text-[32px] font-semibold mb-3 text-white">
            Ready To Talk?
          </h2>
          <p className="text-white/90 mb-8 text-base">
            Don&apos;t hesitate to send us a message
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="inline-block px-10 py-4 bg-white text-main font-semibold rounded hover:-translate-y-1 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
            <Link
              href="#"
              className="text-white font-medium hover:underline underline-offset-4"
            >
              Or, get started now →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
