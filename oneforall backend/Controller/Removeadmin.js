const admin = require("./Adminschema")



const deleteadmin=async(req,res)=>{
    const findadmin=req.params.id
    const dltadmin=await admin.findByIdAndDelete(findadmin)
    res.json(dltadmin)
}
module.exports=deleteadmin 