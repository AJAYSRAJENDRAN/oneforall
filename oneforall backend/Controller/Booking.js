const admin = require("./Adminschema");
const appuser = require("./Userschema");

const booking = async (req, res) => {
  try {
    // const { userId } = req.params;
    const { employeeId, bookingdate,userId } = req.body; // Assuming these are passed in the request body

    const user = await appuser.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Add the new booking to the user's bookings array
    user.bookings.push({ employeeId, bookingdate });
    await user.save();

    res.status(201).json({ message: 'Booking created successfully' });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = booking;