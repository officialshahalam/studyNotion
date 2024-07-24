import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { authApi } from "../apis";

const {SENDOTP_API,SIGNUP_API,LOGIN_API}=authApi;

export function sendOtp(email, navigate) {
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("POST", SENDOTP_API, {email,checkUserPresent: true,});
            console.log("response of send otp is ",response);
            toast.success("OTP Sent Successfully")
            navigate("/verify-email")
        } 
        catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
        toast.dismiss(toastId)
    }
}

export function signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate){
    return async (dispatch)=>{
        const toastId=toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",SIGNUP_API,{accountType,firstName,lastName,email,password,confirmPassword,otp});
            console.log("Signup response::",response);
            toast.success(response.data.message);
            navigate("/login");
        }
        catch(e){
            console.log("Error while signup::",e);
            toast.error(e.response.data.message);
        }
        toast.dismiss(toastId);
    }
}

export function login(email,password,navigate){
    return async (dispatch)=>{
        const toastId=toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",LOGIN_API,{email,password});
            console.log("Login response::",response);
            toast.success(response.data.message);
            navigate("/dashboard");
        }
        catch(e){
            console.log("Error while login ::",e);
            toast.error(e.response.data.message);
        }
        toast.dismiss(toastId);
    }

}