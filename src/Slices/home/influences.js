import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchinfluences = createAsyncThunk('influences/fetchinfluences',async () => {
  let res = await axios.get('api/v3/influences');
  let data = res.data;
  // let menu_rests=data.filter(item => item.menu_id === 6)
  return data;
})



export const influencesSlice = createSlice({
  name: 'influences',
  initialState:[],
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchinfluences.fulfilled,(state,action) => {
      return action.payload
    })
  }
});

// export const {  } = influencesSlice.actions;



export default influencesSlice.reducer;
