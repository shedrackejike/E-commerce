import { createSlice } from "@reduxjs/toolkit";
import { productData, categoriesData } from "../../static/data";

const initialState = {
    products: productData,
    categories: categoriesData
};

const productSlice = createSlice({
  name: 'Product Slice',
  initialState,
  reducers: {},
  extraReducers: {},
})

const productReducer = productSlice.reducer;
export default productReducer;