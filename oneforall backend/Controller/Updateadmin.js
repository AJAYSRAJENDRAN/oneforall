const admin = require("./Adminschema");

const updateadmindetails = async (req, res) => {
    const { id } = req.params; // Assuming the ID is passed as a route parameter
  
    try {
      const updatedAdmin = await admin.findByIdAndUpdate(id, req.body, { new: true });
  
      if (!updatedAdmin) {
        return res.status(404).json({ message: 'Admin not found' });
      }
  
      return res.status(200).json({ message: 'Admin details updated successfully', admin: updatedAdmin });
    } catch (error) {
      console.error('Error updating admin details:', error);
      return res.status(500).json({ message: 'Error updating admin details' });
    }
  };
  
  module.exports = { updateadmindetails };