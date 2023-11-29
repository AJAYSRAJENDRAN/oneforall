const logout=async(req,res)=>{
    req.logout()
    res.json({message:"logout successful"})
}
module.exports=logout