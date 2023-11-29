import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

function Studiobooking() {
  const [studio, setstudio] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/admin/photographer"
        );
        setstudio(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar2 />

      <div style={{ marginTop: "100px" }}>
        <h2
          style={{
            position: "fixed",
            top: "100px",
            width: "100%",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          Photography
        </h2>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "100px", marginTop: "0px", position: "fixed" }}>
          <img
            src="https://img.freepik.com/premium-vector/woman-photographer-with-camera-sketch-style_507816-116.jpg?w=740"
            alt=""
          />
        </div>
        <div style={{ marginLeft: "750px", marginTop: "60px" }}>
          {studio.map((studio) => (
            <Card sx={{ maxWidth: 500 }} style={{ marginTop: "20px" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    <b>{studio.name.toUpperCase()}</b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    "{studio.about}"
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <div style={{ display: "flex" }}>
                  <div>
                    <Link to={`/employee/${studio._id}`}>
                      {" "}
                      <Button size="small" variant="contained" color="error">
                        Book
                      </Button>
                    </Link>
                  </div>
                  <div style={{ marginLeft: "300px" }}>
                    <Rating
                      name="half-rating-read"
                      defaultValue={5.0}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                </div>
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Studiobooking;
