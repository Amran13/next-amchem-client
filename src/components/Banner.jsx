import React from "react";

const Banner = () => {
  return (
    <div className="relative hero min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://media.istockphoto.com/id/1056636768/video/team-of-research-scientists-working-on-computer-with-medical-equipment-analyzing-blood-and.mp4?s=mp4-640x640-is&k=20&c=ihtxG0YvvrpY7zM97XH0vf0nYyLkos5nqE3lcxj2_2M="
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 hero-content text-center text-white">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-7xl text-[#ffffff] font-bold drop-shadow-lg">
            AMCHEM
          </h1>
          <div className=" flex justify-center">
            <p className="mb-5 text-lg text-gray-200 drop-shadow-md">
              Amchem B.V. Holland is a European pharmaceutical manufacturer of veterinary feed additives and medicated premixes for global livestock production. Founded in 1985 in the Netherlands, the company provides science-based nutritional and therapeutic solutions for poultry, swine, cattle, aquaculture, and other animal sectors. Its products are developed from peer-reviewed research and manufactured under GMP and ISO standards, with expert technical support from veterinarians and animal nutritionists.
            </p>
          </div>
          <button className="btn btn-primary shadow-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
