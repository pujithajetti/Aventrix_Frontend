import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import NavBar from "./NavBar";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/assets/hero-image.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <NavBar />
      </div>

      <div className="relative z-0 flex items-center justify-center h-full px-4">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl text-center p-8 md:p-10 w-full max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4 whitespace-pre-line">
            Empowering Businesses
            <br />
            With Smart Technology
          </h1>

          <p className="text-gray-300 text-sm md:text-lg mb-8 max-w-2xl mx-auto">
            Aventrix delivers innovative digital solutions, cloud services, AI
            integration, and scalable software experiences for modern
            enterprises.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={() => navigate("/signup")}
              variant="contained"
              sx={{
                background: "linear-gradient(135deg,#2563EB,#3B82F6)",
                padding: "10px 24px",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontWeight: "bold",

                "&:hover": {
                  background: "linear-gradient(135deg,#1D4ED8,#2563EB)",
                },
              }}
            >
              Get Started
            </Button>

            <Button
              onClick={() => navigate("/contact")}
              variant="contained"
              sx={{
                background: "linear-gradient(135deg,#2563EB,#3B82F6)",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontWeight: "bold",

                "&:hover": {
                  background: "linear-gradient(135deg,#1D4ED8,#2563EB)",
                },
              }}
            >
              Contact Aventrix
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;