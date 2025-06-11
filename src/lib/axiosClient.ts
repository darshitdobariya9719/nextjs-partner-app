// lib/axiosClient.ts

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://api-beta.channelboost.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
  },
});

api.interceptors.request.use((config) => {
  // Example: Add auth headers or logging
  return config;
});

api.interceptors.response.use(
  (response) => response?.data,
  (error) => {
    console.log('error', error)
    console.log('API Error:', error.message);
    return Promise.reject(error);
  }
);

export default api;
