const mongoose=require("mongoose");

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
    courses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }],

});

module.exports=mongoose.model("Category",categorySchema);