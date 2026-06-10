import React, { useState } from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  revenueData,
} from "../../data/analyticsData";

import CustomChartTooltip from "./CustomChartTooltip";

function RevenueChart() {
  const [activeTab, setActiveTab] =
    useState("6M");

  const tabs = [
    "1M",
    "3M",
    "6M",
    "All",
  ];

  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-6
        shadow-sm
      "
    >
      

      <div
        className="
          flex
          flex-col
          md:flex-row
          md:items-center
          md:justify-between
          gap-4
          mb-8
        "
      >
        <div>
          <h2
            className="
              text-xl
              font-bold
              text-slate-800
            "
          >
            Revenue Overview
          </h2>

          <p
            className="
              text-sm
              text-slate-500
              mt-1
            "
          >
            Revenue performance and
            targets
          </p>
        </div>

        

        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`
                px-4 py-2
                rounded-xl
                text-sm
                font-medium
                transition-all

                ${
                  activeTab === tab
                    ? "bg-[#0A1F44] text-white"
                    : "bg-slate-100 text-slate-600"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <AreaChart
          data={revenueData}
        >
          <defs>
            <linearGradient
              id="revenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#2563EB"
                stopOpacity={0.25}
              />

              <stop
                offset="95%"
                stopColor="#2563EB"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E2E8F0"
          />

          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            content={
              <CustomChartTooltip />
            }
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#2563EB"
            strokeWidth={3}
            fill="url(#revenueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>

      

      <div
        className="
          flex
          items-center
          gap-6
          mt-6
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <div
            className="
              w-3 h-3
              rounded-full
              bg-blue-600
            "
          />

          <span
            className="
              text-sm
              text-slate-600
            "
          >
            Actual Revenue
          </span>
        </div>

        <div
          className="
            flex
            items-center
            gap-2
          "
        >
          <div
            className="
              w-3 h-3
              rounded-full
              bg-slate-300
            "
          />

          <span
            className="
              text-sm
              text-slate-500
            "
          >
            Revenue Target
          </span>
        </div>
      </div>

     

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mt-8
        "
      >
        <div
          className="
            bg-slate-50
            rounded-2xl
            p-4
          "
        >
          <p
            className="
              text-xs
              text-slate-500
            "
          >
            Total Revenue
          </p>

          <h3
            className="
              text-lg
              font-bold
              text-slate-800
              mt-1
            "
          >
            ₹24.8L
          </h3>
        </div>

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-4
          "
        >
          <p
            className="
              text-xs
              text-slate-500
            "
          >
            Growth Rate
          </p>

          <h3
            className="
              text-lg
              font-bold
              text-emerald-600
              mt-1
            "
          >
            +18.4%
          </h3>
        </div>

        <div
          className="
            bg-slate-50
            rounded-2xl
            p-4
          "
        >
          <p
            className="
              text-xs
              text-slate-500
            "
          >
            Target Achievement
          </p>

          <h3
            className="
              text-lg
              font-bold
              text-blue-600
              mt-1
            "
          >
            112%
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RevenueChart;