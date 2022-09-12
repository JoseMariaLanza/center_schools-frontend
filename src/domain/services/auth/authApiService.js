import axios from "axios";

export const authApiService = axios.create({
    baseURL: 'http://localhost:8000/api/1.1'
})