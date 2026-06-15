"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

const IMG_BASE = "https://themes.envytheme.com/startp/wp-content/uploads";

const features = [
  "Unimited Deals",
  "Own Analytics Platform",
  "Tracker tracker",
  "100% Portable",
  "Amazingly Lightweight",
  "Satisfaction Guaranteed",
];

export default function DesignDevelopment() {
  return (
    <section className="ptb-80 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-[28px] font-semibold mb-4 text-heading">
              Design & Development
            </h2>
            <div className="w-[80px] h-[5px] bg-[#cdf1d8] rounded-full mb-5 relative overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-[5px] rounded-full bg-main animate-move-bg" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-heading">
                  <FiCheck className="text-main flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src={`${IMG_BASE}/2020/11/services-right-image.png`}
                alt="Design & Development"
                width={590}
                height={490}
              />
              <div className="absolute top-10 left-0 animate-movebounce hidden lg:block" style={{ animationDelay: "2s" }}>
                <Image
                  src={`${IMG_BASE}/2020/11/shape4.png`}
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
