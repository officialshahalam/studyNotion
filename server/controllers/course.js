const Course=require("../models/Course");
const User=require("../models/User");
const Category=require("../models/Category");
const {imageUploader}=require("../utils/imageUploader");




//01..create course handler
exports.createCourse=async (req,res)=>{
    try{
        //fetch data
        const {category,courseName,courseDescription,whatYouWillLearn,price,tag,instructions}=req.body;
        //fetch thumbnail
        const {thumbnail}=req.files;


        //validation
        if(!courseName ||! courseDescription || !whatYouWillLearn || ! price || !category || !thumbnail){
            return res.status(404).json({
                success:false,
                message:"all field are required,Please fill all the details of Course"
            });
        }

        //check already created course 
        const courseDetails=await Course.findOne({courseName:courseName});
        if(courseDetails){
            return res.status(500).json({
                success:false,
                message:"this course is already created",
            })
        }
        
        //check user exist or not
        const userId=req.user.id;
        const instructorDetail=await User.findById(userId);
        
        if(!instructorDetail){
            return res.status(500).json({
                success:false,
                message:"Instructor details not Found"
            })
        }

        //check given category is valid or not
        const categoryDetails=await Category.findById(category);

        if(!categoryDetails){
            return res.status(500).json({
                success:false,
                message:"Category not Found"
            });
        }

        //upload to cloudinary
        const thumbnailImage=await imageUploader(thumbnail,process.env.FOLDER_NAME);

        //create an entry in db
        const newCourse=await Course.create({
            courseName,
            courseDescription,
            instructor:instructorDetail._id,
            whatYouWillLearn,
            price,
            category:categoryDetails._id,
            tag,
            thumbnail:thumbnailImage.secure_url,
            instructions
        });

        // add this course id in courses array of instructor 
        await User.findByIdAndUpdate(
            {_id:instructorDetail._id},
            {
                $push:{
                    courses: newCourse._id,
                }
            },
            {new:true}
        )
        // TODO
        //update category schema
        await Category.findByIdAndUpdate(
            {_id:categoryDetails._id},
            {
                $push:{
                    courses:newCourse._id,
                }
            },{new:true}
        );

        return res.status(200).json({
            success:true,
            newCourse,
            message:"Course Created successfully",
        });

    }
    catch(e){
        console.error("Error while creating course::",e);
        return res.status(500).json({
            success:false,
            message:"Error while creating course"
        })
    }
}


//02..get all courses handler
exports.showAllCourses=async (req,res)=>{
    try{
        const allCourses=await Course.find({}).populate("instructor").populate("category").exec();

        return res.status(200).json({
            success:true,
            allCourses,
            message:"Data of all courses are fetch"
        })

    }
    catch(e){
        console.error("error while fetching all courses::",e);
        return res.status(500).json({
            success:false,
            message:"error while fetching all courses",
        });
    }
}


//03 get all details of a course
exports.getCourseDetails=async (req,res)=>{
    try{
        //fetch courseId
        const {courseId}=req.body;


        //find coursedetails
        const courseDetails=await Course.findById(courseId)
                                                    .populate({
                                                        path:"instructor",
                                                        populate:{
                                                            path:"additionalDetails"
                                                        }
                                                    })
                                                    .populate("category")
                                                    .populate({
                                                        path:"courseContent",
                                                        populate:{
                                                            path:"subsections"
                                                        }
                                                    })
                                                    .populate("ratingAndReviews")
                                                    .exec();
        
        if(!courseDetails)                                                 {
            return res.status(404).json({
                success:false,
                message:"Could not found Course details with this course id"
            });
        }

        return res.status(200).json({
            success:true,
            data:courseDetails,
            message:"Course details fetched successfully",
        });
    }
    catch(e){
        console.error("error while fetching course details::",e);
        return res.status(500).json({
            success:false,
            message:"error while fetching course details"
        });
    }
}
