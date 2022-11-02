import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/data";

const initialState = {
    productData: productData
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        productName(state, action){
            return state.find(prodName => prodName.productName === action.payload)
        }
    },
    productInfo: (state, action) => {
        state.push({
            productName: action.payload
        })
    }
});

console.log(productSlice);