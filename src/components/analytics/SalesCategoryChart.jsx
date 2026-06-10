import React from "react";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import {
  salesCategoryData,
} from "../../data/analyticsData";

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#8B5CF6",
  "#EF4444",
];

function SalesCategoryChart() {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        p-6
        shadow-sm
        h-full
      "
    >
      

      <div className="mb-6">
        <h2
          className="
            text-lg
            font-bold
            text-slate-800
          "
        >
          Sales by Category
        </h2>

        <p
          className="
            text-sm
            text-slate-500
            mt-1
          "
        >
          Revenue distribution across
          business categories
        </p>
      </div>

      

      <div className="h-[260px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={salesCategoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={90}
              paddingAngle={4}
            >
              {salesCategoryData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                    fill={
                      COLORS[
                        index %
                          COLORS.length
                      ]
                    }
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      

      <div className="space-y-3 mt-4">
        {salesCategoryData.map(
          (item, index) => (
            <div
              key={item.name}
              className="
                flex
                items-center
                justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    w-3
                    h-3
                    rounded-full
                  "
                  style={{
                    backgroundColor:
                      COLORS[index],
                  }}
                />

                <span
                  className="
                    text-sm
                    text-slate-700
                    font-medium
                  "
                >
                  {item.name}
                </span>
              </div>

              <span
                className="
                  text-sm
                  font-semibold
                  text-slate-800
                "
              >
                {item.value}%
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default SalesCategoryChart;