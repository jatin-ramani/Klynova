"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { FUN_FACTS } from "@/constants";
import { useInView } from "@/hooks/useInView";
import { useCounter } from "@/hooks/useCounter";

const IMG_BASE = "https://themes.envytheme.com/startp/wp-content/uploads";

function CounterItem({
  count,
  suffix,
  label,
  isInView,
  delay,
}: {
  count: number;
  suffix: string;
  label: string;
  isInView: boolean;
  delay: number;
}) {
  const value = useCounter(count, isInView, 2000);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <h3 className="text-4xl md:text-[45px] font-bold text-main mb-1">
        {value}
        <span>{suffix}</span>
      </h3>
      <p className="text-heading font-medium text-sm">{label}</p>
    </motion.div>
  );
}

export default function FunFacts() {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <section className="ptb-80 relative overflow-hidden" ref={ref}>
      <div className="container">
        <SectionTitle
          title="We Always Try To Understand Users Expectation"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        {/* Counter Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {FUN_FACTS.map((fact, i) => (
            <CounterItem
              key={fact.label}
              count={fact.count}
              suffix={fact.suffix}
              label={fact.label}
              isInView={isInView}
              delay={i * 0.15}
            />
          ))}
        </div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white shadow-lg rounded-lg p-10 relative z-10"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-3 text-heading">
            Have any question about us?
          </h3>
          <p className="mb-5">Don&apos;t hesitate to contact us</p>
          <Link href="#" className="btn-primary">
            Contact Us
          </Link>
        </motion.div>

        {/* Map Background */}
        <div className="flex justify-center mt-10 opacity-30">
          <Image
            src={`${IMG_BASE}/2020/11/map-one.png`}
            alt="World Map"
            width={910}
            height={443}
          />
        </div>
      </div>
    </section>
  );
}
