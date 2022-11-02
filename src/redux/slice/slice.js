import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/data";

const initialState = {
    productData: productData
}

const productSlice = createSlice({
    name: 'product',
    initialState,
});

console.log(productSlice);