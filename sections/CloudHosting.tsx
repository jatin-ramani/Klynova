"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { FiCloud, FiCode, FiSmartphone, FiGlobe } from "react-icons/fi";

const IMG_BASE = "https://themes.envytheme.com/startp/wp-content/uploads";

const services = [
  { icon: FiCloud, title: "Cloud Databases" },
  { icon: FiCode, title: "Website Hosting" },
  { icon: FiSmartphone, title: "File Storage" },
  { icon: FiGlobe, title: "File Backup" },
];

export default function CloudHosting() {
  return (
    <section className="ptb-80 bg-bg-light relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Image */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <Image
                src={`${IMG_BASE}/2020/11/services-left-image.png`}
                alt="Cloud Hosting"
                width={590}
                height={490}
              />
              {/* Floating shapes */}
              <div className="absolute -top-4 -right-4 animate-movebounce hidden lg:block">
                <Image
                  src={`${IMG_BASE}/2020/11/shape4.png`}
                  alt=""
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-[28px] font-semibold mb-4 text-heading">
              Cloud Hosting Services
            </h2>
            <div className="w-[80px] h-[5px] bg-[#cdf1d8] rounded-full mb-5 relative overflow-hidden">
              <span className="absolute left-0 top-0 h-full w-[5px] rounded-full bg-main animate-move-bg" />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {services.map((svc) => (
                <div
                  key={svc.title}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <svc.icon className="text-2xl text-main flex-shrink-0" />
                  <h4 className="text-sm font-semibold text-heading">
                    {svc.title}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
