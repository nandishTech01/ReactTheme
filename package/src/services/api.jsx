import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Replace with your Spring Boot backend URL
});

export const getData = async () => {
  const response = await api.get('/data');
  return response.data;
};
