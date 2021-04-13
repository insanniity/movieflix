import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import { moviesPage } from '../assets/styles';
import { getMovies } from '../services';
import MovieCard from './components/MovieCard';
import SearchInput from './components/SearchInput';

interface MoviesProps{
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
}


const Movie : React.FC = () => {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState<MoviesProps[]>([]);
    const [load, setLoad] = useState(false);

    async function fillMovies(){
        setLoad(true);
        const res = await getMovies();
        setMovies(res.data.content);
        setLoad(false);
    }

    useEffect(() => {
        fillMovies();
    }, [])


    return (
        <ScrollView contentContainerStyle={moviesPage.container}>            
            <SearchInput placeholder="Nome do filme" search={search} setSearch={setSearch}/>
            {   load ? (<ActivityIndicator size="large"/>) :
                (movies.map(movie =>(<MovieCard {...movie} key={movie.id}/>)))
            }                           
        </ScrollView>
    )
}

export default Movie;