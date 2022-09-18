import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_URL || 'http://localhost:3001',
    timeout: 1000,
});

export default instance