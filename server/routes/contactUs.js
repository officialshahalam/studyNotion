const express=require("express");
const route=express.Router();


const {contactUs}=require("../controllers/contact");

route.post("/contact",contactUs);

module.exports=route;