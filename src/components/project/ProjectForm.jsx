import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Grid,
  Typography,
  Box,
  InputAdornment,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";

function ProjectForm({ open, handleClose, handleAddProject }) {
  const initialState = {
    title: "",
    category: "",
    description: "",
    status: "Planning",
    priority: "Medium",
    dueDate: "",
  };

  const [project, setProject] = useState(initialState);

  const handleChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (!project.title || !project.category || !project.description) {
      alert("Please fill all required fields.");
      return;
    }

    const newProject = {
      id: Date.now(),
      ...project,
      progress: 0,
      completedTasks: 0,
      totalTasks: 10,
      dueDate: project.dueDate || "Dec 31, 2026",
      team: [],
      color: "#60A5FA",
    };

    handleAddProject(newProject);
    setProject(initialState);
    handleClose();
  };

  const inputStyle = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "14px",
      backgroundColor: "#F8FAFC",
    },
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "24px",
          px: 1,
          py: 2,
          boxShadow: "0 20px 80px rgba(15,23,42,0.15)",
        },
      }}
    >
      
      <DialogTitle sx={{ textAlign: "center", pb: 1 }}>
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: "20px",
            background: "#EFF6FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <AddCircleOutlineIcon sx={{ color: "#60A5FA", fontSize: 34 }} />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 800 }}>
          Create New Project
        </Typography>

        <Typography sx={{ color: "#64748B", mt: 1, fontSize: "14px" }}>
          Add project details and start managing your work
        </Typography>
      </DialogTitle>

    
      <DialogContent sx={{ pt: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
          
          
          <TextField
            fullWidth
            label="Project Name"
            name="title"
            value={project.title}
            onChange={handleChange}
            sx={{
              ...inputStyle,
              mt: 1, 
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DriveFileRenameOutlineIcon sx={{ color: "#94A3B8" }} />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            multiline
            rows={3}
            label="Description"
            name="description"
            value={project.description}
            onChange={handleChange}
            sx={inputStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DescriptionOutlinedIcon sx={{ color: "#94A3B8", mt: -6 }} />
                </InputAdornment>
              ),
            }}
          />

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Category"
                name="category"
                value={project.category}
                onChange={handleChange}
                sx={inputStyle}
              >
                <MenuItem value="Frontend">Frontend</MenuItem>
                <MenuItem value="Backend">Backend</MenuItem>
                <MenuItem value="Full Stack">Full Stack</MenuItem>
                <MenuItem value="AI/ML">AI / ML</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Status"
                name="status"
                value={project.status}
                onChange={handleChange}
                sx={inputStyle}
              >
                <MenuItem value="Planning">Planning</MenuItem>
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
                <MenuItem value="On Hold">On Hold</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Priority"
                name="priority"
                value={project.priority}
                onChange={handleChange}
                sx={inputStyle}
              >
                <MenuItem value="Low">Low</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="High">High</MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Deadline"
                name="dueDate"
                value={project.dueDate}
                onChange={handleChange}
                sx={inputStyle}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>

      
      <DialogActions sx={{ px: 3, pb: 3, pt: 2, justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{
            width: 140,
            borderRadius: "12px",
            borderColor: "#60A5FA",
            color: "#60A5FA",
            fontWeight: 600,
          }}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            width: 180,
            borderRadius: "12px",
            backgroundColor: "#60A5FA",
            fontWeight: 700,
          }}
        >
          Create Project
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProjectForm;