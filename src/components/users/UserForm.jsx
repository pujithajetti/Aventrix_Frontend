import React, { useEffect } from "react";

import {
  TextField,
  Button,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import addUserSchema from "../../ValidationSchema";

const defaultValues = {
  name: "",
  email: "",
  role: "",
  status: "",
};

function UserForm({ editData, onSubmitData, onCancel }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addUserSchema),
    defaultValues,
  });

  useEffect(() => {
    if (editData) reset(editData);
    else reset(defaultValues);
  }, [editData, reset]);

  const onSubmit = (data) => {
    onSubmitData({
      ...data,
      id: editData?.id || Date.now(),
    });
    reset(defaultValues);
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "#FFFFFF",
      "& fieldset": { borderColor: "#E5E7EB" },
      "&:hover fieldset": { borderColor: "#3B82F6" },
      "&.Mui-focused fieldset": { borderColor: "#3B82F6" },
    },
  };

  return (
    <Box>
      <Box mb={3}>
        <Typography sx={{ fontSize: "18px", fontWeight: 600, color: "#0F172A" }}>
          {editData ? "Update User" : "Create New User"}
        </Typography>

        <Typography sx={{ fontSize: "13px", color: "#64748B", mt: 0.5 }}>
          Fill the details carefully to manage user profile
        </Typography>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, minWidth: "250px" }}>
              <TextField
                fullWidth
                label="User Name"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={inputSx}
              />
            </Box>

            <Box sx={{ flex: 1, minWidth: "250px" }}>
              <TextField
                fullWidth
                label="Email Address"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={inputSx}
              />
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Box sx={{ flex: 1, minWidth: "250px" }}>
              <TextField
                fullWidth
                select
                label="Role"
                defaultValue=""
                {...register("role")}
                error={!!errors.role}
                helperText={errors.role?.message}
                sx={inputSx}
              >
                <MenuItem value="">Select Role</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Developer">Developer</MenuItem>
                <MenuItem value="UI Designer">UI Designer</MenuItem>
              </TextField>
            </Box>

            <Box sx={{ flex: 1, minWidth: "250px" }}>
              <TextField
                fullWidth
                select
                label="Status"
                defaultValue=""
                {...register("status")}
                error={!!errors.status}
                helperText={errors.status?.message}
                sx={inputSx}
              >
                <MenuItem value="">Select Status</MenuItem>
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 1,
            }}
          >
            <Button
              onClick={onCancel}
              variant="outlined"
              sx={{
                borderColor: "#E5E7EB",
                color: "#64748B",
                borderRadius: "10px",
                px: 3,
                textTransform: "none",
                "&:hover": {
                  borderColor: "#3B82F6",
                  color: "#3B82F6",
                  backgroundColor: "#E5E7EB",
                },
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#3B82F6",
                borderRadius: "10px",
                px: 3,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#2563EB",
                  boxShadow: "none",
                },
              }}
            >
              {editData ? "Update User" : "Add User"}
            </Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
}

export default UserForm;