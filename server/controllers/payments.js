const {instance}=require("../config/razorpay");
const Course=require("../models/Course");
const User=require("../models/User");
const mailSender=require("../utils/mailSender");
const {courseEnrollmentEmail}=require("../mail/templates/courseEnrollment");
const { default: mongoose } = require("mongoose");
const crypto =require("crypto");



// capture payment and initialised the order
exports.capturePayment=async (req,res)=>{
    //get courseId and userId
    const {courseId}=req.body;
    const {userId}=req.user.id;
    typeof("Type of user id::",userId);
    // validate
    // validate courseId
    if(!courseId){
        return res.status(500).json({
            success:false,
            message:"Please provide valid course id"
        });
    }
    // valid course
    let course;
    try{
        course =await findById(courseId);
        if(!course){
            return res.status(500).json({
                success:false,
                message:"Could not find the course"
            });
        }
        // user already pay for the course
        const uid=new mongoose.Types.ObjectId(userId);
        if(course.studentEnrolled.includes(uid)){
            return res.status(500).json({
                success:false,
                message:"Students are already enrolled",
            });
        }
    }
    catch(e){
        console.error(e.message);
        return res.status(500).json({
            success:false,
            message:e.message,
        });
    }

    //create order
    const amount=course.price;
    const currency="INR";

    const options={
        amount:amount*100,
        currency,
        receipt:Math.random(Date.now()).toString(),
        notes:{
            courseId:courseId,
            userId:userId
        }
    }
    try{
        //initiate the payment
        const paymentResponse=await instance.orders.create(options);
        // return res
        return res.status(200).json({
            success:true,
            courseName:course.courseName,
            courseDescription:course.courseDescription,
            thumbnail:course.thumbnail,
            orderId:paymentResponse.id,
            currency:paymentResponse.currency,
            amount:paymentResponse.amount
        })
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Could not initiate the payment"
        })
    }
}

exports.verifySignature=async (req,res)=>{ 
    const webhookSecret="12345678";    //server signature

    const signature=req.headers["x-razorpay-signature"];      //rajarpay  signature , this encrypted

    //conver webhookSignature into same formate like signature from razorpay
    const shasum=await crypto.createHmac("sha256",webhookSecret);
    shasum.update(JSON.stringify(req.body));
    const digest=shasum.digest("hex");

    if(signature===digest){

        //action after successfully authentication
        
        const {courseId,userId}=req.body.payload.payment.entity.notes;

        try{
            //course ke enrolledStudent me user ki id insert karo
            const updatedCourse=await Course.findByIdAndUpdate(
                                                                {_id:courseId},
                                                                {
                                                                    $push:{
                                                                        studentEnrolled:userId,
                                                                    }
                                                                },
                                                                {new:true}
            );

            // user ke ander course ke ander course id insert kr dege
            const updatedUser=await User.findByIdAndUpdate(
                                                            {_id:userId},
                                                            {
                                                                $push:{
                                                                    courses:courseId
                                                                }
                                                            },
                                                            {new:true}
            );

            // confirmation mail send karo
            const mailResponse=await mailSender(
                                                updatedUser.email,
                                                "congratulation from Study notion",
                                                courseEnrollmentEmail(updatedCourse.courseName,
                                                                    `${updatedUser.firstName} ${updatedUser.lastName}`
                                                ),
            );

            return res.status(200).json({
                success:true,
                message:"Course is added successfully"
            });
        }
        catch(e){
            console.error("Error while payment::",e);
            return res.status(500).json({
                success:false,
                message:"error while payment"
            })
        }
    }
    else{
        return res.status(500).json({
            success:false,
            message:"Signature is not Matched",
        })
    }
}