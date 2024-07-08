import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  number: '',
};

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setQuerySearchByName: (state, action) => {
      state.name = action.payload;
    },
    setQuerySearchByNumber: (state, action) => {
      state.number = action.payload;
    },
  },
});

export const { setQuerySearchByName, setQuerySearchByNumber } = querySlice.actions;

export default querySlice.reducer;