import CareerApplicationForm from '@/components/CareerApplicationForm';

import ContactForm from '@/components/Contact/ContactForm';
import ContactFrom from '@/components/Contact/ContactForm';
import HeadQuarters from '@/components/HeadQuarters';
import PageBanner from '@/components/PageBanner';
import React from 'react';

const page = () => {
    return (
        <div>
            {/* <HeadQuarters></HeadQuarters> */}
            <ContactForm></ContactForm>
            <CareerApplicationForm></CareerApplicationForm>
            
        </div>
    );
};

export default page;