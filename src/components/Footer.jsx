import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section>
      <footer className="text-gray-300 bg-[#0A1F44]">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10">
              <div className="flex md:justify-start justify-center items-center gap-3 mb-4">
                <img
                  src="/assets/logo.jpeg"
                  alt="Aventrix Logo"
                  onClick={() => handleSectionNavigation("home")}
                  className="w-14 h-14 rounded-full object-cover cursor-pointer"
                />

                <h1
                  onClick={() => handleSectionNavigation("home")}
                  className="text-2xl font-bold text-white cursor-pointer"
                >
                  Aventrix
                </h1>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm">
                Empowering businesses with AI-driven digital transformation,
                cloud engineering, and innovative technology solutions.
              </p>
            </div>

            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-white tracking-widest text-sm mb-4">
                COMPANY
              </h2>

              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    onClick={() => handleSectionNavigation("home")}
                    className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => handleSectionNavigation("features")}
                    className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  >
                    Features
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => handleSectionNavigation("about")}
                    className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => handleSectionNavigation("services")}
                    className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  >
                    Services
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-white tracking-widest text-sm mb-4">
                TECHNOLOGY
              </h2>

              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a className="hover:text-blue-400 transition duration-300 cursor-pointer">
                    Custom IT Services
                  </a>
                </li>

                <li>
                  <a className="hover:text-blue-400 transition duration-300 cursor-pointer">
                    App Development
                  </a>
                </li>

                <li>
                  <a className="hover:text-blue-400 transition duration-300 cursor-pointer">
                    E-Governance Expertise
                  </a>
                </li>

                <li>
                  <a className="hover:text-blue-400 transition duration-300 cursor-pointer">
                    AI Tools & Integration
                  </a>
                </li>

                <li>
                  <a className="hover:text-blue-400 transition duration-300 cursor-pointer">
                    Industrial Automation
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
              <h2 className="font-semibold text-white tracking-widest text-sm mb-4">
                SECTIONS
              </h2>

              <nav className="list-none mb-10 space-y-2">
                <li>
                  <a
                    onClick={() => handleSectionNavigation("services")}
                    className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => handleSectionNavigation("testimonials")}
                    className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  >
                    Testimonials
                  </a>
                </li>

                <li>
                  <a
                    onClick={() => navigate("/contact")}
                    className="hover:text-blue-400 transition duration-300 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-full w-full px-4">
              <h2 className="font-semibold text-white tracking-widest text-sm mb-4">
                NEWSLETTER
              </h2>

              <p className="text-gray-400 mb-4 leading-relaxed">
                Stay updated with our latest technologies, AI innovations, and
                digital transformation services.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/10 border border-white/10 rounded-lg py-3 px-4 text-white placeholder:text-gray-400 outline-none focus:border-blue-500"
                />

                <button className="bg-blue-600 hover:bg-blue-500 transition duration-300 text-white px-6 py-3 rounded-lg font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto py-6 px-5 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2026 Aventrix Technologies. All Rights Reserved.
            </p>

            <div className="flex mt-4 sm:mt-0 gap-5">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <XIcon />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;