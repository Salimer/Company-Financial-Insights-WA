import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appleIS: [],
  isLoading: true,
  error: undefined,
};

const appleSlice = createSlice({
  name: 'appleIS',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAppleIS.pending, (state) => {
        state.isLoading = true;
      });
  },
});
