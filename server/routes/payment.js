const express=require("express");
const route=express.Router();
//import controller
const {capturePayment,verifySignature}=require("../controllers/payments");
const {auth,isStudent} = require("../middlewares/auth");


//map controller
route.post("/capturepayment",auth,isStudent,capturePayment);
route.put("/verifysignature",verifySignature);


module.exports=route;