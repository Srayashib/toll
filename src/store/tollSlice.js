// store/tollSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const tollSlice = createSlice({
  name: 'toll',
  initialState: {
    tollInfo: null,
  },
  reducers: {
    setTollInfo: (state, action) => {
      state.tollInfo = action.payload;
    },
  },
});

export const { setTollInfo } = tollSlice.actions;

export const selectTollInfo = (state) => state.toll.tollInfo;

export default tollSlice.reducer;
