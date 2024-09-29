const cloudinary=require("cloudinary").v2;

exports.imageUploader=async(file,folder,height,qt)=>{
    const options={folder};
    if(height){
        options.height=height;
    }
    if(qt){
        options.quality=qt;
    }
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}