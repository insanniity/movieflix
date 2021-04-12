import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { login, theme } from '../assets/styles';
import Button from './components/Button';
import eyeOpened from '../assets/img/eyes-opened.png';
import eyeClosed from '../assets/img/eyes-closed.png';
import { authLogin, isAuthenticated } from '../services/auth';


const Login : React.FC = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const navigation = useNavigation();
    const [userInfo, setUserinfo] = useState({username: "ana@gmail.com", password: "123456"});  
    const [authenticated, setAuthenticated] = useState(false);

    async function authSync() {
        setAuthenticated(await isAuthenticated());
    }
    
    useEffect(() => {        
        authSync();
        if(authenticated){                   
            navigation.navigate("Movies");
        }
    }, []); 

    async function handleLogin(){
        await authLogin(userInfo);
        navigation.navigate("Movies");
    }

    return (
        <View style={theme.container}>
            <View style={login.card}>
                <Text style={login.title}>Login</Text>
                <View style={login.formContainer}>
                    <TextInput 
                        placeholder="Email" 
                        style={login.txtInput} 
                        autoCapitalize="none" 
                        keyboardType="email-address" 
                        value={userInfo.username} 
                        onChangeText={
                            (e) =>{ 
                                const newUserInfo = { ...userInfo};
                                newUserInfo.username = e;
                                setUserinfo(newUserInfo);
                            }
                        }
                    />
                    <View style={login.passwordContainer}>
                        <TextInput 
                            placeholder="Senha" 
                            secureTextEntry={hidePassword} 
                            style={login.txtInput} 
                            autoCapitalize="none" 
                            value={userInfo.password}
                            onChangeText={
                                (e) =>{ 
                                    const newUserInfo = { ...userInfo};
                                    newUserInfo.password = e;
                                    setUserinfo(newUserInfo);
                                }
                            }
                        />
                        <TouchableOpacity onPress={() =>setHidePassword(!hidePassword)} style={login.toggle}>
                            <Image source={hidePassword ? eyeClosed : eyeOpened } style={login.eyes}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={login.buttonContainer}>
                    <Button text="LOGAR" action={handleLogin} icon={true}/>
                </View>
            </View>
        </View>
    )
}

export default Login;