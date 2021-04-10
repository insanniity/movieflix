import React from 'react';
import {Text, View , Image, TouchableOpacity} from 'react-native';
import { movieCard } from '../../assets/styles';
import movieImg from '../../assets/img/movie-img.png';
import { useNavigation } from '@react-navigation/native';


const MovieCard : React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={movieCard.card}>
            <Image source={movieImg} style={movieCard.cardImage}/>
            <View style={movieCard.textContainer}>
                <Text style={movieCard.cardTitle}>
                    O Retorno do Rei
                </Text>
                <Text style={movieCard.cardYear}>
                    2003
                </Text>
                <Text style={movieCard.cardSubTitle}>
                    O olho do inimigo está se movendo.
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('MovieDetail')} style={movieCard.viewDetailButton} activeOpacity={0.8}>
                    <Text  style={movieCard.viewDetailButtonText}>VER DETALHES</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MovieCard;