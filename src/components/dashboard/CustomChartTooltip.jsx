import React from "react";

function CustomChartTooltip({
  active,
  payload,
  label,
}) {
  if (
    !active ||
    !payload ||
    payload.length === 0
  ) {
    return null;
  }

  const revenue =
    payload.find(
      (item) => item.dataKey === "revenue"
    )?.value || 0;

  const target =
    payload.find(
      (item) => item.dataKey === "target"
    )?.value || 0;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-4 min-w-[180px]">
      <p className="text-sm text-slate-500 mb-2">
        {label}
      </p>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-slate-500">
            Revenue
          </span>

          <span className="font-bold text-blue-600">
            ₹{revenue.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-500">
            Target
          </span>

          <span className="font-semibold text-slate-700">
            ₹{target.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CustomChartTooltip;