import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer2() {
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#f8f9fa" }}>
        <div style={{ marginLeft: "100px" }}>
          <div style={{ display: "flex" }}>
            {" "}
            <CopyrightIcon style={{ marginTop: "12px", color: "#868e96" }} />
            <p style={{ color: "#868e96" }}> 2023 One4All rights reserved </p>
          </div>
        </div>
        <div
          className="icons"
          style={{ marginLeft: "800px", marginTop: "10px" }}
        >
          <a href="">
            {" "}
            <TwitterIcon style={{ marginRight: "10px", color: "#868e96" }} />
          </a>
          <a href="">
            {" "}
            <WhatsAppIcon style={{ marginRight: "10px", color: "#868e96" }} />
          </a>
          <a href="">
            {" "}
            <InstagramIcon style={{ color: "#868e96" }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
