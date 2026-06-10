import React from "react";
import Typography from "@mui/material/Typography";

import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";
import FourthCard from "./FourthCard";
import FifthCard from "./FifthCard";

const MainCard = () => {
  return (
    <section id="features" className="px-6 py-16">
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 6,
          color: "#0A1F44",
        }}
      >
        Features
      </Typography>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-8
          place-items-center
        "
      >
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
        <FifthCard />
      </div>
    </section>
  );
};

export default MainCard;