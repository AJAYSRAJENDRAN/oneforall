const appuser = require("./Userschema")


const deleteuser=async(req,res)=>{
    const finduser1=req.params.id
    const dltuser=await appuser.findByIdAndRemove(finduser1)
    res.json(dltuser)
}
module.exports=deleteuser 