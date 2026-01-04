"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import faqImage from "../../public/assets/member.jpg"
const teamMembers = [
  {
    name: "Abdur Rahman",
    designation: "Founder & CEO",
    image: faqImage,
    description:
      "With a vision to revolutionize the feed industry, he founded MooFeed to bring sustainable and nutritious feed to every farm.",
  },
  {
    name: "Tasfia Mysha",
    designation: "Head of Operations",
    image: faqImage,
    description:
      "She leads our operations with precision, ensuring smooth production, delivery, and farmer satisfaction nationwide.",
  },
  {
    name: "Jahidul Islam",
    designation: "Nutrition Specialist",
    image: faqImage,
    description:
      "A dedicated specialist who ensures the perfect nutritional balance in every bag of MooFeed products.",
  },
  {
    name: "Nusrat Jahan",
    designation: "Marketing Director",
    image: faqImage,
    description:
      "She crafts the story of MooFeed, connecting with farmers and customers across the country with heart and purpose.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TeamMember = () => {
  return (
    <div className="bg-[#f7f8f2] py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#213785] uppercase tracking-wide">
          Our Team
        </h2>
        <p className="text-[#213785]/80 max-w-xl mx-auto mt-3 text-lg">
          Meet the people who make MooFeed a trusted name in sustainable farming 🌿
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.name}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden text-center p-6"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-[#b8d129]">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
              />
            </div>
            <h3 className="text-xl font-bold text-[#213785]">{member.name}</h3>
            <p className="text-[#b8d129] font-medium mt-1">{member.designation}</p>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
