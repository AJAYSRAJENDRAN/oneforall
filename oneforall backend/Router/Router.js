const express=require("express")

const CreateUser = require("../Controller/Createuser")
const getuserdetails = require("../Controller/Userdetails")
const getsingleuser = require("../Controller/Finduser")
const deleteuser = require("../Controller/Removeuser")
const updateid = require("../Controller/Updateuser")
const loginuser = require("../Controller/Login")
const signup = require("../Controller/Signup")
const login = require("../Controller/login")
const protect = require("../Middleware/Token")
const Createadmin = require("../Controller/Createadmin")
const jobcategory = require("../Controller/Jobcategory")
const findadmin = require("../Controller/Findadmin")
const logout = require("../Controller/Logout")
const booking = require("../Controller/Booking")
const getbooking = require("../Controller/Getbooking")
const adminsignup = require("../Controller/Adminsignup")
const adminlogin = require("../Controller/Adminlogin")
const findall = require("../Controller/Findalladmin")
const deleteadmin = require("../Controller/Removeadmin")
const { updateadmindetails } = require("../Controller/Updateadmin")



const router=express.Router()
const middleware=[protect]


router.route("/user1").post(CreateUser)
router.route("/userdetails1").get(getuserdetails)
router.route("/userid1/:id").get(getsingleuser)
router.route("/dltuser1/:id").delete(deleteuser)
router.route("/updateuser1/:id").put(updateid)



router.route("/loginuser1").post(loginuser)
router.route("/signup1").post(signup)
router.route("/login1").post(login)
router.route("/verification1").get(middleware,signup)
router.route("/logout").post(logout)




router.route("/admin").post(Createadmin)
router.route("/admin/:jobCategory").get(jobcategory)
router.route("/adminid/:id").get(findadmin)
router.route("/adminsignup").post(adminsignup)
router.route("/adminlogin").post(adminlogin)
router.route("/findadmin").get(findall)
router.route("/removeadmin/:id").delete(deleteadmin)
router.route("/updateadmin/:id").put(updateadmindetails)


router.route("/booking").post(booking)
router.route("/booking/:userId").get(getbooking)



module.exports=router