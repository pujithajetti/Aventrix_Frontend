import React, { useState, useEffect } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

import profileData from "../data/profileData";

import {
  CameraAlt,
  Save,
} from "@mui/icons-material";

import {
  Avatar,
  Button,
  TextField,
} from "@mui/material";

function Settings() {
  const [profile, setProfile] =
    useState(profileData);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

    if (currentUser) {
      setProfile((prev) => ({
        ...prev,
        fullName:
          currentUser.name || "",
        email:
          currentUser.email || "",
      }));
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = JSON.parse(
      localStorage.getItem(
        "currentUser"
      )
    );

    const users =
      JSON.parse(
        localStorage.getItem(
          "users"
        )
      ) || [];

    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        name: profile.fullName,
        email: profile.email,
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(
          updatedUser
        )
      );

      const updatedUsers =
        users.map((user) =>
          user.id ===
          updatedUser.id
            ? updatedUser
            : user
        );

      localStorage.setItem(
        "users",
        JSON.stringify(
          updatedUsers
        )
      );
    }

    alert(
      "Profile Updated Successfully"
    );
  };

  return (
    <div className="bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="md:ml-[280px]">
        <Navbar />

        <div className="p-6 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Profile Settings
            </h1>

            <p className="text-slate-500 mt-2">
              Manage your account
              information and profile
              details.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 h-40" />

            <div className="px-8 pb-8">
              <div className="flex flex-col items-center -mt-16">
                <div className="relative">
                  <Avatar
                    src={
                      profile.profileImage
                    }
                    sx={{
                      width: 130,
                      height: 130,
                      border:
                        "5px solid white",
                    }}
                  />

                  <button
                    className="
                    absolute
                    bottom-2
                    right-2
                    bg-blue-600
                    text-white
                    p-2
                    rounded-full
                    shadow-lg
                  "
                  >
                    <CameraAlt fontSize="small" />
                  </button>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mt-4">
                  {profile.fullName}
                </h2>

                <p className="text-slate-500 text-sm">
                  {profile.role}
                </p>
              </div>

              <form
                onSubmit={
                  handleSubmit
                }
                className="mt-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TextField
                    label="Full Name"
                    name="fullName"
                    value={
                      profile.fullName
                    }
                    onChange={
                      handleChange
                    }
                    fullWidth
                  />

                  <TextField
                    label="Email"
                    name="email"
                    value={
                      profile.email
                    }
                    onChange={
                      handleChange
                    }
                    fullWidth
                  />

                  <TextField
                    label="Phone Number"
                    name="phone"
                    value={
                      profile.phone
                    }
                    onChange={
                      handleChange
                    }
                    fullWidth
                  />

                  <TextField
                    label="Location"
                    name="location"
                    value={
                      profile.location
                    }
                    onChange={
                      handleChange
                    }
                    fullWidth
                  />
                </div>

                <div className="mt-6">
                  <TextField
                    label="Role"
                    name="role"
                    value={
                      profile.role
                    }
                    onChange={
                      handleChange
                    }
                    fullWidth
                  />
                </div>

                <div className="mt-6">
                  <TextField
                    label="About"
                    name="bio"
                    value={
                      profile.bio
                    }
                    onChange={
                      handleChange
                    }
                    multiline
                    rows={5}
                    fullWidth
                  />
                </div>

                <div className="flex justify-end mt-8">
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={
                      <Save />
                    }
                    sx={{
                      borderRadius:
                        "12px",
                      textTransform:
                        "none",
                      px: 4,
                      py: 1.5,
                      fontWeight: 600,
                    }}
                  >
                    Update Profile
                  </Button>
                </div>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <p className="text-slate-500 text-sm">
                Projects
              </p>

              <h3 className="text-3xl font-bold text-slate-800 mt-2">
                24
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <p className="text-slate-500 text-sm">
                Tasks Completed
              </p>

              <h3 className="text-3xl font-bold text-emerald-600 mt-2">
                186
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <p className="text-slate-500 text-sm">
                Performance
              </p>

              <h3 className="text-3xl font-bold text-blue-600 mt-2">
                96%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;