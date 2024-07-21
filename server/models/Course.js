const mongoose=require("mongoose");

const courseSchema=mongoose.Schema({
    courseName:{
        type:String,
        require:true,
        trim:true
    },
    courseDescription:{
        type:String,
        require:true,
        trim:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    whatYouWillLearn:{
        type:String,
        require:true,
        trim:true
    },
    price:{
        type:Number,
        require:true
    },
    thumbnail:{
        type:String,
        require:true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    tag: {
        type: [String],
        required: true,
    },
    courseContent:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Section",
    }],
    studentEnrolled:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    ratingAndReviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview",
    }],
    instructions: {
        type: [String],
    },
    createdAt: { 
        type: Date, 
        default: Date.now(),
    },
});

module.exports=mongoose.model("Course",courseSchema);