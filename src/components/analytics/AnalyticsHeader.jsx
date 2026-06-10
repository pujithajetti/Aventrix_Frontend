import React from "react";

import {
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

function AnalyticsHeader() {
  return (
    <Box
      className="
        flex
        flex-col
        lg:flex-row
        lg:items-center
        lg:justify-between
        gap-5
        mb-6
      "
    >
      

      <Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#0F172A",
            fontSize: {
              xs: "28px",
              md: "34px",
            },
          }}
        >
          Analytics Overview
        </Typography>

        <Typography
          sx={{
            mt: 1,
            color: "#64748B",
            fontSize: "15px",
          }}
        >
          Track and analyze your business
          performance in real-time.
        </Typography>
      </Box>

      

      <Box
        className="
          flex
          flex-col
          sm:flex-row
          gap-3
        "
      >
        

        <TextField
          type="date"
          size="small"
          defaultValue="2026-06-08"
          sx={{
            minWidth: 220,

            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
            },
          }}
        />

        
        <Button
          variant="contained"
          startIcon={<DownloadIcon />}
          sx={{
            borderRadius: "12px",
            px: 3,
            py: 1.2,
            textTransform: "none",
            fontWeight: 600,
            background:
              '#60A5FA',

            "&:hover": {
              background:
                '#60A5FA',
            },
          }}
        >
          Export Report
        </Button>
      </Box>
    </Box>
  );
}

export default AnalyticsHeader;