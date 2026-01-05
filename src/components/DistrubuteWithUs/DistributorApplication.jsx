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
          <span className="underline text-primary">
            www.amchem-bv.com/distribution-application
          </span>
        </p>

        <p>
          Contact:{" "}
          <span className="underline text-primary">
            distribution@amchem-bv.com
          </span>{" "}
          +31 [Contact Number]
        </p>
      </div>
    </section>
  );
};

export default DistributorApplication;
