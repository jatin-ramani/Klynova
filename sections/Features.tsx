"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import {
  FiSmartphone,
  FiMonitor,
  FiCode,
  FiShield,
  FiPieChart,
  FiShoppingCart,
} from "react-icons/fi";

const features = [
  {
    icon: FiMonitor,
    bgColor: "#44CE6F",
    title: "Responsive Design",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    icon: FiSmartphone,
    bgColor: "#C679E3",
    title: "App Development",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    icon: FiCode,
    bgColor: "#EB6B3D",
    title: "Software Development",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    icon: FiShield,
    bgColor: "#44CE6F",
    title: "Information Security",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    icon: FiPieChart,
    bgColor: "#C679E3",
    title: "Data Analyst",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
  {
    icon: FiShoppingCart,
    bgColor: "#EB6B3D",
    title: "E-commerce",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.",
  },
];

export default function Features() {
  return (
    <section className="ptb-80 bg-bg-light">
      <div className="container">
        <SectionTitle
          title="Our Features"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-md p-8 text-center transition-all duration-500 hover:-translate-y-2.5 hover:shadow-xl relative overflow-hidden"
            >
              {/* Pseudo elements for hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-main scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="absolute bottom-0 right-0 w-full h-[3px] bg-main scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />

              <div
                className="w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-500 group-hover:text-white"
                style={{
                  backgroundColor: `${feature.bgColor}15`,
                  color: feature.bgColor,
                }}
              >
                <feature.icon className="text-3xl" />
              </div>

              <div
                className="absolute w-[70px] h-[70px] rounded-full top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 flex items-center justify-center mx-auto transition-all duration-500"
                style={{
                  backgroundColor: feature.bgColor,
                  color: "#fff",
                }}
              >
                <feature.icon className="text-3xl" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-heading">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <Link
                href="#"
                className="text-sm font-medium text-main hover:tracking-wider transition-all"
              >
                Read More +
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
