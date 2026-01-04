import AntimicrobialStewardship from '@/components/Quality&Safety/AntimicrobialStewardship';
import EnvironmentalResponsibility from '@/components/Quality&Safety/EnvironmentalResponsibility';
import GoodManufacturingPractices from '@/components/Quality&Safety/GoodManufacturingPractices';
import ProductSafety from '@/components/Quality&Safety/ProductSafety';
import QualityManagement from '@/components/Quality&Safety/QualityManagement';
import React from 'react';

const page = () => {
    return (
        <div>
            <QualityManagement></QualityManagement>
            <GoodManufacturingPractices></GoodManufacturingPractices>
            <ProductSafety></ProductSafety>
            <AntimicrobialStewardship></AntimicrobialStewardship>
            <EnvironmentalResponsibility></EnvironmentalResponsibility>
        </div>
    );
};

export default page;