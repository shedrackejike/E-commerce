import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/user";
import productReducer from "./slice/product";

const Store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer
  },
});

export default Store;
