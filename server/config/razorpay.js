const Razorpay = require('razorpay');
const dotenv=require("dotenv");

dotenv.config();

console.log("key id",process.env.RAZORPAY_KEY);
console.log("key id",process.env.RAZORPAY_SECRET);


exports.instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
});