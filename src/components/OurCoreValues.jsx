// components/FeatureGridPremium.jsx

export default function OurCoreValues() {
  const features = [
    {
      title: "Scientific Excellence",
      icon: "/success.png",
    },
    {
      title: "Quality Assurance",
      icon: "/high-quality.png",
    },
    {
      title: "Innovation and Research",
      icon: "/innovation.png",
    },
    {
      title: "Customer Partnership",
      icon: "/partnership.png",
    },
    {
      title: "Environmental Responsibility",
      icon: "/environment.png",
    },
    {
      title: "Regulatory Compliance",
      icon: "/compilance.png",
    },
  ];

  return (
    <section className="py-16 bg-[#F2F4F3]">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl uppercase text-[#00116E] font-bold">
            Our Core Values
          </h2>
        </div>

        {/* Grid wrapper */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">

            {features.map((f, i) => (
              <div
                key={i}
                className={`
                  p-6 flex flex-col items-center justify-center
                  border-gray-200
                  ${i < 3 ? "border-b" : ""}
                  ${i % 3 !== 2 ? "md:border-r" : ""}
                  h-40
                `}
              >
                {/* Large professional icon */}
                <div className="w-20 h-20 flex items-center justify-center mb-3">
                  <img
                    src={f.icon}
                    alt="feature icon"
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-lg font-semibold text-center">{f.title}</h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
