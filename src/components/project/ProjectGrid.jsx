import React from "react";

import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {

  
  if (!projects || projects.length === 0) {
    return (
      <div
        className="
          bg-white
          rounded-3xl
          border
          border-slate-200
          shadow-sm
          p-16
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <div
          className="
            w-20
            h-20
            rounded-full
            bg-sky-50
            flex
            items-center
            justify-center
            mb-5
          "
        >
          <span className="text-4xl">
            📁
          </span>
        </div>

        <h2
          className="
            text-2xl
            font-bold
            text-slate-800
          "
        >
          No Projects Found
        </h2>

        <p
          className="
            text-slate-500
            mt-2
            text-center
            max-w-sm
          "
        >
          You haven't created any
          projects yet. Click on
          <span className="font-semibold">
            {" "}New Project{" "}
          </span>
          to get started.
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;