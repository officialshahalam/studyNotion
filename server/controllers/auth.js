const { create, findOne, findByIdAndUpdate } = require("../models/CourseProgress");
const User =require("../models/User");
const Otp=require("../models/Otp");
const otpGenerator=require("otp-generator");
const bcrypt =require("bcrypt");
const Profile = require("../models/Profile");
const jwt=require("jsonwebtoken");
const mailSender = require("../utils/mailSender");


//send otp
exports.sendOtp=async(req,res)=>{
    try{
        //fetch data
        const {email}=req.body;
        //check user already exist or not
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(500).json({
                success:false,
                message:"User already Exist",
            });
        }

        //generate 
        var otp= otpGenerator.generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false
        });
        console.log("Otp generated is::",otp); 

        //check top is unique
        const result=await Otp.findOne({otp:otp});
        while(result){
            otp= otpGenerator.generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false
            });
            result=await Otp.findOne({otp});
        }

        //create entry in db
        const otpPayload={email,otp};
        const otpBody=await Otp.create(otpPayload);
  
        res.status(200).json({
            success:true,
            otp:otpBody.otp,
            message:"OTP sent successfully",
        });
    }
    catch(e){
        console.error(e);
        res.status(500).json({
            success:false,
            message:"error while create otp in db"
        })
    }
}
//signup
exports.signUp=async(req,res)=>{
    try{
        //fetch data
        const {accountType,firstName,lastName,email,phoneNumber,password,confirmPassword,otp}=req.body;
        console.log("otp is:::",otp);
        //validate
        if(!accountType||!firstName||!lastName||!email||!password||!confirmPassword||!otp){
            return res.status(400).json({
                success:false,
                message:"All fields are required, Please fill all the field",
            });
        }
        
        //match pass and confirm-pass
        if(password != confirmPassword){
            return res.status(400).json({
                success:false,
                message:"Password not match",
            });
        }
        //check user already exist
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist",
            });
        }
        //find most recent otps
        const recentotp=await Otp.find({email}).sort({createdAt:-1}).limit(1);

        console.log("resent otp is:::",recentotp);

        if(recentotp.length === 0){
            return res.status(400).json({
                success:false,
                message:"OTP not Found",
            });
        }

        //metch otp
        
        else if(otp != recentotp[0].otp){
            return res.status(400).json({
                success:false,
                message:"OTP not Match",
            });
        }

        //hash password
        const hashedPassword=await bcrypt.hash(password,10);

        //entry create in db
        const profileDetails=await Profile.create({
            gender:null,
            DOB:null,
            about:null
        });
        const user=await User.create({
            accountType,
            firstName,
            lastName,
            email,
            phoneNumber,
            password:hashedPassword,
            additionalDetails:profileDetails._id,
            imageUrl:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName}%20${lastName}`,
        });

        //return res
        return res.status(200).json({
            success:true,
            user,
            message:"User is Registered Successfully",
        });
    }
    catch(e){
        console.error("error while sign up::",e)
        return res.status(500).json({
            success:false,
            message:"User can not Registered ,Please try again Later",
        });
    }
}
//login
exports.login=async (req,res)=>{
    try{
        //fetch data
        const {email,password}=req.body;
        //validate data
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"All field are required,Please fill all the details"
            });
        }
        //check user exist or not
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(400).json({
                success:false,
                message:"User not exist please,SignUp first then try again",
            });
        }
        //check password and create JWT
        if(await bcrypt.compare(password,existingUser.password)){
            //create JWt
            const payload ={
                email:existingUser.email,
                id:existingUser._id,
                accountType:existingUser.accountType,
            }
            const token =jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"})
            existingUser.token=token,
            existingUser.password="bhag du abhi password";

            //create cookie 
            const options={
                expries: new Date(Date.now()+ 3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                existingUser,
                message:"Loged in successfully",
            });
        }
        else{
            return res.status(400).json({
                success:false,
                message:"password is not correct",
            });
        }
    }
    catch(e){
        console.error("error ehile login::",e);
        return res.status(500).json({
            success:false,
            message:"error occure while login",
        });
    }
}

//password change
exports.changePassword=async (req,res)=>{
    try{
        //fetch data
        const {oldPassword,newPassword,confirmNewPassword}=req.body;
        const user=await User.find(req.user.id);
        // validate
        if(!oldPassword || !newPassword || !confirmNewPassword){
            return res.status(400).json({
                success:false,
                message:"All fields are requires"
            });
        }
        if(await bcrypt.compare(oldPassword,user.password)){
            const hashedNewPassword=await bcrypt.hash(newPassword,10);
            const updatedUser=await findByIdAndUpdate(user.id,{password:hashedNewPassword},{new:true});
            //send mail notification
            try{
                await mailSender(user.email,"Password for your account has been updated",`password updated for the user${updatedUser.firstName} ${lastName}`);
                return res.status(200).json({
                    success:true,
                    message:"Password updated successfully",
                });
            }
            catch(e){
                console.error("Error while sending mail to of update password".e);
                return res.status(500).json({
                    success:false,
                    message:"Error while sending mail to of update password",
                });
            }
        }
        else{
            return res.status(500).json({
                success:false,
                message:"incorrect old password",
            });
        }
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Error while update password",
        });
    }
}