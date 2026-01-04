import ContractManufacturing from "@/components/Cooperation/ContractManufacturing";
import ResearchCollaborationSection from "@/components/Cooperation/ResearchCollaborationSection";
import TechnologyTransferSection from "@/components/Cooperation/TechnologyTransferSection";
import React from "react";

const Cooperation = () => {
  return (
    <section className="pb-16 bg-base-100">
      <div className="mx-auto px-4 text-base-content leading-relaxed">
        <ResearchCollaborationSection></ResearchCollaborationSection>
        <ContractManufacturing></ContractManufacturing>
        <TechnologyTransferSection></TechnologyTransferSection>
      </div>

    </section>
  );
};

export default Cooperation;
