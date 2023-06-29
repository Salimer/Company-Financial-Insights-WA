import { createSlice } from '@reduxjs/toolkit';
import fetchIS from '../thunk';

const initialState = {
  appleIS: [],
  isLoading: true,
  error: false,
  errMsg: '',
};

const appleSlice = createSlice({
  name: 'appleIS',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchIS.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchIS.fulfilled, (state, action) => {
        state.isLoading = false;
        state.appleIS = action.payload;
      })
      .addCase(fetchIS.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
        state.errMsg = action.payload;
      });
  },
});

export default appleSlice.reducer;
