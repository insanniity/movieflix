import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { login, theme } from '../assets/styles';
import Button from './components/Button';

const Login : React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={theme.container}>
            <View style={login.card}>
                <Text style={login.title}>Login</Text>
                <View style={login.formContainer}>
                    <TextInput placeholder="Email" style={login.txtInput} autoCapitalize="none" keyboardType="email-address" />
                    <TextInput placeholder="Senha" style={login.txtInput} autoCapitalize="none" />
                </View>
                <View style={login.buttonContainer}>
                    <Button text="FAZER LOGIN" action={() => navigation.navigate('Movies')} icon={true}/>
                </View>
            </View>
        </View>
    )
}

export default Login;