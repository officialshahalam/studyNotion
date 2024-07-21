const Category =require("../models/Category");

//01..create category handler
exports.createCategory=async(req,res)=>{
    try{
        //fetch data
        const {name,description}=req.body;
        //validation
        if(!name || !description){
            return res.status(404).json({
                success:false,
                message:"All field are required,please fill all the details",
            });
        }
        //check category already present
        const categoryDetails=await Category.findOne({name});
        if(categoryDetails){
            return res.status(500).json({
                success:false,
                message:"Category already created",
            });
        }
        //create entry in db
        const categoryResponse=await Category.create({name,description});
        console.log("categoryDetail::",categoryResponse);
        return res.status(200).json({
            success:true,
            message:"Category created successfully",
        })
    }
    catch(e){
        console.error("Error while creating category::",e);
        return res.status(500).json({
            success:false,
            message:"Error while creating category"
        })
    }
}

//02..get all category
exports.showAllCategory=async (req,res)=>{
    try{
        const allCategory=await Category.find({},{name:true,description:true});
        return res.status(200).json({
            success:true,
            allCategory,
            message:"all category's are return successfully"
        })
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Error while show all category"
        })
    }
}

//03.category page details
exports.categoryPageDetails=async (req,res)=>{
    try{
        //fetch categoryId
        const {categoryId}=req.body;
        console.log("category id::",categoryId);
        //get category details with all courses
        const categoryDetail=await Category.findById({_id:categoryId})
                                                                    .populate({
                                                                        path:"courses"
                                                                    })
                                                                    .exec();
        console.log("category detail",categoryDetail);                                                          

        //get other category details with all courses
        const otherCategoryDetails=await Category.find({_id:{$ne:categoryId}})
                                                                    .populate({
                                                                        path:"courses"
                                                                    })
                                                                    .exec();
        console.log("other category details",otherCategoryDetails);
        //TODO HW
        //get top courses with all courses 
        const allCategories = await Category.find()
                                                    .populate({
                                                    path: "courses",
                                                    })
                                                    .exec();
        const allCourses = allCategories.flatMap((category) => category.courses);
        const mostSellingCourses = allCourses.sort((a, b) => b.studentEnrolled.length - a.studentEnrolled.length)
                                            .slice(0, 10)                                                           

        //return res
        return res.status(200).json({
            success:true,
            data:{
                categoryDetail,
                otherCategoryDetails,
                mostSellingCourses
            }
        })
    }
    catch(e){
        console.error("error is::",e);
        return res.status(500).json({
            success:false,
            message:"Error while get category details",
        })
    }
}