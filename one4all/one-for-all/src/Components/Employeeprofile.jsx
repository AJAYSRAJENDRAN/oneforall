import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Employeenavbar from "./Employeenavbar";

function Employeeprofile() {
  const [employee, setemployee] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://localhost:4000/adminid/${userId}`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setemployee(res.data);
        } else {
          // If res.data is not an array, handle it accordingly
          setemployee([res.data]); // Wrap the single object in an array
        }
      })
      .catch((error) => {
        console.error("Error fetching employee data: ", error);
        // Handle errors here, setting employee state to an empty array
        setemployee([]);
      });
  }, [userId]);

  return (
    <div>
      <Employeenavbar />
      <div>
        {employee.map((obj) => (
          <Card
            sx={{
              maxWidth: 545,
              marginLeft: "400px",
              marginTop: "200px",
              borderColor: "khaki",
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h2"
                  component="div"
                  style={{ textAlign: "center" }}
                >
                  <b> {obj.name.toUpperCase()}</b>
                </Typography>
                <br />
                <br />
                <Typography
                  variant="h5"
                  color="text.secondary"
                  style={{ marginLeft: "90px" }}
                >
                  Age&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                  {obj.age} <br /> <br />
                  Jobcategory&nbsp;:&nbsp;{obj.jobCategory} <br />
                  <br />
                  Experience&nbsp;&nbsp;:&nbsp;{obj.experience}years <br />
                  <br />
                  Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                  {obj.email} <br />
                  <br />
                  Ph&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
                  {obj.phoneNumber}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Employeeprofile;
