import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import userReducer from './slices/userSlice';
export const store = configureStore({
  reducer: {
    filters: filterReducer,
    user: userReducer,
  },
});

export default store;
