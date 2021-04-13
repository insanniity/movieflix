import React from 'react';
import {View , Image, Text} from 'react-native';
import { movieDetail } from '../../assets/styles';
import starImg from '../../assets/img/star.png';

interface User{    
    name: string,
}

interface Reviews{     
    text: string,
    user: User,    
}

const Avaliation = ({text, user}:Reviews) => {
    return (
        <View style={movieDetail.userAvaliation}>
            <View style={movieDetail.userAvaliationNameContainer}>
                <Image source={starImg} style={movieDetail.userStar} />
                <Text style={movieDetail.userAvaliationName}>{user.name}</Text>
            </View>
            <Text style={movieDetail.userAvaliationComent}>{text}</Text>
        </View>
    );
}

export default Avaliation;