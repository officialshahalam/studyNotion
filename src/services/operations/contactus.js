import { toast } from "react-toastify";
import {contactApi} from "../apis"
import { apiConnector } from "../apiConnector";

const {CONTACT_US_API}=contactApi;


export function contactUs(firstName,lastName,email,countryCode,PhoneNumber,message){
    return async (dispatch)=>{
        const toastId=toast.loading("Loading...");
        try{
            const response=await apiConnector("POST",CONTACT_US_API,{firstName,lastName,email,countryCode,PhoneNumber,message});
            console.log("Login response::",response);
            toast.success(response.data.message);
        }
        catch(e){
            console.log("Error while login ::",e);
            toast.error(e.response.data.message);
        }
        toast.dismiss(toastId);
    }
}