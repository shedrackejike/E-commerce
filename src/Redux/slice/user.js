import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'User Slice',
  initialState: {},
  reducers: {},
  extraReducers: {},
})

const userReducer = userSlice.reducer
export default userReducer;
