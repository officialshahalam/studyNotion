const mongoose=require("mongoose");

const rationAndReviewSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    course: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "Course",
		index: true,
	},
    rating:{
        type:Number,
        require:true
    },
    review:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model("RatingAndReview",rationAndReviewSchema);