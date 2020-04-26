import axios from 'axios';

const ApiService = {
  get(resource, params) {
    return axios.get(`${resource}`, params);
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource, params) {
    return axios.delete(`${resource}`, params);
  },

  init() {
    const baseUrl = 'http://api.the-list.ru';

    axios.defaults.baseURL = baseUrl;

    axios.interceptors.request.use(async (config) => {
      const Authorization = await localStorage.getItem('token');

      config.headers = {
        Authorization,
        Accept: 'application/json',
      };

      return config;
    })
  }
}

export default ApiService;