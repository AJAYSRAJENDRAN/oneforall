const admin = require("./Adminschema");

const jobcategory=async(req,res)=>{
    const { jobCategory } = req.params;
    const display=await admin.find({jobCategory})
    res.json(display)
}
module.exports=jobcategory