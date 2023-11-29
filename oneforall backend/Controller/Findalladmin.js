
const admin = require("./Adminschema")

const findall=async(req,res)=>{
    
    const display= await admin.find()
   res.json(display)
} 
module.exports=findall