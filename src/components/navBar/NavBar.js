import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { createTheme, ThemeProvider } from "@mui/material";
import "./navBar.css";
import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/valorant-logo.jpg";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#27272fff",
    },
  },
});

export default function NavBar() {
  const navegation = useNavigate();
  return (
    <div className="nav_bar">
      <Box
        style={{
          minWidth: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
      >
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static">
            <div className="nav_bar-tool_bar">
              <img
                src={homeIcon}
                type="button"
                className="nav_bar-img"
                alt="#"
                onClick={() => navegation("/")}
              />
              <h1 className="nav_bar-h1">Valorant Game</h1>
              <div className="nav_bar-buttons">
                <Button color="inherit">
                  <a
                    href="https://ar.linkedin.com/in/franco-ribotta-274a211b0?trk=people-guest_people_search-card"
                    target="_blank"
                    className="nav_bar-a"
                  >
                    <LinkedInIcon />
                  </a>
                </Button>
                <Button color="inherit">
                  <a
                    href="https://github.com/franco7596/valorant-project"
                    target="_blank"
                    className="nav_bar-a"
                  >
                    <GitHubIcon />
                  </a>
                </Button>
              </div>
            </div>
          </AppBar>
        </ThemeProvider>
      </Box>
    </div>
  );
}
