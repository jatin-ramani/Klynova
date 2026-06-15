"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { BLOG_POSTS } from "@/constants";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

export default function BlogSection() {
  return (
    <section className="pt-20 pb-12">
      <div className="container">
        <SectionTitle
          title="The News From Our Blog"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <Link href={post.link}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={450}
                    height={280}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#44CE6F] to-[#43E794] text-white text-xs px-4 py-2 rounded flex items-center gap-2">
                  <FiCalendar className="text-sm" />
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-heading leading-snug">
                  <Link href={post.link} className="hover:text-main transition-colors">
                    {post.title}
                  </Link>
                </h3>

                <ul className="flex items-center gap-4 mb-3">
                  <li className="flex items-center gap-1.5 text-xs text-body">
                    <FiUser className="text-main" />
                    <Link href="#" className="text-main hover:text-heading">
                      {post.author}
                    </Link>
                  </li>
                </ul>

                <p className="text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <Link
                  href={post.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-heading hover:text-main group/link transition-colors"
                >
                  Read More
                  <FiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
