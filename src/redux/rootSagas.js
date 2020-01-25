import axios from 'axios';

class Api {
  instance;

  constructor(options = {}) {
    this.instance = axios.create({
      headers: {'X-Auth-Header': ''},
      ...options,
    });

    this.instance.interceptors.response.use((response) => {
      return response.data;
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const api = new Api().getInstance();

export const createRequest = (payload) => {
  return api(payload);
};
