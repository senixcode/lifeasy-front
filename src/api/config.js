import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.API_URL || 'https://lifeasy-back-production.up.railway.app',
    timeout: 1000,
});

export default instance