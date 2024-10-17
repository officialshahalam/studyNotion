import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/ProfileSlice"
import cartReducer from "../slices/cartSlice";
import courseReducer from "../slices/courseSlice"


const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    cart:cartReducer,
    course: courseReducer,
});

export default rootReducer;