import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar2 from './Navbar2';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

function Booking() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const response = await axios.get(`http://localhost:4000/booking/${userId}`);
        const bookingData = response.data.bookings || [];

        // Fetch admin details for each booking
        const adminDetailsData = await Promise.all(
          bookingData.map(async (booking) => {
            const adminResponse = await axios.get(`http://localhost:4000/adminid/${booking.employeeId}`);
            return {
              ...booking,
              adminDetails: adminResponse.data // Assuming admin details are available in adminResponse
            };
          })
        );

        setBookings(adminDetailsData);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <>
      <Navbar2 />
      <div style={{ marginTop: "150px", marginLeft: "50px", color: "#c22424" }}>
        <h1>Booking History</h1>
      </div>
      <div style={{ marginLeft: "300px", marginTop: "50px" }}>
        {bookings.map((booking, index) => (
          <div key={index}>
            <Card sx={{ maxWidth: 345, marginTop: "20px" }}>
              <CardActionArea>
                <CardContent>
                  {/* <Typography gutterBottom variant="h5" color="error" component="div">
                    Employee ID: {booking.employeeId}
                  </Typography> */}
                  {booking.adminDetails && (
                    <>
                    <Typography variant="h5" color="">
                       {booking.adminDetails.name.toUpperCase()}
                    </Typography>
                    <br />
                     <Typography variant="body2" color="">
                     {booking.adminDetails.jobCategory.toUpperCase()}
                  </Typography>
                  </>
                  )}
                  <br />
                  <Typography variant="body2" color="text.secondary">
                    Booking Date: {new Date(booking.bookingdate).toLocaleDateString()}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default Booking;
