import React from "react";
import { Box, Typography } from "@mui/material";
import WavingHandIcon from "@mui/icons-material/WavingHand";

function WelcomeCard() {
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const userName = currentUser?.name || "User";

  return (
    <Box
      sx={{
        background:
          "linear-gradient(135deg,#0F172A 0%, #1E3A8A 100%)",
        borderRadius: "24px",
        p: { xs: 3, md: 5 },
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 3, 
        boxShadow: "0 20px 40px rgba(15,23,42,.15)",
      }}
    >
      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            mb: 1,
          }}
        >
          {getGreeting()}, {userName}
          <WavingHandIcon
            sx={{
              ml: 1,
              color: "#FBBF24",
            }}
          />
        </Typography>

        <Typography
          sx={{
            color: "rgba(255,255,255,.75)",
          }}
        >
          Welcome back to Aventrix Admin Dashboard.
          Here's what's happening today.
        </Typography>
      </Box>
    </Box>
  );
}

export default WelcomeCard;