import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";

const Store = configureStore({
  reducer: {
    productReducer,
  },
});

export default Store;
