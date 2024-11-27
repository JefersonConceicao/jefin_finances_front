import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 1000
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt_token');
  if(token){
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
})

api.interceptors.response.use((response) => response, async(error) => {
  if(error.response && error.response.status == 401){
    localStorage.removeItem('jwt_token');
  }

  return Promise.reject(error);
})

export default api
