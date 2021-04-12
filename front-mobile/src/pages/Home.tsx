import React, { useEffect, useState } from 'react';
import {Text, View, Image } from 'react-native';
import { theme, home } from '../assets/styles';
import homeImage from '../assets/img/home-image.png';
import Button from './components/Button';
import { useNavigation } from '@react-navigation/native';
import { isAuthenticated } from '../services/auth';

const Home : React.FC = () => {
    const navigation = useNavigation(); 
    const [authenticated, setAuthenticated] = useState(false);   

    async function authSync() {
        setAuthenticated(await isAuthenticated());
    }

    useEffect(() => {
        authSync();
    }, []); 

    return (
        <View style={theme.container}>
            <View style={theme.card}>
                <Image source={homeImage} style={home.draw}/>
                <View style={home.titleContainer}>
                    <Text style={home.title}>Avalie filmes</Text>
                </View>
                <View style={home.subtitleContainer}>
                    <Text style={home.subtitle}>Diga o que você achou do seu {"\n"} filme favorito</Text>
                </View>
                <View style={home.buttonContainer}>
                    <Button text={authenticated ? "ACESSAR LISTA" : "FAZER LOGIN"} action={() => {authenticated ? navigation.navigate('Movies') : navigation.navigate('Login')}} icon={true}/>
                </View>
            </View>
        </View>
    )
}

export default Home;