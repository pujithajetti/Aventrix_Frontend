import React, { useMemo, useRef } from "react";

import {
  Avatar,
  Chip,
  TextField,
  Box,
  InputAdornment,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import { AgGridReact } from "ag-grid-react";

import {
  ModuleRegistry,
  AllCommunityModule,
} from "ag-grid-community";

import UserActions from "./UserActions";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

ModuleRegistry.registerModules([AllCommunityModule]);

function UserGrid({ users, onView, onEdit, onDelete }) {
  const gridRef = useRef(null);

  const cellBase = {
    display: "flex",
    alignItems: "center",
    padding: "0 18px",
    height: "100%",
  };

  const columnDefs = useMemo(
    () => [
      {
        headerName: "User",
        field: "name",
        flex: 2,
        cellStyle: cellBase,
        headerClass: "grid-header",
        cellRenderer: (params) => (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                fontSize: 15,
                fontWeight: 700,
                backgroundColor: "#3B82F6",
              }}
            >
              {params.value?.charAt(0)}
            </Avatar>

            <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>
              {params.value}
            </Typography>
          </Box>
        ),
      },

      {
        headerName: "Email",
        field: "email",
        flex: 2.5,
        cellStyle: {
          ...cellBase,
          fontSize: "14px",
          color: "#475569",
        },
      },

      {
        headerName: "Role",
        field: "role",
        flex: 1.5,
        cellStyle: {
          ...cellBase,
          fontSize: "14px",
          fontWeight: 600,
          color: "#0F172A",
        },
      },

      {
        headerName: "Status",
        field: "status",
        flex: 1.3,
        cellStyle: cellBase,
        cellRenderer: (params) => {
          const isActive = params.value === "Active";

          return (
            <Chip
              label={params.value}
              sx={{
                height: 30,
                fontSize: "12px",
                fontWeight: 700,
                borderRadius: "999px",
                px: 1,
                color: isActive ? "#047857" : "#B91C1C",
                backgroundColor: isActive ? "#D1FAE5" : "#FEE2E2",
              }}
            />
          );
        },
      },

      {
        headerName: "Actions",
        flex: 1.6,
        sortable: false,
        filter: false,
        cellStyle: cellBase,
        cellRenderer: (params) => (
          <UserActions
            data={params.data}
            onView={onView}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ),
      },
    ],
    [onView, onEdit, onDelete]
  );

  return (
    <>
      
      <style>
        {`
          .grid-header {
            font-size: 13px !important;
            font-weight: 800 !important;
            color: #0F172A !important;
            letter-spacing: 0.4px;
            display: flex !important;
            align-items: center !important;
            justify-content: flex-start !important;
            padding-left: 18px !important;
          }

          .ag-header-cell-label {
            justify-content: flex-start !important;
          }

          .ag-cell {
            display: flex !important;
            align-items: center !important;
          }
        `}
      </style>

      <Box
        sx={{
          mt: 3,
          bgcolor: "#fff",
          borderRadius: "20px",
          border: "1px solid #E5E7EB",
          overflow: "hidden",
          boxShadow: "0 8px 30px rgba(15,23,42,.06)",
        }}
      >
        
        <Box
          sx={{
            p: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            backgroundColor: "#F8FAFC",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "20px", fontWeight: 800, color: "#0F172A" }}>
              Users Management
            </Typography>

            <Typography sx={{ fontSize: "13px", color: "#64748B" }}>
              Manage and monitor all users
            </Typography>
          </Box>

          <TextField
            size="small"
            placeholder="Search users..."
            sx={{
              width: 320,
              "& .MuiOutlinedInput-root": {
                height: 44,
                borderRadius: "12px",
                backgroundColor: "#fff",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "#64748B" }} />
                </InputAdornment>
              ),
            }}
            onChange={(e) =>
              gridRef.current?.api?.setGridOption(
                "quickFilterText",
                e.target.value
              )
            }
          />
        </Box>

       
        <div
          className="ag-theme-quartz"
          style={{
            width: "100%",
            height: "600px",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          <AgGridReact
            ref={gridRef}
            rowData={users}
            columnDefs={columnDefs}
            pagination={true}
            paginationPageSize={7}
            rowHeight={70}
            headerHeight={56}
            animateRows={true}
            defaultColDef={{
              sortable: true,
              filter: true,
              resizable: true,
              suppressMovable: true,
            }}
          />
        </div>
      </Box>
    </>
  );
}

export default UserGrid;