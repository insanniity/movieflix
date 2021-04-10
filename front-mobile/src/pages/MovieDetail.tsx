import React from 'react';
import {Text, ScrollView, View, Image, TextInput } from 'react-native';
import { moviesPage, movieDetail, movieCard } from '../assets/styles';
import movieImg from '../assets/img/movie-img.png';
import starImg from '../assets/img/star.png';
import Avaliation from './components/Avaliation';
import UserAvaliation from './components/UserAvaliation';

const MovieDetail : React.FC = () => {
    return (
        <ScrollView contentContainerStyle={moviesPage.container}>
            <View style={movieDetail.card}>
                <Text style={movieDetail.title}>
                    O Retorno do Rei
                </Text>
                <Image source={movieImg} style={movieCard.cardImage}/>
                <View style={movieDetail.txtContainer}>
                    <Text style={movieDetail.year}>
                        2003
                    </Text>
                    <Text style={movieDetail.subtitle}>
                        O olho do inimigo está se movendo
                    </Text>
                    <Text style={movieDetail.descriptionTitle}>
                        Sinopse
                    </Text>
                    <Text style={movieDetail.description}>
                        O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan, em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo, Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
                    </Text>
                </View>                
            </View>
            <Avaliation />
            <View style={movieDetail.card}>
                <View style={movieDetail.avaliationsContainer}>
                    <Text style={movieDetail.avaliationsTitle}>
                        Avaliações
                    </Text>
                    <UserAvaliation />
                    <UserAvaliation />
                    <UserAvaliation />
                    <UserAvaliation />
                </View>
            </View>
        </ScrollView>
    )
}

export default MovieDetail;