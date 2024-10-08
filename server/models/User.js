const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    accountType:{
        type:String,
        require:true,
        enum:["student","instructor","admin"],
    },
    firstName:{
        type:String,
        require:true,
    },
    lastName:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        trim:true
    },
    phoneNumber:{
        type:Number,
        require:true,
    },
    password:{
        type:String,
        require:true,
        trim:true
    },
    confirmPassword:{
        type:String,
        require:true
    },
    imageUrl:{
        type:String,
        require:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile"
    },
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course"
    }],
    courseProgress:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"CourseProgress",
    }],
    resetPasswordToken:{
        type:String,
        require:true
    },
    resetPasswordTokenExpires:{
        type:Date
    }
});

module.exports=mongoose.model("User",userSchema);