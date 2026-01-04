"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Leaf } from "lucide-react";

const ContactCompo = () => {
  return (
    <section className="bg-[#F7FAF3] py-20 px-6 md:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#486B1D]"
        >
          Contact Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-3 leading-relaxed"
        >
          We’d love to hear from you! Reach out to us for inquiries, partnerships, or
          feedback — or visit us at our office.
        </motion.p>
        <Leaf className="mx-auto mt-4 text-[#84B547]" size={24} />
      </div>

      {/* Contact + Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Contact Info & Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-md rounded-2xl p-8 border border-[#E3EDD6]"
        >
          <h3 className="text-xl font-semibold text-[#486B1D] mb-6">
            Get in Touch
          </h3>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-gray-700">
              <MapPin className="text-[#84B547]" size={20} />
              <p>House 12, Road 5, Dhanmondi, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="text-[#84B547]" size={20} />
              <p>+880 1234 567 890</p>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="text-[#84B547]" size={20} />
              <p>info@moofeed.com</p>
            </div>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-[#E3EDD6] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#84B547]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-[#E3EDD6] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#84B547]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-[#E3EDD6] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#84B547]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#84B547] text-white font-semibold py-3 rounded-lg hover:bg-[#6A9B3A] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-md border border-[#E3EDD6]"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.760644896454!2d90.37600477451518!3d23.86725817859154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4a0e3336e3f%3A0x239f9efb901a46b2!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1701549736741!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCompo;
