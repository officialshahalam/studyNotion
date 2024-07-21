const express=require("express");
const route=express.Router();
//import controller
const {sendOtp,signUp,login,changePassword}=require("../controllers/auth");

const {resetPasswordToken,resetPassword}=require("../controllers/resetPassword");

//import middleware
const {auth}=require("../middlewares/auth");



//map controller
//*******************************************************************************************************************
//                                   Authentication routes
//*******************************************************************************************************************

route.post("/sendotp",sendOtp);
route.post("/signup",signUp);
route.post("/login",login);
route.post("/changePassword",auth,changePassword);


//*******************************************************************************************************************
//                                   reset password routes
//*******************************************************************************************************************
route.put("/resetpasswordtoken",resetPasswordToken);
route.put("/resetpassword",resetPassword);




module.exports=route;





