const express = require("express");
const route = express.Router();
//import controller
const { updateProfile, deleteAccount, getAllUserDetails, updateDisplayPicture } = require("../controllers/settings");
const { auth } = require("../middlewares/auth");




//map controller
route.put("/updatedisplaypicture", auth, updateDisplayPicture);
route.put("/updateprofile", auth, updateProfile);
route.get("/getuserdetails", auth, getAllUserDetails);
route.delete("/deleteaccount", auth, deleteAccount);


module.exports = route;