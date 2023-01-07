import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { createTheme, ThemeProvider } from "@mui/material";
import "./navBar.css";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#27272fff",
      //   main: "var(--back-ground-dark-color)",
    },
  },
});

export default function NavBar() {
  return (
    <div className="nav_bar">
      <Box
        style={{
          minHeight: "100%",
          minWidth: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <div className="nav_bar-tool_bar">
              <img
                src="https://placeimg.com/80/40/arch"
                className="nav_bar-img"
              />
              <h1 className="nav_bar-h1">Valorant Game</h1>
              <div className="nav_bar-buttons">
                <Button color="inherit">
                  <Brightness4Icon />
                </Button>
                <Button color="inherit">
                  <LinkedInIcon />
                </Button>
                <Button color="inherit">
                  <GitHubIcon />
                </Button>
              </div>
            </div>
          </AppBar>
        </ThemeProvider>
      </Box>
    </div>
  );
}
