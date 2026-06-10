import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 280;

const menuItems = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    route: "/dashboard",
  },
  {
    label: "Users",
    icon: PeopleIcon,
    route: "/users",
  },
  {
    label: "Projects",
    icon: WorkspacesIcon,
    route: "/projects",
  },
  {
    label: "Analytics",
    icon: AnalyticsIcon,
    route: "/analytics",
  },
  {
    label: "Settings",
    icon: SettingsIcon,
    route: "/settings",
  },
];

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background:
  "linear-gradient(180deg,#0F172A,#020617)",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          px: 3,
          pt: 5,
          pb: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
  src="/assets/logo.jpeg"
  alt="Logo"
  sx={{
    width: 56,
    height: 56,
    fontWeight: 800,
    background:
      "linear-gradient(135deg,#3B82F6,#8B5CF6)",
    boxShadow:
      "0 10px 30px rgba(59,130,246,.35)",
  }}
/>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                letterSpacing: ".04rem",
              }}
            >
              Aventrix Pro
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "#94A3B8",
              }}
            >
              Admin Platform
            </Typography>
          </Box>
        </Box>
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(255,255,255,0.08)",
        }}
      />

      <List
        sx={{
          px: 2,
          py: 2,
          flexGrow: 1,
        }}
      >
        {menuItems.map((item) => {
          const active = location.pathname === item.route;
          const Icon = item.icon;

          return (
            <ListItem
              key={item.label}
              disablePadding
              sx={{ mb: 1 }}
            >
              <ListItemButton
                aria-current={active ? "page" : undefined}
                onClick={() => {
                  navigate(item.route);
                  setMobileOpen(false);
                }}
                sx={{
                  position: "relative",
                  borderRadius: "14px",
                  py: 1.3,
                  transition: "all .25s ease",

                  backgroundColor: active
                    ? "rgba(59,130,246,0.18)"
                    : "transparent",

                  "&::before": active
                    ? {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: "20%",
                        height: "60%",
                        width: "4px",
                        borderRadius: "0 4px 4px 0",
                        backgroundColor: "#60A5FA",
                      }
                    : {},

                  "&:hover": {
                    backgroundColor: "rgba(59,130,246,0.12)",
                    transform: "translateX(4px)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 42,
                    color: active ? "#60A5FA" : "#CBD5E1",
                  }}
                >
                  <Icon />
                </ListItemIcon>

                <ListItemText
  primary={
    <span
      style={{
        fontWeight: active ? 600 : 500,
      }}
    >
      {item.label}
    </span>
  }
/>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ p: 2 }}>
        <ListItemButton
          onClick={handleLogout}
          sx={{
            borderRadius: "14px",
            transition: "all .25s ease",

            "&:hover": {
              backgroundColor: "rgba(239,68,68,0.15)",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "#EF4444",
            }}
          >
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>

        <Typography
          variant="caption"
          sx={{
            display: "block",
            textAlign: "center",
            mt: 2,
            color: "#64748B",
          }}
        >
          © 2026 Aventrix
        </Typography>
      </Box>
    </Box>
  );

  return (
    <>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          top: 16,
          left: 16,
          zIndex: 2000,
          bgcolor: "#FFFFFF",
          color: "#0A1F44",
          boxShadow: 3,

          "&:hover": {
            bgcolor: "#F8FAFC",
          },
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            border: "none",
            boxSizing: "border-box",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export default Sidebar;