import React from 'react';
import { TextInput, View } from 'react-native';
import { movieDetail } from '../../assets/styles';
import Button from './Button';

const Avaliation : React.FC = () => {
    return (
        <View style={movieDetail.card}>
            <View style={movieDetail.avaliation}>
                <TextInput multiline style={movieDetail.txtArea} placeholder="Deixe sua avaliação aqui"/>                    
                <Button text="SALVAR AVALIAÇÃO" action={() => {}} icon={false}/>
            </View>
        </View>
    );
}

export default Avaliation;