import { AxiosError, AxiosInstance } from 'axios';

const authInterceptor = (instance: AxiosInstance) => {

  instance.interceptors.request.use((config) => {
    if (!config) {
      config = {};
    }
    if (!config.headers) {
      config.headers = {};
    }
    return Promise.resolve(config);
  });
};

const errorsInterceptor = (instance: AxiosInstance) => {
  // срабатывает на RESPONSE

  instance.interceptors.response.use(undefined, (error: AxiosError) => {
    if (error.response?.status === 401) {
      // clearToken('access');
      // clearToken('refresh');
      // history.push('/login');
    }

    // можно обрабатывать другие статусы http-запроса

    return Promise.reject(error);
  });
};

export const interceptors = [authInterceptor, errorsInterceptor];
