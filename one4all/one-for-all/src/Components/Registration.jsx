import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import "./Register.css";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";

function Registration() {
  const [name, setname] = useState("");
  const [jobCategory, setjobCategory] = useState("");
  const [email, setemail] = useState("");
  const [experience, setexperience] = useState("");
  const [address, setaddress] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [about, setabout] = useState("");
  const [age, setage] = useState("");
  const history = useNavigate();

  const handlename = (e) => {
    setname(e.target.value);
  };
  const handlejobcategory = (e) => {
    setjobCategory(e.target.value);
  };
  const handleemail = (e) => {
    setemail(e.target.value);
  };
  const handleaddress = (e) => {
    setaddress(e.target.value);
  };
  const handleexperience = (e) => {
    setexperience(e.target.value);
  };
  const handlephone = (e) => {
    setphoneNumber(e.target.value);
  };
  const handleabout = (e) => {
    setabout(e.target.value);
  };
  const handleage = (e) => {
    setage(e.target.value);
  };
  const submit = async (e) => {
    e.preventDefault();
  
    const userId = localStorage.getItem("userId");
  
    if (userId) {
      try {
        const response = await axios.put(`http://localhost:4000/updateadmin/${userId}`, {
          name,
          jobCategory,
          experience,
          address,
          email,
          phoneNumber,
          about,
          age,
        });
  
        if (response.status === 200) {
          swal({
            title: "Data updated successfully",
            icon: "success",
          });
          history("/employeepage");
        } else {
          swal({
            title: "Error updating data",
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error updating data: ", error);
        swal({
          title: "Error",
          text: "Failed to update data",
          icon: "error",
        });
      }
    } else {
      // If there's no user ID in local storage, handle accordingly
      swal({
        title: "Error",
        text: "User ID not found. Please log in.",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="regform" style={{ marginTop: "150px" }}>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            color="error"
            onChange={handlename}
            className="textfield"
          />
          <br />
          <TextField
            id="jobcategory"
            label="Job category"
            variant="standard"
            color="error"
            onChange={handlejobcategory}
            className="textfield"
          />
          <br />
          <TextField
            type="email"
            id="email"
            label="Email"
            variant="standard"
            color="error"
            onChange={handleemail}
            className="textfield"
          />
          <br />
          <TextField
            id="experience"
            label="Experience"
            variant="standard"
            color="error"
            onChange={handleexperience}
            className="textfield"
          />
          <br />
          <TextField
            id="about"
            label="About"
            variant="standard"
            color="error"
            onChange={handleabout}
            className="textfield"
          />
          <br/>
          <TextField
            id="age"
            label="Age"
            variant="standard"
            color="error"
            onChange={handleage}
            className="textfield"
          />
          <br />
          <TextField
            id="address"
            label="Address"
            variant="standard"
            color="error"
            onChange={handleaddress}
            className="textfield"
          />
          <br />
          <TextField
            id="phone"
            label="Phone"
            variant="standard"
            color="error"
            onChange={handlephone}
            className="textfield"
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
            onClick={submit}
          >
            Register
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Registration;
