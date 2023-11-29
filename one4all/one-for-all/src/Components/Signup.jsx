import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Navbar2 from "./Navbar2";

function Signup() {
  const history = useNavigate();
  const [name, setname] = useState([""]);
  const [email, setemail] = useState([""]);
  const [password, setpassword] = useState([""]);
  const [enableSignup, setEnableSignup] = useState(false);
  const [error, setError] = useState(false);
  const validateForm = () => {
    if (name && email && password) {
      setEnableSignup(true);
    } else {
      setEnableSignup(false);
    }
  };
  const handleemail = (e) => {
    setemail(e.target.value);
    validateForm();
  };
  const handlepassword = (e) => {
    setpassword(e.target.value);

    validateForm();
  };
  const handlename = (e) => {
    setname(e.target.value);
    if (e.target.value.trim() === "") {
      setError(true);
    } else {
      setError(false);
    }
    validateForm();
  };
  const Signup = async (e) => {
    e.preventDefault();
    const display = await axios.post("http://localhost:4000/signup1", {
      name,
      email,
      password,
    });
    console.log(display.data);
    if (name && email && password) {
      swal({
        title: "successful",
        icon: "successful",
      });
    } else {
      swal({
        title: "Something went wrong",
        icon: "error",
      });
    }
    history("/login");
  };
  return (
    <div>
      <Navbar2 />
      <div style={{ width: "400px", marginLeft: "500px", marginTop: "150px" }}>
        <Typography
          component="h1"
          variant="h5"
          color="error"
          style={{ textAlign: "center" }}
        >
          Sign up
        </Typography>
        <form style={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                color="error"
                required
                fullWidth
                id="Name"
                label=" Name"
                autoFocus
                onChange={handlename}
                error={error}
                helperText={error ? "name required" : ""}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                color="error"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleemail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                color="error"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handlepassword}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="error" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            onClick={Signup}
            disabled={!enableSignup}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default Signup;
