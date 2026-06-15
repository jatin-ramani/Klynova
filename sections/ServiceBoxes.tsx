"use client";

import { motion } from "framer-motion";
import { FiLayers, FiShield, FiMonitor } from "react-icons/fi";

const boxes = [
  {
    icon: FiLayers,
    title: "Flexibility",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    color: "#44CE6F",
  },
  {
    icon: FiShield,
    title: "Safety",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    color: "#C679E3",
  },
  {
    icon: FiMonitor,
    title: "Convenient",
    description:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    color: "#44CE6F",
  },
];

export default function ServiceBoxes() {
  return (
    <section className="ptb-80">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {boxes.map((box, i) => (
            <motion.div
              key={box.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative text-center p-8 rounded-md border-2 border-dashed border-border-green bg-white transition-all duration-500 hover:-translate-y-2.5 hover:border-transparent hover:shadow-xl cursor-default"
              style={{
                ["--box-color" as string]: box.color,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-[#44CE6F] to-[#43E794] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              <div
                className="w-[70px] h-[70px] rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-500"
                style={{ color: box.color }}
              >
                <box.icon className="text-3xl group-hover:text-white transition-colors duration-500" style={{ color: box.color }} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-heading group-hover:text-white transition-colors duration-500">
                {box.title}
              </h3>
              <p className="text-sm leading-relaxed mb-0 group-hover:text-white/90 transition-colors duration-500">
                {box.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
