"use client";
import React from "react";
import { FaLeaf, FaTruck, FaSeedling, FaHandshake } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaSeedling className="text-4xl text-[#213785]" />,
    title: "High-Quality Feed",
    description:
      "We provide nutrient-rich, scientifically balanced cow feed designed to ensure maximum growth and milk production.",
  },
  {
    id: 2,
    icon: <FaTruck className="text-4xl text-[#213785]" />,
    title: "On-Time Delivery",
    description:
      "Our distribution team ensures quick and safe delivery to farms, keeping your livestock nutrition on schedule.",
  },
  {
    id: 3,
    icon: <FaLeaf className="text-4xl text-[#213785]" />,
    title: "Natural Ingredients",
    description:
      "All our feeds are made with natural ingredients and zero harmful chemicals for healthy and happy cattle.",
  },
  {
    id: 4,
    icon: <FaHandshake className="text-4xl text-[#213785]" />,
    title: "Farm Partnership",
    description:
      "We work hand-in-hand with farmers to create sustainable, profitable, and productive farming solutions.",
  },
];

const Service = () => {
  return (
    <section className="py-20 bg-[#0f0f0f] text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h5 className="text-sm uppercase tracking-widest text-[#b8d129] font-semibold mb-2">
              Our Services
            </h5>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              What We Do
            </h2>
            <div className="w-16 h-[2px] bg-[#b8d129] mb-6"></div>
            <p className="text-gray-300 leading-relaxed">
              From high-quality cow feed to on-time delivery and farm support,
              we provide complete solutions to boost your farm’s productivity
              and growth.
            </p>
            <button className="mt-8 border-2 border-[#b8d129] text-[#b8d129] px-6 py-2 font-semibold rounded hover:bg-[#b8d129] hover:text-black transition">
              View All Services
            </button>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-[#b8d129] p-6 rounded-xl hover:bg-[#1a1a1a] transition-all duration-300 group"
              >
                <div className="mb-4 inline-block p-3 border-2 border-[#b8d129] rounded-md group-hover:bg-[#b8d129] group-hover:text-black transition">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#b8d129]">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
