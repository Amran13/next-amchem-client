import React from 'react';

const PageBanner = ({ title, subtitle, description }) => {
    return (
        <section
            className="relative w-full py-20 text-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/page-banner.jpg')" }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60"></div>


            {/* Content */}
            <div className="relative max-w-4xl mx-auto px-4 text-[#b8d129] font-extrabold">
                <h1 className="text-5xl font-bold mb-3">{title}</h1>

                

                {subtitle && (
                    <h2 className="text-2xl font-semibold text- mb-2">
                        {subtitle}
                    </h2>
                )}

                {description && (
                    <p className="max-w-2xl mx-auto text-gray-200">{description}</p>
                )}
            </div>
        </section>
    );
};

export default PageBanner;