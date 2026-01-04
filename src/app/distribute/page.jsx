import DistributorApplication from '@/components/DistrubuteWithUs/DistributorApplication';
import DistributorRequirements from '@/components/DistrubuteWithUs/DistributorRequirements';
import RegistrationProcess from '@/components/DistrubuteWithUs/RegistrationProcess';
import WhyDistributeWithUs from '@/components/DistrubuteWithUs/WhyDistributeWithUs';
import React from 'react';

const page = () => {
    return (
        <div>
            <WhyDistributeWithUs></WhyDistributeWithUs>
            <DistributorRequirements></DistributorRequirements>
            <RegistrationProcess></RegistrationProcess>
            <DistributorApplication></DistributorApplication>
        </div>
    );
};

export default page;