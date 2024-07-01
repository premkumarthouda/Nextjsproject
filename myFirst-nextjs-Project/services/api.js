import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const fetchUser = (username) => {
  return api.get(`/user/${username}`);
};

export const saveTree = (tree) => {
  return api.post('/tree', { tree });
};
