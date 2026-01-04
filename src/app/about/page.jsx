import Vision from '@/components/About/Vision';
import CareerOpportunities from '@/components/CareerOpportunities';
import CompanyHistory from '@/components/CompanyHistory';
import CompanyOverview from '@/components/CompanyOverview';

import Faq from '@/components/Faq';
import Milestone from '@/components/Milestone';
import PageBanner from '@/components/PageBanner';
import ProductionOperators from '@/components/ProductionOperators';
import ProfessionalPositions from '@/components/ProfessionalPositions';
import TimelineHistory from '@/components/TimelineHistory';
import WhatMakesUsDifferentCards from '@/components/WhatMakesUsDifferent';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* <PageBanner title="About Our Company" description="We provide quality products with a focus on natural ingredients" ></PageBanner> */}
            <CompanyOverview></CompanyOverview>
            <Vision></Vision>
            <section className="bg-[#213785] text-white">
                <TimelineHistory />
            </section>
            <Milestone></Milestone>
            <WhatMakesUsDifferentCards></WhatMakesUsDifferentCards>
            <CareerOpportunities></CareerOpportunities>
            <ProfessionalPositions></ProfessionalPositions>
            <ProductionOperators></ProductionOperators>
            <section className="bg-[#f7f8f2]">
                {/* <Faq></Faq> */}

            </section>
        </div>
    );
};

export default page;