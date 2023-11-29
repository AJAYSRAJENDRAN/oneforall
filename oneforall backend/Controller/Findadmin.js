const admin = require("./Adminschema")

const findadmin=async(req,res)=>{
    const details=req.params.id
    const display=await admin.findById(details)
    res.json(display)
}
module.exports=findadmin