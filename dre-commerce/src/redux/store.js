import { configureStore } from '@reduxjs/toolkit'
import cartlyReducer from './cartlySlice';

export default configureStore({
  reducer: {
    cartly: cartlyReducer,
  },
})