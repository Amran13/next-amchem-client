"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import faqImage from "../../public/assets/faq-image.jpg"



export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Search filter
  const filteredProducts = products.filter((p) =>
    `${p.name} ${p.category}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const relatedProducts = products.filter(
    (p) =>
      p.category === selectedProduct?.category && p.id !== selectedProduct?.id
  );

  return (
    <div className="w-full lg:max-w-[1280px] mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-center text-[#b8d129] mb-6">
        Our Products
      </h2>

      {/* 🔍 Search Field */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search by product name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-3 rounded-lg border-2 border-[#b8d129] focus:outline-none focus:ring-2 focus:ring-[#b8d129] text-gray-800"
        />
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              className="bg-[#6e8e37] rounded-xl shadow-lg overflow-hidden hover:shadow-[#b8d129]/40 transition-all duration-300"
            >
              <div className="relative h-52 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-[#b8d129] font-semibold mb-3">
                  {product.price}
                </p>
                <button
                  onClick={() => handleViewDetails(product)}
                  className="bg-[#b8d129] text-[#213785] px-4 py-2 rounded-lg font-semibold hover:bg-[#c6d870] transition"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">
          No products found matching your search.
        </p>
      )}

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-white max-w-2xl w-full rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#213785] mb-2">
                  {selectedProduct.name}
                </h3>
                <p className="text-[#b8d129] font-semibold mb-3">
                  {selectedProduct.price}
                </p>
                <p className="text-gray-700 mb-4">
                  {selectedProduct.description}
                </p>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-[#213785] mb-2">
                      Related Products
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {relatedProducts.map((rp) => (
                        <div
                          key={rp.id}
                          className="border rounded-lg p-2 flex flex-col items-center bg-[#f8f8f8] hover:bg-[#f1f1f1] transition cursor-pointer"
                          onClick={() => handleViewDetails(rp)}
                        >
                          <div className="relative h-20 w-full mb-2">
                            <Image
                              src={rp.image}
                              alt={rp.name}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <p className="text-sm font-semibold text-[#213785]">
                            {rp.name}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 text-right">
                  <button
                    onClick={closeModal}
                    className="bg-[#b8d129] text-[#213785] px-4 py-2 rounded-lg font-semibold hover:bg-[#c6d870] transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
