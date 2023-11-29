const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const appuser = require("./Userschema")

const signup=async (req,res)=>{
    const {name,email,password}= req.body
    const signup= await appuser.findOne({email})
    if(signup){
        res.json("already user exist")
    }else{
        const salt= await bcrypt.genSalt(10)
        const hash=await bcrypt.hash(password,salt)

        const userdetails=await appuser.create({name,email,password:hash})
        res.json({
            id:userdetails._id,
            name:userdetails.name,
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

module.exports=signup