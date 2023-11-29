const appuser = require("./Userschema")
const bcrypt=require("bcrypt")

const CreateUser=async(req,res)=>{
    const {name,email,password,booking}=req.body
    const salt=await bcrypt.genSalt(10)
    const hashedpassword= await bcrypt.hash(password,salt)
    const emailcheck=await appuser.findOne({email})
    if(emailcheck){
        res.json("user already exist")
    }else{
       
    
    const Userdetails=await appuser.create({
        name,email,password:hashedpassword,booking
    })
    res.json(Userdetails)
    }
}
module.exports=CreateUser