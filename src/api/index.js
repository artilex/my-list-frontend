import axios from 'axios';

const Authorization = localStorage.getItem('token');

const axiosConnect = axios.create({
  baseURL: 'http://api.the-list.ru',
  headers: {
    Authorization,
    Accept: 'application/json',
  }
});

const ApiService = {
  get(resource, params) {
    return axiosConnect.get(`${resource}`, params);
  },

  post(resource, params) {
    return axiosConnect.post(`${resource}`, params);
  },

  put(resource, params) {
    return axiosConnect.put(`${resource}`, params);
  },

  delete(resource, params) {
    return axiosConnect.delete(`${resource}`, params);
  }
}

export default ApiService;