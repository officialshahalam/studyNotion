import { toast } from "react-toastify";
import { settingsApi } from "../apis";
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slices/ProfileSlice";
import { setToken } from "../../slices/authSlice";

const { UPDATE_DISPLAY_PICTURE_API, UPDATE_PROFILE_API, DELETE_ACCOUNT_API } = settingsApi;

export function updateDisplayPicture(token, formData) {
    return async (dispatch) => {
        const toadtId = toast.loading("Loading...");
        try {
            const response = await apiConnector(
                "PUT",
                UPDATE_DISPLAY_PICTURE_API,
                formData,
                {
                    "context-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`
                }
            )
            console.log("response of upload image:::", response);
            dispatch(setUser(response.data.data));
            localStorage.setItem("user", JSON.stringify(response.data.data));
            toast.success("image updated successfully");
            toast.dismiss(toadtId);
        }
        catch (e) {
            console.log("error while updating display picture:::", e);
            toast.error(e.message);
            toast.dismiss(toadtId);
        }
    }
}

export function updateProfile(token, data) {
    return async (dispatch) => {
        const toadId = toast.loading("Loading...");
        try {
            const response = await apiConnector(
                "PUT",
                UPDATE_PROFILE_API,
                data,
                {
                    Authorization: `Bearer ${token}`
                }
            )
            console.log("responce of profile Update:::", response);
            localStorage.setItem("user", JSON.stringify(response.data.updatedUserDetails));
            dispatch(setUser(response.data.updatedUserDetails))
            toast.dismiss(toadId);
        }
        catch (e) {
            console.log("error while update profile:::", e);
            toast.dismiss(toadId);
        }
        toast.dismiss(toadId);
    }
}

export function deleteAccount(token, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...");
        try {
            const response = await apiConnector(
                "DELETE",
                DELETE_ACCOUNT_API,
                null,
                {
                    Authorization: `Bearer ${token}`
                }
            )
            dispatch(setToken(null));
            dispatch(setUser(null));
            localStorage.clear();
            toast.error(response.data.message);
            toast.dismiss(toastId);
            navigate("/signup");
        }
        catch (e) {
            console.log("error while deleting account:::", e);
            toast.dismiss(toastId);
        }
    }
}