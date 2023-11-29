const appuser = require("./Userschema");

const getbooking = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await appuser.findById(userId).populate('bookings.employeeId');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ bookings: user.bookings });
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ message: 'Server Error' });
  }
}
  
  module.exports =getbooking ;