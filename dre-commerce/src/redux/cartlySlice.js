import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData:[],
    userInfo: null,
};

export const cartlySlice=createSlice({
    name:"cartly",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const item = state.productData.find(
                (item)=> item._id === action.payLoad
            );
        },
    }
});

export const{
    addToCart
} = cartlySlice.actions;
export default cartlySlice.reducer;