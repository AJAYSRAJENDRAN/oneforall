import React from "react";
import Employeenavbar from "./Employeenavbar";
import Customer from "../Assets/customer.png";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import Footer from "./Footer";

function Employeepage() {
  return (
    <div>
      <Employeenavbar />
      <div style={{ display: "flex" }} className="bg">
        <div className="body">
          <h1 style={{ color: "rgba(193, 34, 34, 0.9)" }}>
            <b>THE BASIC</b>
          </h1>
          <h1
            style={{
              color: "rgba(193, 34, 34, 0.9)",
              display: "inline-block",
              background: "khaki",
              margin: "0",
            }}
          >
            <b>HOME SERVICES</b>
          </h1>{" "}
          <h1 style={{ color: "rgba(193, 34, 34, 0.9)" }}>
            <b>ON YOUR FINGERTIPS</b>
          </h1>
        </div>
        <div>
          <img
            style={{ width: "570px", marginTop: "220px", marginLeft: "300px" }}
            src={Customer}
            alt=""
          />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "100px", marginLeft: "350px" }}>
        <Card
          sx={{
            maxWidth: 345,
            borderBottomRightRadius: "20%",
            borderTopLeftRadius: "20%",
            border: "2px solid khaki",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image="https://img.freepik.com/premium-photo/photographer-white-background-06_968638-70.jpg?w=740"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            borderBottomRightRadius: "20%",
            borderTopLeftRadius: "20%",
            marginLeft: "150px",
            border: "2px solid khaki",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image="https://img.freepik.com/premium-photo/man-wearing-yellow-hard-hat-yellow-hard-hat-holds-bunch-wires_873925-11745.jpg?w=740"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </div>
      <div style={{ display: "flex", marginTop: "100px", marginLeft: "350px" }}>
        <Card
          sx={{
            maxWidth: 345,
            borderBottomRightRadius: "20%",
            borderTopLeftRadius: "20%",
            border: "2px solid khaki",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image="https://img.freepik.com/premium-photo/photographer-white-background-06_968638-70.jpg?w=740"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            borderBottomRightRadius: "20%",
            borderTopLeftRadius: "20%",
            marginLeft: "150px",
            border: "2px solid khaki",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image="https://img.freepik.com/premium-photo/photographer-white-background-06_968638-70.jpg?w=740"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </div>
      <div style={{ display: "flex", marginTop: "100px", marginLeft: "350px" }}>
        <Card
          sx={{
            maxWidth: 345,
            borderBottomRightRadius: "20%",
            borderTopLeftRadius: "20%",
            border: "2px solid khaki",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image="https://img.freepik.com/premium-photo/photographer-white-background-06_968638-70.jpg?w=740"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            borderBottomRightRadius: "20%",
            borderTopLeftRadius: "20%",
            marginLeft: "150px",
            border: "2px solid khaki",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="440"
              image="https://img.freepik.com/premium-photo/photographer-white-background-06_968638-70.jpg?w=740"
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Employeepage;
