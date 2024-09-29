const Section =require("../models/Section");
const SubSection=require("../models/Subsection");
const Course=require("../models/Course");
const { findByIdAndUpdate } = require("../models/CourseProgress");
const { default: mongoose } = require("mongoose");

exports.createSection=async (req,res)=>{

    try{
        //fetch
        const {sectionName,courseId}=req.body;
        //validate
        if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:"All field are require",
            });
        }
        //create section
        const newSection=await Section.create({sectionName});
        //store section in array of courseContent
        const updatedCourse=await Course.findByIdAndUpdate(
                                                {_id:courseId},
                                                {
                                                    $push:{
                                                        courseContent:newSection._id
                                                    }
                                                },
                                                {new:true}
                                            ).populate({
                                                path:"courseContent",
                                                populate:{
                                                    path:"subsections"
                                                }
                                            });
        return res.status(200).json({
            success:true,
            updatedCourse,
            message:"Section created successfully",
        });
    }
    catch(e){
        console.error("error while creating section::",e);
        return res.status(500).json({
            success:false,
            message:"Error while creating section",
        });
    }
}

exports.updateSection=async (req,res)=>{
    try{
        //fetch data
        const {sectionName,sectionId}=req.body;
        //validate data
        if(!sectionName || !sectionId){
            return res.status(400).json({
                success:false,
                message:"All field are require",
            });
        }
        //update data
        const updatedSection=await Section.findByIdAndUpdate(
                                                            sectionId,
                                                            {sectionName:sectionName},
                                                            {new:true});
        //res
        return res.status(200).json({
            success:true,
            updatedSection,
            message:"Section updated successfully",
        });
    }
    catch(e){
        console.error("error while updating section::",e);
        return res.status(500).json({
            success:false,
            message:"Error while updating section",
        });
    }
}

exports.deleteSection=async (req,res)=>{
    try{
        //fetch id
        const {sectionId,courseId}=req.body;
        console.log(typeof(courseId))

        //delete associated video
        const sectionDetails=await Section.findOne({_id:sectionId});
        await SubSection.deleteMany({ _id: { $in: sectionDetails.subsections } });

        // find by id and delete
        await Section.findByIdAndDelete({_id:sectionId});

        console.log("hello above");
        //delete section from array of course
        const updatedCourse=await Course.findByIdAndUpdate(
            {_id:courseId},
            {
                $pull: {
                    courseContent: sectionId 
                }
            },
            {new:true}
        )
        .populate({
            path:"courseContent",
            populate:{
                path:"subsections"
            }
        });
        console.log(updatedCourse)
        // response
        return res.status(200).json({
            success:true,
            updatedCourse,
            message:"Section deleted successfully",
        });
    }
    catch(e){
        console.error("error while deleting section::",e);
        return res.status(500).json({
            success:false,
            message:"Error while deleting section",
        });
    }
}
