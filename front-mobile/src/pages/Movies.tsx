import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { moviesPage } from '../assets/styles';
import { getMovies } from '../services';
import { isAuthenticated } from '../services/auth';
import MovieCard from './components/MovieCard';
import SearchInput from './components/SearchInput';

interface MoviesProps{
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
}

interface Genres {
    id: number;
    name: string;
}


const Movie : React.FC = () => {
    const [search, setSearch] = useState<Genres>({id: 0, name: "Selecione o genero"});
    const [movies, setMovies] = useState<MoviesProps[]>([]);
    const [load, setLoad] = useState(false);
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

    async function fillMovies(){
        setLoad(true);
        const res = await getMovies(search.id);
        setMovies(res.data.content);
        setLoad(false);
    }

    useEffect(() => {
        fillMovies();
    }, [search])


    return (
        <View style={moviesPage.page}>
            <ScrollView contentContainerStyle={moviesPage.container}>            
                <SearchInput setSearch={setSearch} search={search}/>
                {   load ? (<ActivityIndicator size="large"/>) :
                    (movies.map(movie =>(<MovieCard {...movie} key={movie.id}/>)))
                }                           
            </ScrollView>
        </View>
    )
}

export default Movie;