"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const IMG_BASE = "https://themes.envytheme.com/startp/wp-content/uploads";

export default function HeroBanner() {
  return (
    <section className="relative bg-[#F8F8F8] overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4">
          {/* Left Content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-[45px] font-medium leading-tight mb-5 text-heading">
              Starter develops products that make your business grow
            </h1>
            <p className="text-base mb-8 max-w-lg mx-auto lg:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse.
            </p>

            {/* Email Form */}
            <div className="flex flex-col sm:flex-row max-w-md mx-auto lg:mx-0 gap-3">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-5 py-3.5 rounded border border-gray-200 bg-white text-sm outline-none focus:border-main transition-colors"
              />
              <button className="btn-primary whitespace-nowrap !py-3.5 !px-7">
                Get Started
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src={`${IMG_BASE}/2020/11/main-pic-2.png`}
              alt="Hero Banner"
              width={650}
              height={500}
              priority
              className="relative z-10"
            />

            {/* Floating shapes */}
            <div className="absolute top-8 right-0 z-0 animate-movebounce hidden lg:block">
              <Image
                src={`${IMG_BASE}/2020/11/shape1.png`}
                alt=""
                width={100}
                height={100}
              />
            </div>
            <div className="absolute bottom-10 left-10 z-0 animate-movebounce hidden lg:block" style={{ animationDelay: "1s" }}>
              <Image
                src={`${IMG_BASE}/2020/11/shape4.png`}
                alt=""
                width={80}
                height={80}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background shapes */}
      <div className="absolute -bottom-16 left-0 w-full z-0 opacity-50 hidden lg:block">
        <Image
          src={`${IMG_BASE}/2020/11/shape1.png`}
          alt=""
          width={170}
          height={170}
        />
      </div>
      <div className="absolute top-20 right-20 z-0 animate-rotateme hidden lg:block">
        <Image
          src={`${IMG_BASE}/2020/11/shape2.svg`}
          alt=""
          width={22}
          height={22}
        />
      </div>
      <div className="absolute top-40 left-20 z-0 animate-rotateme hidden lg:block" style={{ animationDelay: "5s" }}>
        <Image
          src={`${IMG_BASE}/2020/11/shape2.svg`}
          alt=""
          width={15}
          height={15}
        />
      </div>
    </section>
  );
}
