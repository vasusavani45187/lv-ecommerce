import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com', // Replace with actual API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
