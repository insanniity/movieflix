import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { moviesPage } from '../assets/styles';
import MovieCard from './components/MovieCard';
import SearchInput from './components/SearchInput';

const Movie : React.FC = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [load, setLoad] = useState(false);

    async function fillMovies(){
        setLoad(true);
        //const res = await api.get(`products`);
        //setMovies(res.data.content);
        setLoad(false);
    }

    useEffect(() => {
        fillMovies();
    }, [])


    return (
        <ScrollView contentContainerStyle={moviesPage.container}>            
            <SearchInput placeholder="Nome do filme" search={search} setSearch={setSearch}/>
            <MovieCard />
            <MovieCard /> 
            <MovieCard /> 
            <MovieCard /> 
            <MovieCard />             
        </ScrollView>
    )
}

export default Movie;