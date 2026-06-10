import React, { useState } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { revenueData } from "../../data/dashboardData";
import CustomChartTooltip from "./CustomChartTooltip";

function RevenueChart() {
  const [activeTab, setActiveTab] = useState("6M");

  const tabs = ["1M", "3M", "6M", "All"];

  return (
    <div className="xl:col-span-2 bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6">
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-lg font-semibold text-[#0F172A]">
            Revenue Overview
          </h2>

          <p className="text-sm text-[#64748B] mt-1">
            Revenue performance & targets
          </p>
        </div>

        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#3B82F6] text-white"
                  : "bg-[#E5E7EB] text-[#64748B]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={340}>
        <AreaChart data={revenueData}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#E5E7EB" vertical={false} />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#64748B", fontSize: 12 }}
            tickFormatter={(value) => `₹${value / 1000}K`}
          />

          <Tooltip content={<CustomChartTooltip />} />

          <Area
            dataKey="target"
            stroke="#CBD5E1"
            strokeDasharray="4 4"
            fill="none"
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3B82F6"
            strokeWidth={2.5}
            fill="url(#revenueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="bg-[#E5E7EB] rounded-xl p-4">
          <p className="text-xs text-[#64748B]">
            Total Revenue
          </p>

          <h3 className="text-lg font-semibold text-[#0F172A] mt-1">
            ₹24.8L
          </h3>
        </div>

        <div className="bg-[#E5E7EB] rounded-xl p-4">
          <p className="text-xs text-[#64748B]">
            Growth Rate
          </p>

          <h3 className="text-lg font-semibold text-[#3B82F6] mt-1">
            +18.4%
          </h3>
        </div>

        <div className="bg-[#E5E7EB] rounded-xl p-4">
          <p className="text-xs text-[#64748B]">
            Target Achievement
          </p>

          <h3 className="text-lg font-semibold text-[#3B82F6] mt-1">
            112%
          </h3>
        </div>
      </div>
    </div>
  );
}

export default RevenueChart;