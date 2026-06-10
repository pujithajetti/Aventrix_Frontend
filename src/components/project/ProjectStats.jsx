import React from "react";

import {
  Folder,
  HourglassEmpty,
  CheckCircle,
  TrendingUp,
} from "@mui/icons-material";

const StatCard = ({
  icon,
  title,
  value,
  subtitle,
  iconBg,
  iconColor,
}) => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-sm
      border
      border-slate-100
      hover:shadow-xl
      hover:-translate-y-1
      transition-all
      duration-300
    "
    >
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500 font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h2>

          <p className="text-xs text-slate-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${iconBg}`}
        >
          {React.cloneElement(icon, {
            sx: {
              color: iconColor,
              fontSize: 30,
            },
          })}
        </div>
      </div>
    </div>
  );
};

const ProjectStats = ({
  projects,
}) => {
  const totalProjects =
    projects.length;

  const inProgress =
    projects.filter(
      (project) =>
        project.status ===
        "In Progress"
    ).length;

  const completed =
    projects.filter(
      (project) =>
        project.status ===
        "Completed"
    ).length;

  const averageProgress =
    Math.round(
      projects.reduce(
        (sum, project) =>
          sum + project.progress,
        0
      ) / projects.length
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      <StatCard
        title="Total Projects"
        value={totalProjects}
        subtitle="All projects"
        icon={<Folder />}
        iconBg="bg-blue-50"
        iconColor="#60A5FA"
      />

      <StatCard
        title="In Progress"
        value={inProgress}
        subtitle="Currently active"
        icon={<HourglassEmpty />}
        iconBg="bg-orange-50"
        iconColor="#F59E0B"
      />

      <StatCard
        title="Completed"
        value={completed}
        subtitle="Successfully finished"
        icon={<CheckCircle />}
        iconBg="bg-green-50"
        iconColor="#22C55E"
      />

      <StatCard
        title="Average Progress"
        value={`${averageProgress}%`}
        subtitle="Across all projects"
        icon={<TrendingUp />}
        iconBg="bg-purple-50"
        iconColor="#8B5CF6"
      />

    </div>
  );
};

export default ProjectStats;