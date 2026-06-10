import React from "react";

import {
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

function ProjectHeader({
  searchTerm,
  setSearchTerm,
  onCreateProject,
}) {
  return (
    <div
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
        mb-8
      "
    >
     
      <div>
        <h1
          className="
            text-3xl
            font-bold
            text-slate-800
          "
        >
          Projects
        </h1>

        <p
          className="
            text-slate-500
            mt-1
            text-sm
          "
        >
          Manage and track all your
          projects in one place.
        </p>
      </div>

      
      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-3
          w-full
          lg:w-auto
        "
      >
        

        <TextField
          size="small"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(
              e.target.value
            )
          }
          sx={{
            minWidth: {
              xs: "100%",
              sm: "280px",
            },

            "& .MuiOutlinedInput-root":
              {
                borderRadius:
                  "14px",
                backgroundColor:
                  "#ffffff",
              },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{
                    color:
                      "#94A3B8",
                  }}
                />
              </InputAdornment>
            ),
          }}
        />

        

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={
            onCreateProject
          }
          sx={{
            borderRadius: "14px",
            textTransform:
              "none",
            px: 3,
            py: 1.2,
            fontWeight: 600,
            backgroundColor:
              "#60A5FA",
            minWidth: "180px",

            boxShadow:
              "0 8px 20px rgba(96,165,250,0.35)",

            "&:hover": {
              backgroundColor:
                "#3B82F6",
            },
          }}
        >
          New Project
        </Button>
      </div>
    </div>
  );
}

export default ProjectHeader;