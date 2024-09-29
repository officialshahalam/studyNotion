const { default: mongoose } = require("mongoose");
const RatingAndReview = require("../models/RatingAndReview");
const Course=require("../models/RatingAndReview");

//create rating
exports.createRatingAndReview=async (req,res)=>{
    try{
        //fetch data
        const {rating,review,courseId}=req.body;
        //fetch userid
        const {userid}=req.user.id;

        //check user is enrolled or not
        const courseDetails=await Course.findOne({
                                                    _id:userid,
                                                    studentEnrolled:{$elemMatch: {$eq:userid}}
                                                });
        if(!courseDetails){
            return res.status(404).json({
                success:false,
                message:"Student is not enrolled in the course",
            });
        }
        //check already give review
        const alreadyReviewed=await RatingAndReview.findOne({
                                                                user:userid,
                                                                course:courseId
        });
        if(!alreadyReviewed){
            return res.status(403).json({
                success:false,
                message:"Course is already reviewed by the user",
            });
        }
        //create rating and review
        const ratingAndReview=await RatingAndReview.create({
                                                                rating,review,
                                                                course:courseId,
                                                                user:userid
        });
        //update course with rating review
        const updatedCourse=await Course.findByIdAndUpdate(
                                                            {_id:courseId},
                                                            {
                                                                $push:{
                                                                    ratingAndReviews:ratingAndReview._id
                                                                }
                                                            },
                                                            {new:true}
        );
        //return res
        return res.status(200).json({
            success:true,
            ratingAndReview,
            message:"Rating and revuew created successfully"
        });
    }
    catch(e){
        console.error("error while create rating and review::",e);
        return res.status(500).json({
            success:false,
            message:"error while create rating and review"
        });
    }
}



//getAvgRating
exports.getAvgRatingAndReview=async (req,res)=>{
    try{
        //fetch courseId
        const {courseId}=req.body;
        //cal agv rating   
        const result=await RatingAndReview.aggregate([
            {
                $match:{
                    course: mongoose.Types.ObjectId(courseId),
                }
            },
            {
                $group:{
                    _id:null,
                    avgRating: {$avg:"$rating"}
                }
            }
        ]);

        //return res
        if(result.length >0){
            return res.status(200).json({
                success:true,
                avgRating:result[0].avgRating,
            });
        }
        return res.status(200).json({
            success:true,
            avgRating:0,
            message:"Average rating is 0, No rating is give till now",
        });
        
    }
    catch(e){
        console.error("Error while get avg rating::",e);
        return res.status(500).json({
            success:false,
            message:"Error while get avg rating"
        })
    }
}



//getAllRatingAndReview
exports.getAllRatingAndReview=async (req,res)=>{
    try{
        const allReviews=await RatingAndReview.find({})
                                                .sort({rating:-1})
                                                .populate({
                                                    path:"user",
                                                    select:"firstName lastName email imageUrl"
                                                })
                                                .populate({
                                                    path:"course",
                                                    select:"courseName"
                                                })
                                                .exec();
        return res.status(200).json({
            success:true,
            data:allReviews,
            message:"All reviews are Fetch successfully",
        });

    }
    catch(e){
        console.error("Error while fetching the all reviews::",e);
        return res.status(500).json({
            success:false,
            message:"Error while fetching the all reviews",
        });
    }
}