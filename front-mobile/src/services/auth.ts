import React from 'react';
import queryString from 'query-string';
import { api, TOKEN } from '.';
import AsyncStorage from '@react-native-community/async-storage';

interface AuthProps {
    username: string;
    password: string;
}

export async function authLogin (userInfo:AuthProps){
    const data = queryString.stringify({...userInfo, grant_type: "password"});
    const result = await api.post('oauth/token', data, {
        headers:{
            Authorization: TOKEN,
            "Content-Type": "application/x-www-form-urlencoded",
        },       
    });
    const {access_token} = result.data;
    setAsyncKeys("@token", access_token);    
    return result;
    
}

export async function setAsyncKeys(key:string, value:string){
    try{
        await AsyncStorage.setItem(key, value);
    }catch(e){
        console.log(e);
    }
}

export async function isAuthenticated(){
    try{
        const token = await AsyncStorage.getItem("@token");       
        return token ? true : false;
    }catch(e){return false;}
}

export async function doLogout(){
    try{
        await AsyncStorage.removeItem('@token'); 
    }catch(e){
        console.log(e);
    }
}