import Link from "next/link";
import React from "react";

const DistributorApplication = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-4xl mx-auto px-4 text-base-content leading-relaxed">
        <h2 className="text-3xl font-bold  mb-6">
          Distributor Application
        </h2>

        <p className="mb-4">
          Online application form available at:{" "}
          <Link href="/contact">
          <span className="hover:underline text-primary">
            Contact Page
          </span>
          </Link>
        </p>

        
      </div>
    </section>
  );
};

export default DistributorApplication;
