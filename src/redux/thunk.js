import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Get income statement data
const fetchIS = createAsyncThunk('companies/getAppleIS', async ({ url }, thunkAPI) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(`API call error ${e.message}`);
  }
});

export default fetchIS;
