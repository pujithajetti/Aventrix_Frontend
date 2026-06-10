import React from "react";

import {
  IconButton,
  Tooltip,
  Stack,
} from "@mui/material";

import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

function UserActions({ data, onView, onEdit, onDelete }) {
  const baseStyle = {
    width: 40,
    height: 40,
    borderRadius: "12px",
    border: "1px solid #E2E8F0",
    backgroundColor: "#FFFFFF",
    transition: "all .25s ease",
    boxShadow: "0 2px 10px rgba(15,23,42,.05)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const hoverEffect = (color) => ({
    backgroundColor: `${color}10`,
    borderColor: color,
    transform: "translateY(-2px) scale(1.05)",
    boxShadow: `0 10px 20px ${color}25`,
  });

  return (
    <Stack
      direction="row"
      spacing={1.5}
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100%" }}
    >
      
      <Tooltip title="View" arrow>
        <IconButton
          onClick={() => onView?.(data)}
          sx={{
            ...baseStyle,
            color: "#2563EB",
            "&:hover": hoverEffect("#2563EB"),
          }}
        >
          <VisibilityRoundedIcon sx={{ fontSize: 19 }} />
        </IconButton>
      </Tooltip>

      
      <Tooltip title="Edit" arrow>
        <IconButton
          onClick={() => onEdit?.(data)}
          sx={{
            ...baseStyle,
            color: "#7C3AED",
            "&:hover": hoverEffect("#7C3AED"),
          }}
        >
          <EditRoundedIcon sx={{ fontSize: 19 }} />
        </IconButton>
      </Tooltip>

      
      <Tooltip title="Delete" arrow>
        <IconButton
          onClick={() => {
            if (window.confirm("Delete this user?")) {
              onDelete?.(data.id);
            }
          }}
          sx={{
            ...baseStyle,
            color: "#DC2626",
            "&:hover": hoverEffect("#DC2626"),
          }}
        >
          <DeleteRoundedIcon sx={{ fontSize: 19 }} />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default UserActions;