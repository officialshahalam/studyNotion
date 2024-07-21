const Profile=require("../models/Profile");
const User = require("../models/User");
const {imageUploader}=require("../utils/imageUploader");


exports.updateProfile=async (req,res)=>{
    try{
        //fetcg data
        const {gender,DOB="",about="",phoneNumber}=req.body;
        //fetch userId
        const userId=req.user.id;
        //validation
        if(!gender || !phoneNumber || !userId){
            return res.status(404).json({
                success:false,
                message:"fields required all required field"
            });
        }
        //find profile update profile
        const userDetails=await User.findOne({_id:userId});
        const updatedProfile=await Profile.findByIdAndUpdate(
                                                            {_id:userDetails.additionalDetails},
                                                            {
                                                                gender:gender,
                                                                DOB:DOB,
                                                                about:about,
                                                                phoneNumber:phoneNumber
                                                            },
                                                            {new:true}
        );
        //return res
        return res.status(200).json({
            success:true,
            updatedProfile,
            message:"Profile updated successfully"
        });
    }
    catch(e){
        console.error("error while updating profile::",e);
        return res.status(500).json({
            success:false,
            message:"error while updating profile"
        });
    }
}

exports.getAllUserDetails = async (req, res) => {
    try {
        const id = req.user.id
        const userDetails = await User.findById(id)
                                                .populate("additionalDetails")
                                                .exec()
        res.status(200).json({
        success: true,
        data: userDetails,
        message: "User Data fetched successfully",
        })
    }   catch (error) {
        return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
}


exports.updateDisplayPicture = async (req, res) => {
    try {
        console.log("above displayPicture is::");
        const displayPicture = req.files.displayPicture
        console.log("displayPicture is::",displayPicture);
        const userId = req.user.id;
        const image = await imageUploader(displayPicture,process.env.FOLDER_NAME,100,50);
        const updatedProfile = await User.findByIdAndUpdate(
                                                        { _id: userId },
                                                        { imageUrl: image.secure_url },
                                                        { new: true }
                                                        )
                                                        .populate({
                                                            path:"additionalDetails"
                                                        });

      res.send({
        success: true,
        data: updatedProfile,
        message: `Image Updated successfully`,
      })
    } catch (e) {
        console.log(e)
      return res.status(500).json({
        success: false,
        message: e.message,
      })
    }
}

// TODO schedule this delete controller for 5 days
//delete account controller
exports.deleteAccount=async(req,res)=>{
    try{
        //fethch id
        const userId=req.user.id;
        //validation
        const userDetails=await User.findById(userId);
        if(!userDetails){
            return res.status(400).json({
                success:false,
                message:"User not Found",
            });
        }
        //profile delete
        await Profile.findByIdAndDelete({_id:userDetails.additionalDetails},);

        //TODO:- unenrole user from all enroled courses

        //uder delete
        await User.findByIdAndDelete({_id:userId});


        //return res
        return res.status(200).json({
            success:true,
            message:"User Deleted successfully",
        });
    }
    catch(e){
        console.error("error while deleting the account::",e);
        return res.status(500).json({
            success:false,
            message:"error while deleting the account",
        });
    }
}
