const mongoose=require("mongoose");

const courseSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    description:{
        type:String,
        require:true,
        trim:true,
    },

});


const categorySchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true,
    },
    description:{
        type:String,
        require:true,
        trim:true,
    },
    courses:[courseSchema],

});

module.exports=mongoose.model("Category",categorySchema);