import React from "react";

function ProjectFilters({
  selectedFilter,
  setSelectedFilter,
}) {
  const filters = [
    "All",
    "Active",
    "Completed",
    "Pending",
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() =>
            setSelectedFilter(filter)
          }
          className={`
            px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
            ${
              selectedFilter === filter
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

export default ProjectFilters;