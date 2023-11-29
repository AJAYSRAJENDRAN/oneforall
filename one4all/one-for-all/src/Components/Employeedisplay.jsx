import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Navbar2 from "./Navbar2";
import DatePicker from "react-date-picker";
import { TextField } from "@mui/material";

function Employeedisplay() {
  const [employee, setEmployee] = useState({});
  const [bookingdate, setBookingDate] = useState("");

  const { id } = useParams();
  const loggedInUserId = localStorage.getItem("userId");
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/adminid/${id}`);
        setEmployee(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [id]);

  const book = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("token");

    if (storedToken && bookingdate) {
      try {
        const response = await axios.post("http://localhost:4000/booking", {
          userId: loggedInUserId,
          employeeId: id,
          bookingdate,
        });
        console.log(response.data);

        swal({
          title: "",
          icon: "success",
        });

        history("/");
      } catch (error) {
        console.error("Error while booking:", error);
        swal({
          title: "",
          text: "Error while booking.",
          icon: "error",
        });
      }
    } else {
      swal({
        title: "",
        text: "Invalid details.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <Navbar2 />

      <div style={{ width: "900px", marginTop: "200px", marginLeft: "350px" }}>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            overflow: { xs: "auto", sm: "initial" },
          }}
        >
          {/* <Box
        sx={{
          position: 'absolute',
          display: 'block',
          width: '1px',
          bgcolor: 'warning.300',
          left: '500px',
          top: '-24px',
          bottom: '-24px',
          '&::before': {
            top: '4px',
            content: '"vertical"',
            display: 'block',
            position: 'absolute',
            right: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
          '&::after': {
            top: '4px',
            content: '"horizontal"',
            display: 'block',
            position: 'absolute',
            left: '0.5rem',
            color: 'text.tertiary',
            fontSize: 'sm',
            fontWeight: 'lg',
          },
        }}
      /> */}
          <Card
            orientation="horizontal"
            sx={{
              width: "75%",
              flexWrap: "wrap",
              [`& > *`]: {
                "--stack-point": "500px",
                minWidth:
                  "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
              },
              // make the card resizable for demo
              // overflow: 'auto',
              // resize: 'horizontal',
            }}
          >
     
            <CardContent>
              <div style={{ display: "flex" }}>
                <div>
                  <Typography fontSize="xl" fontWeight="lg">
                    {employee && (
                      <h3>{employee.name && employee.name.toUpperCase()}</h3>
                    )}
                  </Typography>
                  <Typography
                    level="body-sm"
                    fontWeight="lg"
                    textColor="text.tertiary"
                  >
                    {employee.jobCategory}
                  </Typography>
                </div>
                <div style={{ marginLeft: "350px", marginTop: "40px" }}>
                  <Typography
                    level="body-sm"
                    fontWeight="lg"
                    textColor="text.tertiary"
                  >
                    Email : {employee.email}
                  </Typography>
                  <Typography
                    level="body-sm"
                    fontWeight="lg"
                    textColor="text.tertiary"
                  >
                    &nbsp;&nbsp; Ph&nbsp;&nbsp; : {employee.phoneNumber}
                  </Typography>
                </div>
              </div>
              <Sheet
                sx={{
                  bgcolor: "background.level1",
                  borderRadius: "sm",
                  p: 1.5,
                  my: 1.5,
                  display: "flex",
                  gap: 2,
                  "& > div": { flex: 1 },
                }}
              >
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Age
                  </Typography>
                  <Typography fontWeight="lg">{employee.age}</Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Experience
                  </Typography>
                  <Typography fontWeight="lg">
                    {employee.experience} years
                  </Typography>
                </div>
                <div>
                  <Typography level="body-xs" fontWeight="lg">
                    Rating
                  </Typography>
                  <Typography fontWeight="lg">&nbsp; &nbsp;-</Typography>
                </div>
              </Sheet>
        
              <div>
                <TextField
                  margin="normal"
                  color=""
                  required
                  fullWidth
                  name="date"
                  label=""
                  type="date"
                  id="date"
                  autoComplete=""
                  onChange={(e) => {
                    setBookingDate(e.target.value);
                  }}
                />
              </div>
              <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <Button
                  onClick={book}
                  variant="solid"
                  color="danger"
                  sx={{ width: "200px" }}
                >
                  Book
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
}
export default Employeedisplay;
