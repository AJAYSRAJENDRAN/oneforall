const mongoose=require("mongoose")


const userschema=mongoose.Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String},
    bookings: [{
      employeeId: {
        type: mongoose.Schema.Types.ObjectId,
       
      },
      bookingdate: {
        type: Date 
      }
    }]
    
})

const appuser=mongoose.model("user",userschema)
module.exports=appuser
