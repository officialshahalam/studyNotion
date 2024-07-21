const express=require("express");
const route=express.Router();

//import controller
const {createCategory,showAllCategory,categoryPageDetails}=require("../controllers/category");
const {createCourse,showAllCourses,getCourseDetails}=require("../controllers/course");
const {createSection,updateSection,deleteSection}=require("../controllers/section");
const {createSubSection,updateSubSection,deleteSubSection}=require("../controllers/subSection");
const {createRatingAndReview,getAvgRatingAndReview,getAllRatingAndReview}=require("../controllers/ratingAndReview");

//import middleware
const {auth,isStudent,isInstructor,isAdmin}=require("../middlewares/auth");



//map controller
// ********************************************************************************************************
//                                      Category routes (Only by Admin)
// ********************************************************************************************************

route.post("/createcategory",auth,isAdmin,createCategory);
route.get("/showallcategory",showAllCategory);
route.get("/categorypagedetaild",categoryPageDetails);


// ********************************************************************************************************
//                                      Course Routes
// ********************************************************************************************************
route.post("/createcourse",auth,isInstructor,createCourse);
route.get("/showallcourses",showAllCourses);
route.get("/getcoursedetails",getCourseDetails);




// ********************************************************************************************************
//                                      section Routes
// ********************************************************************************************************
route.post("/createsection",auth,isInstructor,createSection);
route.put("/updatesection",auth,isInstructor,updateSection);
route.delete("/deletesection",auth,isInstructor,deleteSection);




// ********************************************************************************************************
//                                      sub section Routes
// ********************************************************************************************************
route.post("/createsubsection",auth,isInstructor,createSubSection);
route.put("/updatesubsection",auth,isInstructor,updateSubSection);
route.delete("/deletesubsection",auth,isInstructor,deleteSubSection);




// ********************************************************************************************************
//                                      rating and review Routes
// ********************************************************************************************************
route.post("/createratingandreview",auth,isStudent,createRatingAndReview);
route.get("/getavgratingandreview",getAvgRatingAndReview);
route.get("/getallratingandreview",getAllRatingAndReview);


module.exports=route;