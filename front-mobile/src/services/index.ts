import axios from 'axios';

const BASE_URL = "http://192.168.3.27:8080";

export const api = axios.create({
    baseURL: BASE_URL,
})


export const TOKEN =  "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";