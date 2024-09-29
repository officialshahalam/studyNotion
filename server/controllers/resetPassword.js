const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt=require("bcrypt");
const {passwordUpdated}=require("../mail/templates/passwordUpdated");

// resetPasswordToken
exports.resetPasswordToken=async(req,res)=>{
    try{
        //fetch email 
        const {email}=req.body;
        //validation 
        if(!email){
            return res.status(401).json({
                success:false,
                message:"please fill email",
            });
        }
        //check user present or not
        const existingUser=await User.findOne({email});
        if(!existingUser){
            return res.status(401).json({
                success:false,
                message:"Your email is not register",
            });
        }
        //generate token
        const token=crypto.randomUUID();
        //add token,expire in user
        const updatedUser=await User.findOneAndUpdate(
                                                    {email},
                                                    {
                                                        resetPasswordToken:token,
                                                        resetPasswordTokenExpires:Date.now() + 5*60*1000,
                                                    },
                                                    {new:true}
        );
        // create url
        const url=`http://localhost:3000/reset-password/${token}`;
        // send mail containing the url
        await mailSender(email,"Password Reset Link",`reset password link ${url}`);
        //res
        return res.status(200).json({
            success:true,
            token,
            message:"reset password Mail is sent to your email,please check email",
        });
    }
    catch(e){
        console.error("Error while create reset password token::",e);
        return res.status(500).json({
            success:false,
            message:"Error while create reset password token"
        })
    }
}

//resetPassword
exports.resetPassword=async (req,res)=>{
    try{
        //fetch data
        const {password,confirmPassword,token}=req.body;    //token/UUID is field in req ki body by frontend
        //validation
        if(password !=confirmPassword){
            return res.status(400).json({
                success:false,
                message:"password and confirm password is not match"
            });
        }
        //get user from db by token/UUID
        const existingUser=await User.findOne({resetPasswordToken:token});

        if(!existingUser || Date.now() > existingUser.resetPasswordTokenExpires){
            return res.status(500).json({
                success:false,
                message:"invalid token,or expiress token"
            });
        }
        //hash password
        const hashedPassword=await bcrypt.hash(password,10);

        //update password
        await User.findOneAndUpdate(
                                {resetPasswordToken:token},
                                {
                                    password:hashedPassword,
                                    confirmPassword:hashedPassword
                                },
                                {new:true}
        )
        //send successfull mail
        await mailSender(existingUser.email,"password reset successfully",passwordUpdated(existingUser.email,`${existingUser.firstName} ${existingUser.lastName}`));
        //response send
        return res.status(200).json({
            success:true,
            message:"Password Updated successfully"
        });
    }
    catch(e){
        console.error("Error while updating password ::",e);
        return res.status(500).json({
            success:false,
            message:"error while updating password"
        });
    }
}