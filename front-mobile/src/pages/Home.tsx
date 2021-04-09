import React from 'react';
import {Text, View, Image } from 'react-native';
import { theme, home } from '../assets/styles';
import homeImage from '../assets/img/home-image.png';
import Button from './components/Button';
import { useNavigation } from '@react-navigation/native';



const Home : React.FC = () => {
    const navigation = useNavigation();
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
                    <Button text="FAZER LOGIN" action={() => navigation.navigate('Login')} icon={true}/>
                </View>
            </View>
        </View>
    )
}

export default Home;