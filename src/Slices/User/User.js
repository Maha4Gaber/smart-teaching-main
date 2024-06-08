import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Newuser = createAsyncThunk("user/Newuser", async (data) => {
  let result;
  await axios
    .post("api/v2/login/", data)
    .then((res) => {
      result = res.data;
    })
    .catch((err) => console.log(err.response.data));
  // let result = res.data;
  // console.log(result);
  return result;
});

const data=JSON.parse(localStorage.getItem("user_data"))&&JSON.parse(localStorage.getItem("user_data"))
const initialState = {
  token: "",
  user_data: null,
  loading: false,
  refresh:'',
  error: "",
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = localStorage.getItem("token");
      state.refresh = localStorage.getItem("refresh");
      state.user_data = data;
    },
    user_logout: (state, action) => {
      state.user_data = null;
      state.token = null;
      state.refresh = null;
      localStorage.removeItem("token");
      localStorage.removeItem("refresh");
      localStorage.removeItem("user_data");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Newuser.fulfilled, (state, action) => {
      state.loading = false;
      state.token = action.payload.tokens.access;
      state.user_data = action.payload;
      localStorage.setItem("token", action.payload.tokens.access);
      localStorage.setItem("refresh",action.payload.tokens.refresh );
      localStorage.setItem("user_data",JSON.stringify(action.payload) );
    });
  },
});
export const {addToken,user_logout}  = UserSlice.actions
// export const {  } = UserSlice.actions;

export default UserSlice.reducer;
