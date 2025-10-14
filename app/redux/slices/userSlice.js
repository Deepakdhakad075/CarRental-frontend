import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  user: null,
  token: null,
  isLoggedIn: false,
};

// Try to load saved data from localStorage or cookies
const savedUser = localStorage.getItem('user');
const savedToken = Cookies.get('__user__token');

if (savedUser && savedToken) {
  initialState.user = JSON.parse(savedUser);
  initialState.token = savedToken;
  initialState.isLoggedIn = true;
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;

      // Persist data
      localStorage.setItem('user', JSON.stringify(user));
      Cookies.set('__user__token', token, { expires: 7 });
      Cookies.set('__user__isLoggedIn', true, { expires: 7 });
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;

      // Clear storage
      localStorage.removeItem('user');
      Cookies.remove('__user__token');
      Cookies.remove('__user__isLoggedIn');
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
