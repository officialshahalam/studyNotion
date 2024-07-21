const mongoose=require("mongoose");

const profileSchema=mongoose.Schema({
    gender:{
        type:String,
        require:true,
        trim:true
    },
    DOB:{
        type:String,
        require:true,
    },
    about:{
        type:String,
        require:true,
        trim:true
    },
    phoneNumber:{
        type:Number,
        require:true
    }
});

module.exports=mongoose.model("Profile",profileSchema);