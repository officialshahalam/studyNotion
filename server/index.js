//import 
const express=require("express");
const dotenv=require("dotenv");
const cookieParser=require("cookie-parser");
const fileUpload=require("express-fileupload");
const {dbConnect}=require("./config/database");
const {cloudinaryConnect}=require("./config/cloudinary");
const authRoutes=require("./routes/auth");
const contactRoutes=require("./routes/contactUs");
const courseRoutes=require("./routes/course");
const paymentRoutes=require("./routes/payment");
const profileRoutes=require("./routes/profile");
const cors=require("cors");




//01.create app
const app=express();

//02.load environment variable
dotenv.config();

//03.middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin:"*",
        Credentials:true
    })
);


app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//04.server listen
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`app is listening at port number ${PORT}`);
})

//05.db connect
dbConnect();

//06.cloudinary connect
cloudinaryConnect();

//07.append routes
app.use("/api/v1/auth",authRoutes);
app.use("/api/v1",contactRoutes);
app.use("/api/v1/course",courseRoutes);
app.use("/api/v1/payment",paymentRoutes);
app.use("/api/v1/profile",profileRoutes);

//08.default routes
app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Your server is up and running",
    });
});





 
