const cloudinary=require("cloudinary").v2;

exports.imageUploader=async(file,folder,height,qt)=>{
    console.log("file:::",file);
    const options={folder};
    if(height){
        options.height=height;
    }
    if(qt){
        options.quality=qt;
    }
    console.log("inside uploader");
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath,options);
}