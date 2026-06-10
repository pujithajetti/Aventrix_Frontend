import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";

const navLinks = [
  {
    label: "Home",
    sectionId: "home",
  },
  {
    label: "Features",
    sectionId: "features",
  },
  {
    label: "Services",
    sectionId: "services",
  },
  {
    label: "About Us",
    sectionId: "about",
  },
];

const mobileMenuItems = [
  ...navLinks,
  {
    label: "Login",
    route: "/login",
  },
  {
    label: "Get Started",
    route: "/signup",
  },
];

const navButtonStyles = {
  color: "#E5E7EB",
  textTransform: "capitalize",
  fontWeight: 600,
  px: 2,
  borderRadius: "10px",

  "&:hover": {
    color: "#3B82F6",
    backgroundColor: "transparent",
  },
};

function NavBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (sectionId) => {
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    scrollToSection("home");
  };

  const handleMenuNavigation = (item) => {
    if (item.route) {
      navigate(item.route);
    }

    if (item.sectionId) {
      scrollToSection(item.sectionId);
    }

    handleCloseNavMenu();
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "transparent",
        boxShadow: "none",
        py: 1,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            background: "rgba(10,31,68,0.85)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(59,130,246,0.25)",
            borderRadius: "18px",
            px: 3,
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton onClick={handleOpenNavMenu}>
                <MenuIcon sx={{ color: "#fff" }} />
              </IconButton>

              <Typography
                variant="h6"
                onClick={goHome}
                sx={{
                  ml: 1,
                  fontWeight: 700,
                  color: "#fff",
                  flexGrow: 1,
                  cursor: "pointer",
                }}
              >
                Aventrix
              </Typography>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    backgroundColor: "#0A1F44",
                    color: "#fff",
                    borderRadius: "12px",
                    minWidth: 220,
                  },
                }}
              >
                {mobileMenuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => handleMenuNavigation(item)}
                  >
                    <Typography>{item.label}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                onClick={goHome}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Box
                  component="img"
                  src="/assets/logo.jpeg"
                  alt="Aventrix Logo"
                  sx={{
                    height: 45,
                    mr: 1.5,
                    borderRadius: "10px",
                  }}
                />

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 800,
                    fontSize: "28px",
                    color: "#fff",
                    letterSpacing: ".05rem",
                  }}
                >
                  Aventrix
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexGrow: 1,
                  gap: 1,
                }}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => scrollToSection(link.sectionId)}
                    sx={navButtonStyles}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                }}
              >
                <Button
                  onClick={() => navigate("/login")}
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                    fontWeight: 600,

                    "&:hover": {
                      color: "#60A5FA",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Login
                </Button>

                <Button
                  variant="contained"
                  onClick={() => navigate("/signup")}
                  sx={{
                    textTransform: "capitalize",
                    fontWeight: 700,
                    px: 3,
                    py: 1,
                    background:
                      "linear-gradient(135deg,#2563EB,#3B82F6)",
                    borderRadius: "12px",

                    "&:hover": {
                      background:
                        "linear-gradient(135deg,#1D4ED8,#2563EB)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}

export default NavBar;