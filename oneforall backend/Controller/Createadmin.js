const admin = require("./Adminschema")

const Createadmin=async(req,res)=>{
    const {name,jobCategory,experience,address,email,phoneNumber,about}=req.body
   
    const create=await admin.create({
        name,jobCategory,experience,address,email,phoneNumber,about,age

    })
    res.json(create)
    
}
module.exports=Createadmin