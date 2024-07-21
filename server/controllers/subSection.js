const Subsection =require("../models/Subsection");
const Section =require("../models/Section");
const { imageUploader } = require("../utils/imageUploader");


exports.createSubSection=async (req,res)=>{
    try{
        //fetch data
        const {sectionId,title,description,duration}=req.body;
        const {video}=req.files;
        console.log("video fetched",video);
        //validation
        if(!title || !description ||!duration ||!video || !sectionId){
            return res.status(404).json({
                success:false,
                message:"All field are require",
            });
        }

        //upload to cloudinary and get videoUrl
        const uploadVideoDetail=await imageUploader(video,process.env.FOLDER_NAME);


        //create a subsection
        const subSectionDetails=await Subsection.create({
            title:title,
            description:description,
            duration:duration,
            videoUrl:uploadVideoDetail.secure_url,
        })
        // push subsection id into section array
        const updatedSection=await Section.findByIdAndUpdate(
                                                            {_id:sectionId},
                                                            {
                                                                $push:{
                                                                    subsections:subSectionDetails._id, 
                                                                }
                                                            },
                                                            {new:true}
                                                            )
                                                            .populate({
                                                                path:"subsections"
                                                            });

        return res.status(200).json({
            success:true,
            updatedSection,
            message:"subsection created successfully",
        });                                                     
    }
    catch(e){
        console.log("error while creating subsection::",e);
        return res.status(500).json({
            success:false,
            message:"error while creating subsection",
        });
    }
}

//HW update
exports.updateSubSection=async (req,res)=>{
    try{ 
        //fetch data   
        const {subSectionId,title,description,duration}=req.body;
        const {video}=req.files;

        const uploadVideoDetail=await imageUploader(video,process.env.FOLDER_NAME);
    
        const updatedSubSection=await Subsection.findByIdAndUpdate(
                                                        {_id:subSectionId},
                                                        {
                                                            title:title,
                                                            description:description,
                                                            duration:duration,
                                                            videoUrl:uploadVideoDetail.secure_url,
                                                        },
                                                        {new:true}
                                                        );
        return res.status(200).json({
            success:true,
            updatedSubSection,
            message:"subsection updated successfully",
        });                                                       
    }
    catch(e){
        console.log("error while updating subsection::",e);
        return res.status(500).json({
            success:false,
            message:"error while updating subsection",
        });
    }
}

//HW delete subsection
exports.deleteSubSection=async (req,res)=>{
    try{
        //fetch data
        const {subsectionId,sectionId}=req.body;
        console.log("section idddd",sectionId);
        console.log("subsection idddddd",subsectionId);
        //delete from subsection
        await Subsection.findByIdAndDelete({_id:subsectionId},);
        //delete from section
        const updatedSection=await Section.findByIdAndUpdate(
                                                            {_id:sectionId},
                                                            {
                                                                $pull:{
                                                                    subsections:subsectionId,
                                                                }
                                                            },
                                                            {new:true}
                                                            ).populate({
                                                                path:"subsections",
                                                            });

        return res.status(200).json({
            success:false,
            updatedSection,
            message:"subsection delete successfully",
        })  ;                                                                                      

    }
    catch(e){
        console.log("error while delete subsection::",e);
        return res.status(500).json({
            success:false,
            message:"error while delete subsection",
        });
    }
}

