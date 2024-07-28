
import axios from 'axios';

const NotificationService = {
  subscribe: async (data) => {
  
    return axios.post('https://api.example.com/notifications/subscribe', data);
  }
};

export default NotificationService;
