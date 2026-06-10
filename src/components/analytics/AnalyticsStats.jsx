import React from "react";

import {
  Box,
  Typography,
} from "@mui/material";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import { statsData } from "../../data/analyticsData";

function AnalyticsStats() {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-5
        mb-8
      "
    >
      {statsData.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="
              bg-white
              rounded-2xl
              border
              border-slate-200
              p-5
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            

            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Box
                sx={{
                  width: 52,
                  height: 52,
                  borderRadius: "14px",
                  backgroundColor:
                    item.bgColor,

                  display: "flex",
                  alignItems: "center",
                  justifyContent:
                    "center",
                }}
              >
                <Icon
                  sx={{
                    color: item.color,
                    fontSize: 28,
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#10B981",
                }}
              >
                <TrendingUpIcon
                  sx={{
                    fontSize: 18,
                  }}
                />

                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  {item.growth}
                </Typography>
              </Box>
            </Box>

           

            <Typography
              sx={{
                color: "#64748B",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {item.title}
            </Typography>

            

            <Typography
              sx={{
                mt: 1,
                fontWeight: 700,
                color: "#0F172A",

                fontSize: {
                  xs: "24px",
                  md: "28px",
                },
              }}
            >
              {item.value}
            </Typography>

            

            <Typography
              sx={{
                mt: 1,
                color: "#94A3B8",
                fontSize: "13px",
              }}
            >
              Compared to last month
            </Typography>
          </div>
        );
      })}
    </div>
  );
}

export default AnalyticsStats;