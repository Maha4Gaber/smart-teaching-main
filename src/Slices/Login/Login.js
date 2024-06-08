import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const NewLogin = createAsyncThunk('Login/NewLogin',async ( data ) => {
  let result
  await axios.post('api/v2/login/',data)
    .then(res => {
      result = res.data})
  .catch(err => console.log(err.response.data))
  // let result = res.data;
  console.log(result);
  return result;
})


export const LoginSlice = createSlice({
  name: 'Login',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(NewLogin.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = LoginSlice.actions;



export default LoginSlice.reducer;
