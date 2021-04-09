import React from 'react';
import {Text, View } from 'react-native';
import { theme } from '../assets/styles';

const Login : React.FC = () => {
    return (
        <View style={theme.container}>
            <Text>
                Login
            </Text>
        </View>
    )
}

export default Login;