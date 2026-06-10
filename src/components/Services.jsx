import React from "react";

const Services = () => {
  return (
    <section className="text-gray-600 body-font bg-white" id="services">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-16">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-[#0A1F44]">
            Services
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Aventrix delivers advanced digital transformation services powered
            by AI, cloud engineering, automation, enterprise platforms, and
            scalable modern technologies.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-80 overflow-hidden rounded-2xl shadow-lg group">
              <img
                alt="Digital Engineering"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              />

              <div className="px-8 py-10 relative z-10 w-full bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  Digital & Cloud Engineering
                </h1>

                <p className="leading-relaxed text-gray-200">
                  AI-driven cloud-native engineering solutions for scalable,
                  secure, and high-performance digital transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-80 overflow-hidden rounded-2xl shadow-lg group">
              <img
                alt="Data and AI"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
              />

              <div className="px-8 py-10 relative z-10 w-full bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  Data & AI
                </h1>

                <p className="leading-relaxed text-gray-200">
                  Unlock business intelligence, predictive analytics,
                  automation, and AI-powered decision making.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-80 overflow-hidden rounded-2xl shadow-lg group">
              <img
                alt="Industry"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop"
              />

              <div className="px-8 py-10 relative z-10 w-full bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  Connectivity & Industry X.0
                </h1>

                <p className="leading-relaxed text-gray-200">
                  Smart factories, IoT systems, secure networking, and
                  industrial automation solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-80 overflow-hidden rounded-2xl shadow-lg group">
              <img
                alt="Managed Services"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              />

              <div className="px-8 py-10 relative z-10 w-full bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  Product Lifecycle & Managed Services
                </h1>

                <p className="leading-relaxed text-gray-200">
                  Optimize systems, infrastructure, and enterprise operations
                  using AI-driven lifecycle management.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-80 overflow-hidden rounded-2xl shadow-lg group">
              <img
                alt="AI Integration"
                className="absolute inset-0 w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop"
              />

              <div className="px-8 py-10 relative z-10 w-full bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center">
                <h1 className="title-font text-xl font-bold text-white mb-3">
                  AI Tools & Integration
                </h1>

                <p className="leading-relaxed text-gray-200">
                  Chatbots, generative AI, computer vision, voice systems, and
                  intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;