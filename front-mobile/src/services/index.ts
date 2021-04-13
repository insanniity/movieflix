import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

//const BASE_URL = process.env.BASE_URL ?? 'http://localhost:8080';
const BASE_URL = "http://192.168.3.27:8080";

export const TOKEN =  "Basic bW92aWVmbGl4Om1vdmllZmxpeDEyMw==";

async function userToken(){
    const token = await AsyncStorage.getItem("@token");
    return token;
}


export const api = axios.create({
    baseURL: BASE_URL ?? "http://localhost:8080",
})


export async function getMovies(){
    const aToken = await userToken();
    const res = api.get(`movies`, {
        headers:{
            Authorization: `Bearer ${aToken}`,
        }
    });
    return res;
}

export async function getMovie(id:number) {
    const aToken = await userToken();
    const res = await api.get(`movies/${id}`, {
        headers:{
            Authorization: `Bearer ${aToken}`,
        }
    });
    return res.data;
}


export async function getReviews(moviedId:number){
    const aToken = await userToken();    
    const res = api.get(`reviews?movieId=${moviedId}`, {
        headers:{
            Authorization: `Bearer ${aToken}`,
        }
    });
    return res;
}