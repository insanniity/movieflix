import React from 'react';
import {View , Image, Text} from 'react-native';
import { movieDetail } from '../../assets/styles';
import starImg from '../../assets/img/star.png';

const Avaliation : React.FC = () => {
    return (
        <View style={movieDetail.userAvaliation}>
            <View style={movieDetail.userAvaliationNameContainer}>
                <Image source={starImg} style={movieDetail.userStar} />
                <Text style={movieDetail.userAvaliationName}>Maria Silva</Text>
            </View>
            <Text style={movieDetail.userAvaliationComent}>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</Text>
        </View>
    );
}

export default Avaliation;