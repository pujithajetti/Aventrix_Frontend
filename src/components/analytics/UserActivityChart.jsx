import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  userActivityData,
} from "../../data/analyticsData";

function UserActivityChart() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-5
      "
    >
      

      <div className="mb-6">
        <h2
          className="
            text-lg
            font-semibold
            text-slate-800
          "
        >
          User Activity
        </h2>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Active users over time
        </p>
      </div>

      

      <ResponsiveContainer
        width="100%"
        height={320}
      >
        <LineChart
          data={userActivityData}
        >
          <CartesianGrid
            stroke="#E2E8F0"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="day"
            tick={{
              fontSize: 12,
            }}
          />

          <YAxis
            tick={{
              fontSize: 12,
            }}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="#2563EB"
            strokeWidth={3}
            dot={{
              r: 4,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserActivityChart;