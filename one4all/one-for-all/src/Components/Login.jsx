import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "axios";
import Navbar2 from "./Navbar2";
import Footer2 from "./Footer2";

function Login() {
  const history = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login1", {
        email,
        password,
      });

      const { token, userId } = response.data;
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("email", email);
        localStorage.setItem("userId", userId);

        swal({
          title: "Login successfully",
          icon: "success",
        });
        history("/");
      } else {
        swal({
          title: "Login failed",
          text: "Please check credentials and try again",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error logging in: ", error);
      swal({
        title: "Login failed",
        text: "An error occurred while logging in.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Navbar2 />
      <div
        style={{
          width: "90%",
          maxWidth: "400px",
          margin: "0 auto",
          marginTop: "150px",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            type="email"
            margin="normal"
            color="error"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <TextField
            margin="normal"
            color="error"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
            onClick={login}
          >
            LogIn
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div style={{marginTop:"100px"}}>
      <Footer2/>
      </div>
     
    </div>
  );
}

export default Login;
