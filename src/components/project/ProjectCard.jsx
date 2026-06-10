import React from "react";

import {
  Avatar,
  AvatarGroup,
  LinearProgress,
  IconButton,
} from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import ProjectStatus from "./ProjectStatus";

function ProjectCard({ project }) {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        border
        border-slate-200
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        overflow-hidden
      "
    >
      

      <div
        className="h-1.5"
        style={{
          backgroundColor:
            project.color ||
            "#60A5FA",
        }}
      />

      <div className="p-6">

       

        <div className="flex justify-between items-start">

          <div>

            <h3
              className="
                text-xl
                font-bold
                text-slate-800
              "
            >
              {project.title}
            </h3>

            <p
              className="
                text-sm
                text-slate-500
                mt-1
              "
            >
              {project.category}
            </p>

          </div>

          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>

        </div>

        

        <p
          className="
            text-sm
            text-slate-600
            leading-6
            mt-5
            min-h-[72px]
          "
        >
          {project.description}
        </p>

       

        <div className="flex items-center gap-3 mt-5">

          <ProjectStatus
            status={
              project.status
            }
          />

          <span
            className="
              px-3
              py-1
              rounded-full
              bg-orange-100
              text-orange-700
              text-xs
              font-semibold
            "
          >
            {project.priority}
          </span>

        </div>

        

        <div className="mt-6">

          <div className="flex justify-between mb-2">

            <span className="text-sm text-slate-600">
              Progress
            </span>

            <span className="text-sm font-semibold text-slate-800">
              {project.progress || 0}%
            </span>

          </div>

          <LinearProgress
            variant="determinate"
            value={
              project.progress || 0
            }
            sx={{
              height: 8,
              borderRadius: 20,
              backgroundColor:
                "#E2E8F0",

              "& .MuiLinearProgress-bar":
                {
                  backgroundColor:
                    project.color ||
                    "#60A5FA",
                },
            }}
          />

        </div>

        

        <p
          className="
            text-sm
            text-slate-500
            mt-3
          "
        >
          {project.completedTasks || 0}
          /
          {project.totalTasks || 0}
          {" "}tasks completed
        </p>

        

        <div
          className="
            flex
            justify-between
            items-center
            mt-6
          "
        >

          

          <div>

            <p
              className="
                text-xs
                text-slate-400
                mb-2
              "
            >
              Team
            </p>

            <AvatarGroup
              max={4}
              sx={{
                "& .MuiAvatar-root":
                  {
                    width: 32,
                    height: 32,
                    fontSize: 12,
                  },
              }}
            >
              {(project.team || []).map(
                (
                  member,
                  index
                ) => (
                  <Avatar
                    key={index}
                    src={member}
                  >
                    {!member
                      ? "U"
                      : ""}
                  </Avatar>
                )
              )}
            </AvatarGroup>

          </div>

         

          <div className="text-right">

            <p
              className="
                text-xs
                text-slate-400
              "
            >
              Due
            </p>

            <p
              className="
                text-sm
                font-semibold
                text-slate-700
              "
            >
              {project.dueDate ||
                "N/A"}
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectCard;