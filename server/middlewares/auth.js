const jwt=require("jsonwebtoken");


//auth
exports.auth=async(req,res,next)=>{
    try{
        //extract token
        const token=req.body.token
                    || req.cookies.token
                    || req.header("Authorization").replace("Bearer ","");

        console.log("token is ::",token);
        //check token
        if(!token){
            return res.json({
                success:false,
                message:"Token missing"
            });
        }
        //verify token 
        try{
            const decoded=await jwt.verify(token,process.env.JWT_SECRET);
            req.user=decoded;
        }
        catch(e){
            return res.status(500).json({
                success:false,
                message:"token is invalid",
            });
        }
        next();
    }
    catch(e){
        return res.status(401).json({
            success:false,
            message:"somthing went wrong while validating the token",
        });
    }
}
//isstudent
exports.isStudent=async (req,res,next)=>{
    try{
        if(req.user.accountType !== "student"){
            return res.status(500).json({
                success:false,
                message:"This is Protected routes for only Student",
            });
        }
        next();
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Role can dot be varify,please try again later"
        })
    }
}

//isinstructor
exports.isInstructor=async (req,res,next)=>{
    try{
        if(req.user.accountType !== "instructor"){
            return res.status(500).json({
                success:false,
                message:"This is Protected routes for only instructor",
            });
        }
        next();
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Role can dot be varify,please try again later"
        })
    }
}

//isadmin
exports.isAdmin=async (req,res,next)=>{
    try{
        if(req.user.accountType !== "admin"){
            return res.status(500).json({
                success:false,
                message:"This is Protected routes for only admin",
            });
        }
        next();
    }
    catch(e){
        return res.status(500).json({
            success:false,
            message:"Role can dot be varify,please try again later"
        })
    }
} 
