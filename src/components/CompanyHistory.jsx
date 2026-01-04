"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import faqImage from "../../public/assets/faq-image.jpg"
const historyData = [
  {
    title: "Our Humble Start",
    description:
      "MooFeed began as a small family farm dedicated to producing fresh, natural feed for our own herd. Our mission was simple: create the most nutritious feed to keep cows healthy and strong.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam ea eos eius aspernatur, tenetur cum atque, aliquam nihil animi error delectus, ex eveniet ducimus nemo facere laborum inventore repellat quisquam optio. Suscipit, ex nam. Placeat, eveniet. Nisi obcaecati doloribus maiores nemo similique voluptatum? Quis facere sapiente velit iste placeat delectus.",
    image: faqImage,
    reverse: false,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const CompanyHistory = () => {
  return (
    <div className="max-w-[1280px] mx-auto py-16 px-4 md:px-8">
      {/* Heading */}
      <div className=" mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#213785] uppercase tracking-wide">
          History
        </h2>
        <p className="text-[#213785]/80 max-w-xl mt-3">
          A journey from a small farm to a trusted national brand 🐄
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-20">
        {historyData.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-x-24 ${item.reverse ? "md:flex-row-reverse" : ""
              }`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={600}
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-[#213785] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CompanyHistory;
