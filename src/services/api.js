import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aircnc-backed.herokuapp.com',
});

export default api;
