"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { PRICING_PLANS } from "@/constants";
import { FiCheck, FiX } from "react-icons/fi";

export default function PricingPlans() {
  return (
    <section className="ptb-80 bg-bg-alt">
      <div className="container">
        <SectionTitle
          title="Pricing Plans"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`bg-white rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-2.5 hover:shadow-xl ${
                plan.isActive ? "shadow-xl relative" : "shadow-md"
              }`}
            >
              {/* Header */}
              <div
                className={`relative py-8 text-center ${
                  plan.isActive ? "bg-gradient-to-r from-[#44CE6F] to-[#43E794]" : ""
                }`}
              >
                {plan.isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#44CE6F] to-[#43E794]" />
                )}
                <h3
                  className={`relative z-10 text-lg font-bold tracking-wider uppercase ${
                    plan.isActive ? "text-white" : "text-heading"
                  }`}
                >
                  {plan.name}
                </h3>
              </div>

              {/* Price */}
              <div className="text-center py-6 border-b border-gray-100">
                <span className="text-main text-[45px] font-bold">
                  <sup className="text-lg relative -top-4">$</sup>
                  {plan.price}
                  <span className="text-base font-normal text-body ml-1">
                    {plan.period}
                  </span>
                </span>
              </div>

              {/* Features */}
              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className={`flex items-center gap-3 text-sm ${
                        feature.active ? "text-heading" : "text-gray-400 line-through"
                      }`}
                    >
                      {feature.active ? (
                        <FiCheck className="text-main flex-shrink-0" />
                      ) : (
                        <FiX className="text-gray-300 flex-shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="px-8 pb-8 text-center">
                <Link
                  href="#"
                  className={`btn-primary w-full block text-center ${
                    plan.isActive ? "" : ""
                  }`}
                >
                  Select Plan
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
