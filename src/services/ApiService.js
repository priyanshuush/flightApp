import axios from 'axios';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const ApiService = {
  getFlights: async () => {
    try {
      console.log('Fetching flight data...');
      const response = await axios.get('http://localhost:8080/api/flights');
      console.log('Flight data fetched successfully:', response.data);
      return response;
    } catch (error) {
      console.error('Error fetching flight data:', error);
      throw error;
    }
  },
  addFlight: async (flightData) => {
    try {
      console.log('Adding flight data...');
      const response = await axios.post('http://localhost:8080/api/flights/add', flightData);
      console.log('Flight added successfully:', response.data);
      return response;
    } catch (error) {
      console.error('Error adding flight data:', error);
      throw error;
    }
  },
  updateFlight: async (flightData) => {
    try {
      console.log('Updating flight data...');
      const response = await axios.post('http://localhost:8080/api/flights/update', flightData);
      console.log('Flight updated successfully:', response.data);
      return response;
    } catch (error) {
      console.error('Error updating flight data:', error);
      throw error;
    }
  },
  connectWebSocket: (onMessageReceived) => {
    console.log('Initializing WebSocket connection...');
    const socket = new SockJS('http://localhost:8080/ws');
    const stompClient = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        console.log('WebSocket connected successfully.');
        stompClient.subscribe('/topic/flightStatus', (message) => {
          console.log('Received WebSocket message:', message);
          onMessageReceived(JSON.parse(message.body));
        });
      },
      onStompError: (error) => {
        console.error('WebSocket error:', error);
      }
    });
    console.log('Activating WebSocket connection...');
    stompClient.activate();
  }
};

export default ApiService;
