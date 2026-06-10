import React from "react";

function CustomChartTooltip({
  active,
  payload,
  label,
}) {
  if (
    !active ||
    !payload ||
    !payload.length
  ) {
    return null;
  }

  return (
    <div
      className="
        bg-white
        border
        border-slate-200
        rounded-xl
        shadow-lg
        px-4
        py-3
      "
    >
      <p
        className="
          text-xs
          text-slate-500
          mb-1
        "
      >
        {label}
      </p>

      <h4
        className="
          text-lg
          font-bold
          text-slate-800
        "
      >
        ₹
        {payload[0].value.toLocaleString()}
      </h4>
    </div>
  );
}

export default CustomChartTooltip;