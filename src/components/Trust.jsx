import React from "react";

const technologies = [
  {
    name: "Salesforce",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968914.png",
  },
  {
    name: "Cisco",
    logo: "https://cdn-icons-png.flaticon.com/128/882/882832.png",
  },
  {
    name: "Microsoft Azure",
    logo: "https://cdn-icons-png.flaticon.com/512/873/873107.png",
  },
  {
    name: "Google Cloud",
    logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
  },
  {
    name: "NVIDIA",
    logo: "https://cdn-icons-png.flaticon.com/128/16183/16183638.png",
  },
];

const Trust = () => {
  return (
    <section
      id="features"
      className="py-20 px-5 bg-slate-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
            Trusted By Innovative Companies Worldwide
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with cloud solutions, AI technologies,
            and enterprise-grade digital transformation services.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((technology) => (
            <div
              key={technology.name}
              className="
                bg-white
                border
                border-gray-200
                rounded-2xl
                shadow-sm
                h-40
                flex
                flex-col
                justify-center
                items-center
                gap-4
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              <img
                src={technology.logo}
                alt={technology.name}
                loading="lazy"
                className="w-14 h-14 object-contain"
              />

              <h3 className="font-semibold text-slate-800 text-center">
                {technology.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;