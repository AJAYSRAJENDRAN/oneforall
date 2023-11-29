const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const admin = require("./Adminschema")


const adminsignup=async (req,res)=>{
    const {email,password}= req.body
    const signup= await admin.findOne({email})
    if(signup){
        res.json("already user exist")
    }else{
        const salt= await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password,salt)

        const userdetails=await admin.create({email,password:hash})
        res.json({
            id:userdetails._id,
            email:userdetails.email,
            password:userdetails.password,
            Token:tokengenerate(userdetails._id)



        })
    }
}

const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.jwt_scret,{
        expiresIn:'1d'
    }
)}

module.exports=adminsignup