import { configureStore } from '@reduxjs/toolkit';
import appleReducer from './apple/appleSlice';

const store = configureStore({
  reducer: {
    apple: appleReducer,
  },
});

const selectApple = (store) => store.apple;

export { selectApple };

export default store;
