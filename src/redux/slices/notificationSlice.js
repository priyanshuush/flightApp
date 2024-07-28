
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import NotificationService from '../../services/NotificationService';

const initialState = {
  notifications: [],
  status: 'idle',
  error: null
};

export const subscribeToNotifications = createAsyncThunk(
  'notifications/subscribeToNotifications',
  async (notificationData) => {
    const response = await NotificationService.subscribe(notificationData);
    return response.data;
  }
);

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(subscribeToNotifications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(subscribeToNotifications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.notifications.push(action.payload);
      })
      .addCase(subscribeToNotifications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default notificationSlice.reducer;
