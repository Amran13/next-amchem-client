"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CoreProductCategories() {
  const productCategories = [
    {
      name: "Medicated premixes",
      href: "/products/category/medicated-premix",
    },
    {
      name: "Anticoccidial premixes",
      href: "/products/category/anticoccidial-premixes",
    },
    {
      name: "Vitamin–mineral supplements",
      href: "/products/category/vitamin-and-mineral-supplements",
    },
    {
      name: "Mycotoxin binders",
      href: "/products/category/toxin-binders",
    },
    {
      name: "Feed preservation",
      href: "/products/category/feed-preservation",
    },
    {
      name: "pH modifiers",
      href: "/products/category/ph-modifiers",
    },
    {
      name: "Antibiotic growth promoter alternatives",
      href: "/products/category/antibiotic-growth-promoter-alternatives",
    },
  ];
  const row1 = productCategories.slice(0, 4);
  const row2 = productCategories.slice(4);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-5xl font-semibold uppercase text-center"
      >
        Core Product <span className="text-[#00116E]">Categories</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center gap-6"
      >
        {row1.map((c, i) => (
          <motion.div key={i} variants={item}>
            <Link href={c.href}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="w-40 h-40 cursor-pointer rounded-full bg-[#213785] flex items-center justify-center text-center shadow-md"
              >
                <p className="text-white font-semibold text-base px-4">
                  {c.name}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center gap-6"
      >
        {row2.map((c, i) => (
          <motion.div key={i} variants={item}>
            <Link href={c.href}>
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="w-40 h-40 cursor-pointer rounded-full bg-[#213785] flex items-center justify-center text-center shadow-md"
              >
                <p className="text-white font-semibold text-base px-4">
                  {c.name}
                </p>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
