import React, { useEffect, useState } from 'react';
import {Text, ScrollView, View, Image, ActivityIndicator } from 'react-native';
import { moviesPage, movieDetail, movieCard } from '../assets/styles';
import Avaliation from './components/Avaliation';
import UserAvaliation from './components/UserAvaliation';
import { getMovie, getReviews } from '../services';
import { isAllowedByRole, isAuthenticated } from '../services/auth';
import { useNavigation } from '@react-navigation/native';

interface User{
    name: string,
}

interface Reviews{  
    id: number,
    text: string,
    user: User,
}
    

const MovieDetail = ({route:{params:{id}}}:any) => {

    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: null,
        synopsis: null,
        genreId: null,
    });

    const [reviews, setReviews] = useState<Reviews[]>([]);
    const [loadMovie, setLoadMovie] = useState(false);
    const [loadReviews, setLoadReviews] = useState(false);
    const [allowComent, setAllowComent] = useState(false);

    const [updateComents, setUpdateComents] = useState(false);

    const navigation = useNavigation();
    const [authenticated, setAuthenticated] = useState(true);

    async function authSync() {
        setAuthenticated(await isAuthenticated());
    }
    
    useEffect(() => {        
        authSync();
        if(!authenticated){                   
            navigation.navigate("Login");
        }
    }, []); 

    function updateReviews(){
        setUpdateComents(!updateComents);
    }
    
    async function verifyPemission() {
        setAllowComent(await isAllowedByRole(['ROLE_MEMBER']));
    }

    async function loadMovieData() {
        setLoadMovie(true);
        const res = await getMovie(id);        
        setMovie(res);
        setLoadMovie(false);
    }

    async function loadReviewData() {
        setLoadReviews(true);
        const res = await getReviews(id);        
        setReviews(res.data.content);       
        setLoadReviews(false);
    }


    useEffect(()=> {
        loadMovieData();        
        verifyPemission()
    }, []);

    useEffect(() => {loadReviewData();}, [updateComents]);

    return (
        <View style={moviesPage.page}>
            <ScrollView contentContainerStyle={moviesPage.container}>
                {loadMovie ? (<ActivityIndicator size="large" />) : (<>
                    <View style={movieDetail.card}>
                        <Text style={movieDetail.title}>
                            {movie.title}
                        </Text>
                        <Image source={{uri: String(movie.imgUrl)}} style={movieCard.cardImage}/>
                        <View style={movieDetail.txtContainer}>
                            <Text style={movieDetail.year}>
                                {movie.year}
                            </Text>
                            <Text style={movieDetail.subtitle}>
                                {movie.subTitle}
                            </Text>
                            <Text style={movieDetail.descriptionTitle}>
                                Sinopse
                            </Text>
                            <Text style={movieDetail.description}>
                                {movie.synopsis}
                            </Text>
                        </View>                
                    </View>
                    {allowComent && <Avaliation movieId={id} updateReviews={updateReviews}/>}                
                    {loadReviews ?  (<ActivityIndicator size="large" />) : 
                        <View style={movieDetail.card}>
                            <View style={movieDetail.avaliationsContainer}>
                                <Text style={movieDetail.avaliationsTitle}>
                                    Avaliações
                                </Text>
                                {   
                                    reviews.map(review =>(<UserAvaliation {...review} key={review.id}/>))
                                } 
                            </View>
                        </View>
                    }
                </>)}
            </ScrollView>
        </View>
    )
}

export default MovieDetail;