import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:sessionStorage.getItem("user") ? sessionStorage.getItem("user") : null,
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

