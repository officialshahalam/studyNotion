const mongoose=require("mongoose");


exports.dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Db connected successfully");
    }
    catch(e){
        console.error(e);
        console.log("error is",e);
        process.exit(1);
    }
}