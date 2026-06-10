import React, {
  useState,
} from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

import ProjectHeader from "../components/project/ProjectHeader";
import ProjectFilters from "../components/project/ProjectFilters";
import ProjectGrid from "../components/project/ProjectGrid";
import ProjectForm from "../components/project/ProjectForm";
import ProjectStats from "../components/project/ProjectStats";

import projectData from "../data/projectData";

function Projects() {
  const [projects, setProjects] =
    useState(projectData);

  const [searchTerm, setSearchTerm] =
    useState("");

  const [
    selectedFilter,
    setSelectedFilter,
  ] = useState("All");

  const [openModal, setOpenModal] =
    useState(false);

  
  const handleAddProject = (
    newProject
  ) => {
    setProjects((prev) => [
      newProject,
      ...prev,
    ]);
  };

  
  const filteredProjects =
    projects.filter((project) => {
      const matchesSearch =
        project.title
          .toLowerCase()
          .includes(
            searchTerm.toLowerCase()
          );

      const matchesFilter =
        selectedFilter === "All"
          ? true
          : project.status ===
            selectedFilter;

      return (
        matchesSearch &&
        matchesFilter
      );
    });

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 md:ml-[280px]">
        <Navbar />

        <div className="p-6 space-y-6">

          

          <ProjectHeader
            searchTerm={
              searchTerm
            }
            setSearchTerm={
              setSearchTerm
            }
            onCreateProject={() =>
              setOpenModal(true)
            }
          />

         

          <ProjectStats
            projects={projects}
          />

          

          <ProjectFilters
            selectedFilter={
              selectedFilter
            }
            setSelectedFilter={
              setSelectedFilter
            }
          />

        

          <ProjectGrid
            projects={
              filteredProjects
            }
          />

          

          <ProjectForm
            open={openModal}
            handleClose={() =>
              setOpenModal(false)
            }
            handleAddProject={
              handleAddProject
            }
          />

        </div>
      </div>
    </div>
  );
}

export default Projects;