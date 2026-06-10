import React, {
  useState,
  useEffect,
} from "react";

import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Navbar({
  title = "Dashboard",
  subtitle = "Welcome back 👋",
}) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] =
    useState(null);

  const [userName, setUserName] =
    useState("");

  useEffect(() => {
    const currentUser =
      JSON.parse(
        localStorage.getItem(
          "currentUser"
        )
      );

    if (currentUser) {
      setUserName(
        currentUser.name
      );
    }
  }, []);

  const open = Boolean(anchorEl);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background:
          "rgba(255,255,255,0.8)",
        backdropFilter:
          "blur(12px)",
        borderBottom:
          "1px solid #E2E8F0",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "76px",
          display: "flex",
          justifyContent:
            "space-between",
          px: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              color: "#0F172A",
              fontWeight: 700,
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#64748B",
            }}
          >
            {subtitle}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: {
              xs: 1,
              md: 2,
            },
          }}
        >
          <TextField
            size="small"
            placeholder="Search..."
            sx={{
              width: {
                xs: 180,
                md: 300,
              },

              "& .MuiOutlinedInput-root":
                {
                  borderRadius:
                    "14px",
                  backgroundColor:
                    "#F8FAFC",
                },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />

          <IconButton
            sx={{
              bgcolor: "#FFFFFF",
              boxShadow:
                "0 2px 12px rgba(0,0,0,.05)",
              "&:hover": {
                bgcolor:
                  "#F8FAFC",
              },
            }}
          >
            <Badge
              badgeContent={4}
              color="error"
            >
              <NotificationsOutlinedIcon />
            </Badge>
          </IconButton>

          <IconButton
            sx={{
              bgcolor: "#FFFFFF",
              boxShadow:
                "0 2px 12px rgba(0,0,0,.05)",
              "&:hover": {
                bgcolor:
                  "#F8FAFC",
              },
            }}
          >
            <Badge
              badgeContent={2}
              color="primary"
            >
              <MailOutlineOutlinedIcon />
            </Badge>
          </IconButton>

          <Box
            onClick={(e) =>
              setAnchorEl(
                e.currentTarget
              )
            }
            sx={{
              display: "flex",
              alignItems:
                "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <Avatar
              sx={{
                bgcolor:
                  "#2563EB",
                fontWeight: 700,
              }}
            >
              {userName
                ? userName
                    .charAt(0)
                    .toUpperCase()
                : "U"}
            </Avatar>

            <ArrowDropDownIcon />
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={() =>
              setAnchorEl(null)
            }
          >
            <MenuItem
              onClick={() =>
                setAnchorEl(null)
              }
            >
              Profile
            </MenuItem>

            <MenuItem
              onClick={() => {
                setAnchorEl(null);
                navigate(
                  "/settings"
                );
              }}
            >
              Settings
            </MenuItem>

            <MenuItem
              onClick={() => {
                localStorage.removeItem(
                  "currentUser"
                );

                localStorage.removeItem(
                  "isLoggedIn"
                );

                setAnchorEl(null);

                navigate(
                  "/login"
                );
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;