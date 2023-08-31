import axios from 'axios';
import { BASE_URL } from 'constants/api';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/vnd.github+json',
  }
})

instance.interceptors.request.use(
  (config) => {
    const GIT_TOKEN = process.env.REACT_APP_GIT_TOKEN;

    if (GIT_TOKEN) config.headers.Authorization = `Bearer ${GIT_TOKEN}`
    return config;
  },
  (error) => {
    return error;
  },
);