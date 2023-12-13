import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}


const productSlice = createSlice({
    name: 'Product Slice',
    initialState,
    reducers: {},
    extraReducers: {}
});

const productReducer = productSlice.reducer;
export default productReducer