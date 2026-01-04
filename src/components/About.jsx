"use client";
import React from "react";
import { FaLeaf, FaSeedling } from "react-icons/fa";

const AboutSection = () => {
  return (
    <section className="bg-[#0f0f0f] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            src="/assets/faq-image.jpg"
            alt="Farm"
            className="w-full h-full object-cover rounded-lg row-span-2"
          />
          <img
            src="/assets/faq-image.jpg"
            alt="Feed"
            className="w-full h-full object-cover rounded-lg"
          />
          <img
            src="/assets/faq-image.jpg"
            alt="Cattle"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h5 className="uppercase text-[#b8d129] tracking-widest font-semibold mb-2">
            About Feed Cow Ltd
          </h5>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Who We Are?
          </h2>
          <div className="w-16 h-[2px] bg-[#E6EAF3] mb-6"></div>

          <div className="flex flex-wrap gap-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="border border-[#b8d129] p-3 rounded-md text-[#b8d129]">
                <FaSeedling className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Natural Feed</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We produce nutrient-rich, 100% natural cow feed that ensures healthy growth and productivity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="border border-[#b8d129] p-3 rounded-md text-[#b8d129]">
                <FaLeaf className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Sustainable Farming</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Our mission is to build sustainable and profitable farming communities across the country.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Founded in 2012, Feed Cow Ltd is dedicated to delivering quality cattle feed to farmers nationwide.
            We work hand-in-hand with agricultural experts to ensure safe, sustainable, and cost-effective farming.
            Our products help farmers achieve higher yields and healthier livestock.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
