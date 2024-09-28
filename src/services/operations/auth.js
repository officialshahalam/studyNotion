import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector";
import { authApi } from "../apis";
import { setLoading, setToken } from "../../slices/authSlice";
import { setUser } from "../../slices/ProfileSlice";

const {SENDOTP_API,SIGNUP_API,LOGIN_API,RESET_PASSWORD_TOKEN_API,RESET_PASSWORD_API}=authApi;

export function sendOtp(email, navigate) {
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector("POST", SENDOTP_API, {email,checkUserPresent: true});
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
            localStorage.setItem("token",response.data.token);
            localStorage.setItem("user",JSON.stringify(response.data.existingUser));
            toast.success(response.data.message);
            navigate("/dashboard/my-profile");
            window.location.reload();
        }
        catch(e){
            console.log("Error while login ::",e);
            toast.error(e.response.data.message);
        }
        toast.dismiss(toastId);
    }
}

export function logOut(navigate){
    return (dispatch)=>{
        dispatch(setToken(null));
        dispatch(setUser(null));
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        toast.error("Loged Out");
        navigate("/")
    }
}

export const resetPasswordToken=(email,setEmailSent)=>{
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const toastId=toast.loading("Loading...");
        try{
            console.log("url is ",RESET_PASSWORD_TOKEN_API);
            const response=await apiConnector("PUT",RESET_PASSWORD_TOKEN_API,{email});
            console.log("RESETPASSTOKEN RESPONSE....", response);
            toast.success(response.data.message);
            setEmailSent(true);
        }
        catch(e){
            console.log("Error while reset password token ::",e);
            toast.error(e.response.data.message);
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}

export const resetPassword=(password,confirmPassword,token,navigate)=>{
    return async (dispatch)=>{
        dispatch(setLoading(true));
        const toastId=toast.loading("Loading...");
        try{
            console.log("url is ::",RESET_PASSWORD_API);
            const response=await apiConnector("PUT",RESET_PASSWORD_API,{password,confirmPassword,token});
            console.log("RESETPASS RESPONSE....", response);
            toast.success(response.data.message);
            navigate("/login");
        }
        catch(e){
            console.log("Error while reset password ::",e);
            toast.error(e.response.data.message);
        }
        dispatch(setLoading(false));
        toast.dismiss(toastId);
    }
}