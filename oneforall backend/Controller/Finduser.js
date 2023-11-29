const appuser = require("./Userschema")


const getsingleuser=async (req,res)=>{
const finduser=req.params.id

const userdata=await appuser.findById(finduser)
res.json(userdata)
}
module.exports=getsingleuser
