import React from "react";

import StatCard from "./StatCard";

import {
  PeopleAltOutlined,
  CurrencyRupeeOutlined,
  FolderOpenOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";

function StatsSection() {
  const stats = [
    {
      label: "Total Users",
      value: "12,450",
      change: "+12.5%",
      positive: true,
      accent: "bg-violet-50",
      icon: (
        <PeopleAltOutlined
          sx={{
            fontSize: 30,
          }}
          className="text-violet-600"
        />
      ),
    },
    {
      label: "Revenue",
      value: "₹4.2L",
      change: "+8.3%",
      positive: true,
      accent: "bg-emerald-50",
      icon: (
        <CurrencyRupeeOutlined
          sx={{
            fontSize: 30,
          }}
          className="text-emerald-600"
        />
      ),
    },
    {
      label: "Projects",
      value: "48",
      change: "+5 New",
      positive: true,
      accent: "bg-blue-50",
      icon: (
        <FolderOpenOutlined
          sx={{
            fontSize: 30,
          }}
          className="text-blue-600"
        />
      ),
    },
    {
      label: "Growth Rate",
      value: "24%",
      change: "+3.8%",
      positive: true,
      accent: "bg-amber-50",
      icon: (
        <TrendingUpOutlined
          sx={{
            fontSize: 30,
          }}
          className="text-amber-600"
        />
      ),
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-5">
        <h2 className="text-[22px] md:text-[26px] font-bold text-slate-900 tracking-tight">
          Business Overview
        </h2>

        <p className="text-sm md:text-base text-slate-500 mt-1">
          Monitor key business metrics and performance insights.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            {...stat}
          />
        ))}
      </div>
    </section>
  );
}

export default StatsSection;