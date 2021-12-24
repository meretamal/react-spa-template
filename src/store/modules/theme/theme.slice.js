import { createSlice } from '@reduxjs/toolkit';

const initialState = { type: 'light' };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleType(state) {
      if (state.type === 'light') {
        state.type = 'dark';
      } else {
        state.type = 'light';
      }
    },
  },
});

export const { toggleType } = themeSlice.actions;
export default themeSlice.reducer;
