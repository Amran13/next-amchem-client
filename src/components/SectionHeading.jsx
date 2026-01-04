import React from 'react';

const SectionHeading = ({ heading, description, className = '' }) => {
  return (
    <header className={`text-center space-y-4 mt-16 md:mt-24 mb-8 px-4 ${className}`}>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#213785]">
        {heading}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium">
        {description}
      </p>
      {/* <div className="w-32 sm:w-48 md:w-60 mx-auto h-1 sm:h-1.5 bg-green-700 rounded-lg"></div> */}
    </header>
  );
};

export default SectionHeading;
