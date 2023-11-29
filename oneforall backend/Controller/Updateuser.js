const appuser = require("./Userschema")


const updateid=async(req,res)=>{
    const findid=req.params.id
    const {name,email,password,}=req.body
    const updatedata=await appuser.findByIdAndUpdate(findid,{name,email,password})
    res.json(updatedata)
}
module.exports=updateid