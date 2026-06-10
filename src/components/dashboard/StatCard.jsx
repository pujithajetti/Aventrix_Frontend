import React from "react";
import {
  TrendingUp,
  TrendingDown,
  MoreVert,
} from "@mui/icons-material";

import {
  IconButton,
  Tooltip,
} from "@mui/material";

function StatCard({
  icon,
  label,
  value,
  change,
  positive,
}) {
  return (
    <div className="
      bg-white
      rounded-2xl
      p-6
      border
      border-[#E5E7EB]
      shadow-sm
      hover:shadow-md
      transition-all
      duration-200
    ">
      <div className="flex justify-between items-start">
        <div className="
          w-12
          h-12
          rounded-xl
          flex
          items-center
          justify-center
          bg-[#E5E7EB]
          text-[#3B82F6]
        ">
          {icon}
        </div>

        <Tooltip title="More">
          <IconButton size="small">
            <MoreVert sx={{ color: "#64748B" }} />
          </IconButton>
        </Tooltip>
      </div>

      <div className="mt-5">
        <p className="text-sm text-[#64748B]">
          {label}
        </p>

        <h2 className="text-2xl font-semibold text-[#0F172A] mt-1">
          {value}
        </h2>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {positive ? (
          <TrendingUp sx={{ color: "#3B82F6", fontSize: 18 }} />
        ) : (
          <TrendingDown sx={{ color: "#3B82F6", fontSize: 18 }} />
        )}

        <span
          className="text-sm font-medium text-[#3B82F6]"
        >
          {change}
        </span>

        <span className="text-xs text-[#64748B]">
          this month
        </span>
      </div>
    </div>
  );
}

export default StatCard;