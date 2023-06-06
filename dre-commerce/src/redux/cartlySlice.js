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
                (item)=> item.id === action.payload.id
            );
            if(item){
                item.quantity += action.payload.quantity
            }else{
                state.productData.push(action.payload);
            }
            console.log(action.payload)
        }, 
        deleteItem: (state,action)=>{
            state.productData=state.productData.filter(
                (item)=>item.id !== action.payload
            );
        },
        resetCart: (state)=>{
            state.productData=[];
        },
        increamentQuantity: (state, action)=>{
            const item = state.productData.find(
                (item)=>item.id===action.payload.id
            );
            if(item){
                item.quantity++;
            }
        },
        decreamentQuantity: (state, action)=> {
            const item= state.productData.find(
                (item)=> item.id ===action.payload.id
            );
            if (item.quantity===1){
                item.quantity=1;
            }else{
                item.quantity--;
            }
        },
    },
});

export const{
    addToCart, 
    deleteItem, 
    resetCart, 
    increamentQuantity,
    decreamentQuantity} = cartlySlice.actions;
export default cartlySlice.reducer;