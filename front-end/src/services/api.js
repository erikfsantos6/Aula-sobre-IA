import axios from "axios";

const api = axios.create({
    // endereço do seu backend
    baseURL: 'http://localhost:3001',
    // Definir um tempo limite para as requisições
    timeout: 5000
})

export default api;