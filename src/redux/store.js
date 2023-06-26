import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reudcer: {
    google: googleReducer,
    apple: appleReducer,
    tesla: telsReducer,
    microsoft: microsoftReducer,
  },
});

export default store;
