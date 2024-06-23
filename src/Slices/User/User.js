import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const Newuser = createAsyncThunk("user/Newuser", async (data) => {
  // try {
  let result='';
  let error='';
  await axios
    .post("api/v2/login/", data)
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      error = err.response.data;
      // return err.response.data;
    });
    return {result,error};

  // let result = res.data;
  // console.log(result);
  // } catch (err) {
  //   return console.error('err');
  // }
});

const data =
  JSON.parse(localStorage.getItem("user_data")) &&
  JSON.parse(localStorage.getItem("user_data"));
const initialState = {
  token: "",
  user_data: null,
  loading: false,
  refresh: "",
  error: null,
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
      window.location.reload();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Newuser.fulfilled, (state, action) => {
      state.loading = false;
      if(action.payload['result'] !==''){
      state.token = action.payload['result'].tokens.access;
      state.user_data =  action.payload['result'];
      localStorage.setItem("token", action.payload['result'].tokens.access);
      localStorage.setItem("refresh", action.payload['result'].tokens.refresh);
      localStorage.setItem("user_data", JSON.stringify(action.payload['result']));
      setTimeout(() => {
        if (action.payload['result'].role == "user") {
          window.location = "/StudentsRatingtheirTeachers";
        } else window.location = "/";
      }, 1900);
      }else{
      state.error = action.payload['error']
      console.log(action.payload);
      }
      
      // window.location = "/";
    });
  },
});
export const { addToken, user_logout } = UserSlice.actions;
// export const {  } = UserSlice.actions;

export default UserSlice.reducer;
