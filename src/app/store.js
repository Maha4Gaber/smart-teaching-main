import { configureStore } from '@reduxjs/toolkit';
import influences from '../Slices/home/influences';
import comments from '../Slices/blog/comments';
import Login from '../Slices/Login/Login';
import User from '../Slices/User/User';
// import Comments from '../Slices/blog/comments';


export const store = configureStore({
  reducer: {
    influences: influences,
    Comments: comments,
    userData: User,
    // Comments:CommentsSlice.reducer
  },
})