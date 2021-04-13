import React from 'react';
import queryString from 'query-string';
import { api, TOKEN } from '.';
import AsyncStorage from '@react-native-community/async-storage';
import jwtDecode from 'jwt-decode';

interface AuthProps {
    username: string;
    password: string;
}

type Role = 'ROLE_MEMBER' | 'ROLE_VISITOR';

type AccessToken = {
    exp:number,
    user_name:string,
    authorities: Role[], 
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

export async function isAllowedByRole (routeRoles: Role[] = []) {    
    if(routeRoles.length === 0){ return false}
    const { authorities } = await getAccessTokenDecoded();
    return routeRoles.some(role => authorities?.includes(role));
}


export async function getAccessTokenDecoded<AccessToken>() {
    const token = await AsyncStorage.getItem("@token"); 
    try{
        if(token){
            const tokenDecode = jwtDecode(token);
            return tokenDecode as AccessToken;
        }
        return {} as AccessToken;
    }catch(error){
        return {} as AccessToken;
    }
}