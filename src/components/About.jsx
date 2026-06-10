import React from "react";

const About = () => {
  return (
    <div
      className="flex justify-center py-16 px-4 sm:px-6 bg-[#0A1F44]"
      id="about"
    >
      <div className="w-full max-w-4xl flex flex-col items-center text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 text-[#0A1F44]">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          About Us
        </h1>

        <h2 className="text-lg md:text-2xl font-semibold text-blue-400 mb-6">
          Driving Innovation Through Technology
        </h2>

        <p className="text-gray-300 mb-12 leading-relaxed">
          Aventrix is a technology-driven company focused on delivering modern
          digital solutions for businesses across industries. From cloud
          engineering and AI integration to enterprise software and scalable web
          applications, we help organizations transform ideas into powerful
          digital experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="border-t-4 border-blue-500 pt-4 bg-white/5 rounded-xl p-4">
            <h2 className="text-xl font-bold text-white">10+ Years</h2>
            <p className="text-gray-300 text-sm">
              delivering innovative technology solutions
            </p>
          </div>

          <div className="border-t-4 border-blue-500 pt-4 bg-white/5 rounded-xl p-4">
            <h2 className="text-xl font-bold text-white">50+ Clients</h2>
            <p className="text-gray-300 text-sm">
              trusted us for scalable digital transformation
            </p>
          </div>

          <div className="border-t-4 border-blue-500 pt-4 bg-white/5 rounded-xl p-4">
            <h2 className="text-xl font-bold text-white">100+ Projects</h2>
            <p className="text-gray-300 text-sm">
              successfully completed across multiple domains
            </p>
          </div>

          <div className="border-t-4 border-blue-500 pt-4 bg-white/5 rounded-xl p-4">
            <h2 className="text-xl font-bold text-white">99% Success</h2>
            <p className="text-gray-300 text-sm">
              reflecting our commitment to client satisfaction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;