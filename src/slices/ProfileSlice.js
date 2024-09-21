import { createSlice } from "@reduxjs/toolkit";

console.log("fghjksc",localStorage.getItem("user"))
const initialState={
    user:localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

const ProfileSlice=createSlice({
    name:"profile",
    initialState,
    reducers:{
       setUser(state,value){
            state.user=value.payload
       }
    }
});

export const {setUser}=ProfileSlice.actions;
export default ProfileSlice.reducer;

