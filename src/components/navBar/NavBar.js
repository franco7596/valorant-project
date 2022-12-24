import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { createTheme, ThemeProvider } from "@mui/material";

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
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SwipeableDrawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                onOpen={toggleDrawer(anchor, true)}
              >
                {list(anchor)}
              </SwipeableDrawer>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">
              <Brightness4Icon />
            </Button>
            <Button color="inherit">
              <LinkedInIcon />
            </Button>
            <Button color="inherit">
              <GitHubIcon />
            </Button>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </Box>
  );
}
