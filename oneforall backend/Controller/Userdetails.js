const appuser = require("./Userschema")

const getuserdetails= async(req,res)=>{
    const getuser=await appuser.find()
    res.json(getuser)
}
module.exports=getuserdetails
