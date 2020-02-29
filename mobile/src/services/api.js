import axios from 'axios';

const api = axios.create({
    baseURL: 'http://', //define uri
});

export default api;