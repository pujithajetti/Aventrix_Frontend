import React from "react";

import Dialog from "@mui/material/Dialog";

import DialogTitle from "@mui/material/DialogTitle";

import DialogContent from "@mui/material/DialogContent";

import IconButton from "@mui/material/IconButton";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import Divider from "@mui/material/Divider";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import UserForm from "./UserForm";

function UserDialog({
  open,
  handleClose,
  onSubmitData,
  editData,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        },
      }}
    >
      <DialogTitle
        sx={{
          backgroundColor: "#E5E7EB",
          color: "#0F172A",
          px: 4,
          py: 3,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#0F172A",
            }}
          >
            {editData ? "Edit User" : "Add New User"}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              color: "#64748B",
              mt: 0.5,
            }}
          >
            Manage user information
          </Typography>
        </Box>

        <IconButton
          onClick={handleClose}
          sx={{
            color: "#64748B",
            backgroundColor: "#FFFFFF",
            border: "1px solid #E5E7EB",
            "&:hover": {
              backgroundColor: "#E5E7EB",
            },
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>

      <Divider
        sx={{
          borderColor: "#E5E7EB",
        }}
      />

      <DialogContent
        sx={{
          p: 4,
          backgroundColor: "#FFFFFF",
        }}
      >
        <UserForm
          editData={editData}
          onSubmitData={(data) => {
            onSubmitData(data);
            handleClose();
          }}
          onCancel={handleClose}
        />
      </DialogContent>
    </Dialog>
  );
}

export default UserDialog;