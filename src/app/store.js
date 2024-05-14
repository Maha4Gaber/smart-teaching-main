import { configureStore } from '@reduxjs/toolkit';
import influences from '../Slices/home/influences';
import comments from '../Slices/blog/comments';
// import Comments from '../Slices/blog/comments';


export const store = configureStore({
  reducer: {
    influences: influences,
    Comments: comments,
    // Comments:CommentsSlice.reducer
  },
})