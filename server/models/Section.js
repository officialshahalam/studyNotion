const mongoose=require("mongoose");

const sectionSchema=mongoose.Schema({
    sectionName:{
        type:String,
        require:true
    },
    subsections:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subsection",
    }],
});

module.exports=mongoose.model("Section",sectionSchema);