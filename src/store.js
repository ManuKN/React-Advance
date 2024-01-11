import { configureStore } from "@reduxjs/toolkit";
import AppSliceReducer from "./AppSlice"

const store = configureStore({
    reducer:{
    user: AppSliceReducer,
    }
  });
  export default store