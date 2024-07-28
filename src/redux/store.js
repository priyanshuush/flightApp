
import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './slices/flightSlice';
import notificationReducer from './slices/notificationSlice';

const store = configureStore({
  reducer: {
    flights: flightReducer,
    notifications: notificationReducer
  }
});

export default store;
