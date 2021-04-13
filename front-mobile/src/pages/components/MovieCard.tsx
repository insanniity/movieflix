import React from 'react';
import {Text, View , Image, TouchableOpacity} from 'react-native';
import { movieCard } from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';

interface MovieProps{
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
}

const MovieCard : React.FC<MovieProps> = ({id, title, subTitle, year, imgUrl}) => {
    const navigation = useNavigation();
    return (
        <View style={movieCard.card}>
            <Image source={{uri: imgUrl}} style={movieCard.cardImage}/>
            <View style={movieCard.textContainer}>
                <Text style={movieCard.cardTitle}>
                    {title}
                </Text>
                <Text style={movieCard.cardYear}>
                    {year}
                </Text>
                <Text style={movieCard.cardSubTitle}>
                    {subTitle}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate(`MovieDetail`, {id})} style={movieCard.viewDetailButton} activeOpacity={0.8}>
                    <Text  style={movieCard.viewDetailButtonText}>VER DETALHES</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MovieCard;