import axios from 'axios';

import { interceptors } from './interceptors';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 180000,
});

interceptors.forEach((interceptor) => {
  interceptor(api);
});