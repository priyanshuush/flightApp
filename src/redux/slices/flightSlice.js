import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ApiService from '../../services/ApiService';

const initialState = {
  flights: [],
  status: 'idle',
  error: null
};

export const fetchFlights = createAsyncThunk('flights/fetchFlights', async () => {
  const response = await ApiService.getFlights();
  return response.data;
});

const flightSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    updateFlightStatus: (state, action) => {
      const updatedFlight = action.payload;
      const index = state.flights.findIndex(flight => flight.flightId === updatedFlight.flightId);
      if (index !== -1) {
        state.flights[index] = updatedFlight;
      } else {
        state.flights.push(updatedFlight);  // Add new flight if it doesn't exist
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlights.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFlights.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.flights = action.payload;
      })
      .addCase(fetchFlights.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { updateFlightStatus } = flightSlice.actions;
export default flightSlice.reducer;
