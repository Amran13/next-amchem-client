"use client";
import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGlobeAmericas, FaTractor, FaUsers } from "react-icons/fa";
import { useRef } from "react";

const stats = [
  {
    id: 1,
    icon: <FaGlobeAmericas className="text-4xl text-[#213785]" />,
    number: 5000,
    label: "Farms Served Worldwide",
  },
  {
    id: 2,
    icon: <FaTractor className="text-4xl text-[#213785]" />,
    number: 1200,
    label: "Partner Farmers",
  },
  {
    id: 3,
    icon: <FaUsers className="text-4xl text-[#213785]" />,
    number: 300,
    label: "Team Members",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Counter = ({ targetNumber, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = targetNumber / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          clearInterval(timer);
          setCount(targetNumber);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, targetNumber]);

  return <span>{count.toLocaleString()}+</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <section className="py-28 bg-[#f8f9f4]" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#213785] uppercase">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Trusted by farmers and partners around the world — we’re growing
            every day with you 🌿
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white rounded-2xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-4xl font-extrabold text-[#213785]">
                <Counter targetNumber={item.number} inView={inView} />
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
