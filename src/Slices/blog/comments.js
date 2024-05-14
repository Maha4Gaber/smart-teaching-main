import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchComments = createAsyncThunk('Comments/fetchComments',async ({commentfor,blog_id}) => {
    await axios.get("api/v3/comments/?"+commentfor+'=' + blog_id).then(res=>{
    // console.log(res);
    let data = res.data;
    console.log(data);
    return data;
  })
  .catch(err=>{
    console.log(err);
  })
})

// 

export const CommentsSlice = createSlice({
  name: 'Comments',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled,(state,action) => {
      
      return action.payload
    })
  }
});

// export const {  } = CommentsSlice.actions;



export default CommentsSlice.reducer;
