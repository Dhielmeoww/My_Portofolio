import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('user')) || {}
;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    statLogin: (state, action) => {
      return action.payload
    },
    statLogout: (state, action) => {
      return { ...initialState };
    },
  },
});

export const { statLogin, statLogout } = userSlice.actions;
export default userSlice.reducer;
