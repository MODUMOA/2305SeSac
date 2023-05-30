import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.212.56/api',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});
