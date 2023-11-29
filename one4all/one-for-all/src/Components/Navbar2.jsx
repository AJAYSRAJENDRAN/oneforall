import { AppBar, Box, Button, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Assets/logo.png";

function Navbar2() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          color="inherit"
          elevation={3}
          sx={{ boxShadow: "0px 4px 4px -2px khaki" }}
        >
          <Toolbar>
            <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
              <img src={Logo} style={{ width: "200px" }} alt="Logo" />
            </Box>
            <Box>
              <Link to="/">
                <Button color="error">Home</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar2;
