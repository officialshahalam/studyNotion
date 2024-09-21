import { createSlice } from "@reduxjs/toolkit";


const initialState={
    totalItem: sessionStorage.getItem("totalItem") ? sessionStorage.getItem("totalItem") : 0,
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        setTotalItem(state,value){
            state.totalItem=value.payload
        }
        //TODO H
        //add to cart
        //remove from cart
        //reset cart
    }
});

export const {setTotalItem }=cartSlice.actions;
export default cartSlice.reducer;

