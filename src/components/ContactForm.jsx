"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactForm = () => {
  return (
    <section className="bg-base-100 py-16 px-4 md:px-8 shadow-none">
      {/* Heading */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#213785] uppercase">
          Contact Us
        </h2>
        <p className="text-[#213785]/80 mt-3 max-w-xl mx-auto text-lg">
          Have a question or want to work with us? Our team at <span className="font-semibold text-[#212E84]">AMCHEM</span> is ready to help!
        </p>
      </motion.div>

      {/* Form Container */}
      <motion.form
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        onSubmit={(e) => e.preventDefault()}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-[#213785] mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#b8d129]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#213785] mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#b8d129]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[#213785] mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#b8d129]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#213785] mb-1">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#b8d129]"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#213785] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#3e541b] transition-all duration-300"
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
};

export default ContactForm;
