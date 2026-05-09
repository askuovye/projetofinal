import axios from 'axios';
import router from '../router';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

const http = axios.create({
  baseURL: API_BASE,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

http.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } return config;
})

http.interceptors.response.use(response => response, error => {
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        router.default.push('/login');
    }
    return Promise.reject(error);

})


export default http;