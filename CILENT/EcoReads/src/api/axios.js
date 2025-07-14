import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

// ✅ Automatically attach token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;  // ✅ Fix here
  }
  return req;
});

export default API;
