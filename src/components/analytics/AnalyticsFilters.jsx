import React from "react";

import {
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DownloadIcon from "@mui/icons-material/Download";

function AnalyticsFilters() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-slate-200
        p-4
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-4
      "
    >
      <div
        className="
          flex
          flex-wrap
          items-center
          gap-3
        "
      >
        <FilterAltIcon className="text-slate-500" />

        <FormControl size="small">
          <Select
            defaultValue="7days"
            sx={{
              minWidth: 140,
              borderRadius: "12px",
            }}
          >
            <MenuItem value="7days">
              Last 7 Days
            </MenuItem>

            <MenuItem value="30days">
              Last 30 Days
            </MenuItem>

            <MenuItem value="90days">
              Last 90 Days
            </MenuItem>

            <MenuItem value="year">
              This Year
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small">
          <Select
            defaultValue="all"
            sx={{
              minWidth: 140,
              borderRadius: "12px",
            }}
          >
            <MenuItem value="all">
              All Categories
            </MenuItem>

            <MenuItem value="sales">
              Sales
            </MenuItem>

            <MenuItem value="users">
              Users
            </MenuItem>

            <MenuItem value="revenue">
              Revenue
            </MenuItem>
          </Select>
        </FormControl>
      </div>

      <Button
        variant="contained"
        startIcon={<DownloadIcon />}
        sx={{
          borderRadius: "12px",
          textTransform: "none",
          backgroundColor: "#0A1F44",
          "&:hover": {
            backgroundColor: "#081731",
          },
        }}
      >
        Export Report
      </Button>
    </div>
  );
}

export default AnalyticsFilters;