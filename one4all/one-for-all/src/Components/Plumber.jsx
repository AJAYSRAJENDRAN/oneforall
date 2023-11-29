import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";

function Plumber() {
  const [plumber, setplumber] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/admin/plumber");
        setplumber(response.data);
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
      <div style={{ display: "flex" }}>
        <div style={{ width: "80px", marginTop: "80px", position: "fixed" }}>
          <img
            src="https://img.freepik.com/premium-vector/sketch-hand-drawn-single-line-art-coloring-page-line-drawing-worker-day_469760-9054.jpg?w=740"
            alt=""
          />
        </div>
      <div style={{ marginLeft: "700px", marginTop: "150px" }}>
        {plumber.map((obj) => (
          <Card sx={{ maxWidth: 500 }} style={{ marginTop: "20px" }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <b>{obj.name.toUpperCase()}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  "{obj.about}"
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <div style={{ display: "flex" }}>
                <div>
                  <Link to={`/employee/${obj._id}`}>
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

export default Plumber;
