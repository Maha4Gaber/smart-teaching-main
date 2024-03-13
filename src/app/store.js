import { configureStore } from '@reduxjs/toolkit';
import influences from '../Slices/home/influences';


export const store = configureStore({
  reducer: {
    influences: influences,

  },
})