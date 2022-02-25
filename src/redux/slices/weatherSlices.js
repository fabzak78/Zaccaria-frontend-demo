import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchWeatherAction = createAsyncThunk(
  "weather/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    console.log(payload)
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/getCity?city=${payload.city},${payload.country}`,
        {
          headers: {
            'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).token,
          'Content-Type': 'application/json',
          }
        }
      );
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slice

const weatherSlice = createSlice({
    name: "weather",
    initialState: {},
    extraReducers: builder => {
      //pending
      builder.addCase(fetchWeatherAction.pending, (state, action) => {
        state.loading = true;
      });
      //fulfilled
      builder.addCase(fetchWeatherAction.fulfilled, (state, action) => {
        state.weather = action?.payload;
        state.loading = false;
        state.error = undefined;
      });
      //rejected
      builder.addCase(fetchWeatherAction.rejected, (state, action) => {
        state.loading = false;
        state.weather = undefined;
        state.error = action?.payload;
      });
    },
  });
  
  export default weatherSlice.reducer;


