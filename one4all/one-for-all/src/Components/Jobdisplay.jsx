import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Jobdisplay.css";

function Jobdisplay() {
  return (
    <div>
      <div style={{ marginTop: "100px", display: "flex" }}>
        <div style={{ marginLeft: "350px" }}>
          <Link to="/studiobooking" style={{ textDecoration: "none" }}>
            {" "}
            <Card sx={{ Width: 500, boxShadow: "0px 4px 4px -2px khaki" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="https://img.freepik.com/free-vector/studio-photographer-concept-illustration_114360-2423.jpg?w=740&t=st=1699548441~exp=1699549041~hmac=fdf21da0ae6d5b90451846447eaa19015c705fe57a0a07d89ead9e75a94d4511"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="error"
                    component="div"
                  >
                    Online Studio Booking
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Portrait Photography to Wedding Photography
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
            </Card>
          </Link>
        </div>
        <div style={{ marginLeft: "200px" }}>
          <Link to="/cleaning" style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 500, boxShadow: "0px 4px 4px -2px khaki" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="https://img.freepik.com/free-vector/professional-cleaning-service-team-duties-accessories-flat-composition-with-man-woman-uniform-sweeping-floor-illustration_1284-29299.jpg?w=740&t=st=1699549073~exp=1699549673~hmac=fde5d55c3d57035027880edf2fc5a63afbd986320736076846bfba6cd87363ac"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="error"
                    component="div"
                  >
                    Book a Housecleaner
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
            </Card>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "100px", display: "flex" }}>
        <div style={{ marginLeft: "350px" }}>
          <Link to="/housepainter" style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 500, boxShadow: "0px 4px 4px -2px khaki" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="https://img.freepik.com/free-vector/professional-painters-craftsman-workers_3446-429.jpg?w=740&t=st=1700059499~exp=1700060099~hmac=1322cd6d7afa649fea10ca26d31365558ca5395dde8d960969f883248a576ffa"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="error"
                    component="div"
                  >
                    Book a Housepainter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
            </Card>
          </Link>
        </div>
        <div style={{ marginLeft: "200px" }}>
          <Link to="/carpenter" style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 500, boxShadow: "0px 4px 4px -2px khaki" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  width="250"
                  image="https://img.freepik.com/free-vector/construction-worker-cutting-wood_1308-99133.jpg?w=740&t=st=1700059865~exp=1700060465~hmac=930f1977fff849681dec3f27d11a3dd833d0617ed64590740de474c9c4452f11"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="error"
                    component="div"
                  >
                    Book a Carpenter
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
            </Card>
          </Link>
        </div>
      </div>

      <div style={{ marginTop: "100px", display: "flex" }}>
        <div style={{ marginLeft: "350px" }}>
          <Link to="/electrician" style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 500, boxShadow: "0px 4px 4px -2px khaki" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  image="https://img.freepik.com/premium-vector/electrician-checks-equipment-fix-breakdown-flat-vector-illustration-isolated_181313-2343.jpg?w=740"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="error"
                    component="div"
                  >
                    Book a Electrician
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
            </Card>
          </Link>
        </div>
        <div style={{ marginLeft: "200px" }}>
          <Link to="/plumber" style={{ textDecoration: "none" }}>
            <Card sx={{ maxWidth: 500, boxShadow: "0px 4px 4px -2px khaki" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="340"
                  width="250"
                  image="https://img.freepik.com/premium-vector/vector-illustration-professional-plumbers_7496-453.jpg?w=740"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="error"
                    component="div"
                  >
                    Book a Plumber
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Jobdisplay;
