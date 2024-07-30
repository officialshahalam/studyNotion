const mongoose=require("mongoose");

const ContactUsInfoSchema=mongoose.Schema({
    firstName:{
        type:String,
        require:true
    },
    lastName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    PhoneNumvber:{
        type:Number,
        require:true
    },
    message:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model("ContactUsInfo",ContactUsInfoSchema);