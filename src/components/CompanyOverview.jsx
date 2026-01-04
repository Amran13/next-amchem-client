import React from 'react';

const CompanyOverview = () => {
    return (
        <section className="w-full bg-gray-50 py-20 px-4">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <p className="text-xs font-semibold tracking-widest text-gray-500">
                        COMPANY OVERVIEW
                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Making veterinary pharmaceutical solutions better for everyone
                    </h2>

                    <p className="text-gray-600 leading-relaxed">
                        Amchem B.V. Holland manufactures veterinary pharmaceutical products for
                        the animal feed industry. Headquartered in the Netherlands since 1985,
                        the company operates under GMP certification and ISO 9001:2015 quality
                        management systems.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        Manufacturing facilities produce feed-grade additives and premixes
                        using precision blending technology, comprehensive quality control, and
                        validated analytical methods. Production capacity serves both
                        commercial-scale feed manufacturers and specialty applications requiring
                        custom formulations.
                    </p>

                    <p className="text-gray-600 leading-relaxed">
                        The technical team comprises veterinarians, animal nutritionists,
                        pharmaceutical scientists, and quality assurance specialists providing
                        product development, regulatory affairs, and customer technical support
                        across multiple species and production systems.
                    </p>
                </div>
            </section>
    );
};

export default CompanyOverview;