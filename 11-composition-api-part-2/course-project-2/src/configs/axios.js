import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  //   withCredentials: true,
});

export default axiosInstance;
