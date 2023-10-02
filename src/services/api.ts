import axios from "axios";
import { getItem } from "../helpers/localStorage";


const API = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(
  (config) => {
    if (getUserDataToken() !== null) {
      const userToken = getUserDataToken() as string;
      config.headers['Content-Encoding'] = 'application/json';
      config.headers.Authorization = `Bearer ${userToken}`;
    }

    return config;
  },

  async (error) => await Promise.reject(error)
);

function getUserDataToken(): string | null {
  return getItem('token');
}

export default API;
