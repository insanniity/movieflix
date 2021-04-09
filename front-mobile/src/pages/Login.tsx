import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { login, theme } from '../assets/styles';
import Button from './components/Button';
import eyeOpened from '../assets/img/eyes-opened.png';
import eyeClosed from '../assets/img/eyes-closed.png';


const Login : React.FC = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const navigation = useNavigation();
    return (
        <View style={theme.container}>
            <View style={login.card}>
                <Text style={login.title}>Login</Text>
                <View style={login.formContainer}>
                    <TextInput placeholder="Email" style={login.txtInput} autoCapitalize="none" keyboardType="email-address" />
                    <View style={login.passwordContainer}>
                        <TextInput placeholder="Senha" secureTextEntry={hidePassword} style={login.txtInput} autoCapitalize="none" />
                        <TouchableOpacity onPress={() =>setHidePassword(!hidePassword)} style={login.toggle}>
                            <Image source={hidePassword ? eyeClosed : eyeOpened } style={login.eyes}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={login.buttonContainer}>
                    <Button text="FAZER LOGIN" action={() => navigation.navigate('Movies')} icon={true}/>
                </View>
            </View>
        </View>
    )
}

export default Login;