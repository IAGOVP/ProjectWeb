import axios from 'axios';

const api = axios.create({baseURL: 'https://reqres.in/api/users?page=2'});

export default api;