import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Assets/logo.png";
import { Menu, MenuItem } from "@mui/material";

function Employeenavbar() {
  const history = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const userName = localStorage.getItem("email");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlelogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("userId");
    history("/login");
  };

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
              <Link to="/contactus">
                <Button color="error">Contact Us</Button>
              </Link>
            </Box>
            <Box>
              <Link to="/">
                <Button color="error">Home</Button>
              </Link>
            </Box>

            <Box>
              {userName ? (
                // If user is logged in, display the user's name
                <div>
                  <Button
                    color="error"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    {userName}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link
                      to={"/employeeprofile"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      <MenuItem>Profile</MenuItem>
                    </Link>
                    <Link
                      to={"/registration"}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {" "}
                      <MenuItem>Registration</MenuItem>
                    </Link>
                    <MenuItem onClick={handlelogout}>Logout</MenuItem>
                  </Menu>
                </div>
              ) : (
                // If user is not logged in, display login and admin buttons
                <>
                  <Link to="/employeelogin">
                    <Button color="error">Login</Button>
                  </Link>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Employeenavbar;
