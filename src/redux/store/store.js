import { configureStore } from "@reduxjs/toolkit";
import { priceReducer } from "../slice/slice";
export const store = configureStore({
  reducer: priceReducer
})