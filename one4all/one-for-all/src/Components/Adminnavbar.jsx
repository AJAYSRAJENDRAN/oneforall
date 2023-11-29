import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../Assets/logo.png";

function Adminnavbar() {
    const history=useNavigate()

    const logout=(e)=>{
        e.preventDefault()
        localStorage.removeItem("token");
    localStorage.removeItem("email");
        history("/adminlogin")
        
    }
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
              
                <Button onclick={logout} color="error" >Logout</Button>
             
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
  )
}

export default Adminnavbar