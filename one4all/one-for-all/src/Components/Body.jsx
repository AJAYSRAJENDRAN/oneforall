import React from "react";
import Navbar from "./Navbar";
import "./Body.css";
import Jobdisplay from "./Jobdisplay";
import Footer from "./Footer";
import Customer from "../Assets/customer.png";

function Body() {
  return (
    <div>
      <Navbar />
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
      <Jobdisplay />
      <Footer />
    </div>
  );
}

export default Body;
