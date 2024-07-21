const mongoose=require("mongoose");
const mailSender = require("../utils/mailSender");
const emailVerification=require("../mail/templates/emailVerification");

const otpSchema=mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    otp:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:Date.now() + 5*60*1000,
    }
});

//TODO remove this sendVerificatiionMail function
async function sendVerificationMail(email,otp){
    try{
        const mailResponse=await mailSender(email,"Verification email from study notion",emailVerification(otp));
        console.log(mailResponse);

    }
    catch(e){
        console.log("error while sending mail",e);
    }
}

otpSchema.pre("save",async function (){
    await sendVerificationMail(this.email,this.otp);  
    // this.email and this.otp are accessed assuming they refer to the email and otp fields of the document being saved (otpSchema).
});





module.exports=mongoose.model("Otp",otpSchema);