import { toast } from "react-toastify";
import { settingsApi } from "../apis";
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slices/ProfileSlice";


export function updateDisplayPicture(token, formData) {
    return async (dispatch) => {
        const { UPDATE_DISPLAY_PICTURE_API } = settingsApi;
        const toadtId = toast.loading("Loading...");
        try {
            const response=await apiConnector(
                "PUT",
                UPDATE_DISPLAY_PICTURE_API,
                formData,
                {
                    "context-Type":"multipart/form-data",
                    Authorization :`Bearer ${token}`
                }
            )
            console.log("response of upload image:::",response);
            dispatch(setUser(response.data.data));
            localStorage.setItem("user",JSON.stringify(response.data.data));
            toast.success("image updated successfully");
            toast.dismiss(toadtId);
        }
        catch (e) {
            console.log("error while updating display picture:::",e);
            toast.error(e.message);
            toast.dismiss(toadtId);
        }
    }
}

export function updateProfile(token,data){
    return async(dispatch)=>{
        const toadId=toast.loading("Loading...");
        const {UPDATE_PROFILE_API}=settingsApi;
        try{
            const response=await apiConnector(
                "PUT",
                UPDATE_PROFILE_API,
                data,
                {
                    Authorization :`Bearer ${token}`
                }
            )
            console.log("responce of profile Update:::",response);
            localStorage.setItem("user",response.data.updatedUserDetails);
            dispatch(setUser(response.data.updatedUserDetails))
            toast.dismiss(toadId);
        }
        catch(e){
            console.log("error while update profile:::",e);
            toast.dismiss(toadId);
        }
        toast.dismiss(toadId);
    }
}