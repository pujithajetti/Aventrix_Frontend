import React from "react";

function ProjectStatus({ status }) {
  const getStatusStyles = () => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";

      case "In Progress":
        return "bg-blue-100 text-blue-700";

      case "Planning":
        return "bg-slate-100 text-slate-700";

      case "On Hold":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-semibold
        ${getStatusStyles()}
      `}
    >
      {status}
    </span>
  );
}

export default ProjectStatus;