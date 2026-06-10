import React, { useState } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

import {
  Box,
  Typography,
  Button,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import UserGrid from "../components/users/UserGrid";
import UserDialog from "../components/users/UserDialog";

import {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
} from "../services/userService";

const Users = () => {
  const [users, setUsers] =
    useState(getUsers());

  const [open, setOpen] =
    useState(false);

  const [editData, setEditData] =
    useState(null);

  const handleOpen = () => {
    setEditData(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditData(null);
  };

  const handleSubmitData = (
    data
  ) => {
    if (editData) {
      setUsers(
        updateUser(users, {
          ...data,
          id: editData.id,
        })
      );
    } else {
      setUsers(
        addUser(users, data)
      );
    }

    handleClose();
  };

  const handleEdit = (
    user
  ) => {
    setEditData(user);
    setOpen(true);
  };

  const handleDelete = (
    id
  ) => {
    setUsers(
      deleteUser(users, id)
    );
  };

  const handleView = (
    user
  ) => {
    alert(
      `
Name : ${user.name}

Email : ${user.email}

Role : ${user.role}

Status : ${user.status}
      `
    );
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />

      <div className="flex-1 md:ml-[280px]">
        <Navbar />

        <div className="p-6">

          <Box
            sx={{
              backgroundColor:
                "#fff",
              p: 3,
              borderRadius:
                "16px",
              boxShadow:
                "0px 2px 12px rgba(0,0,0,0.05)",
            }}
            className="
            flex
            flex-col
            md:flex-row
            md:justify-between
            md:items-center
            gap-4
            "
          >
            <Box>
              <Typography
                variant="h4"
                fontWeight={700}
              >
                User Management
              </Typography>

              <Typography
                color="text.secondary"
              >
                Manage users,
                roles and
                permissions.
              </Typography>
            </Box>

            <Button
              variant="contained"
              startIcon={
                <AddIcon />
              }
              onClick={
                handleOpen
              }
            >
              Add User
            </Button>
          </Box>

          <UserGrid
            users={users}
            onView={
              handleView
            }
            onEdit={
              handleEdit
            }
            onDelete={
              handleDelete
            }
          />

          <UserDialog
            open={open}
            handleClose={
              handleClose
            }
            onSubmitData={
              handleSubmitData
            }
            editData={
              editData
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Users;