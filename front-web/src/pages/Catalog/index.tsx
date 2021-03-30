import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../../core/components/pagination'
import { Genre, MoviesResponse } from '../../core/types';
import { makePrivateRequest } from '../../core/utils/request';
import Card from './Card'
import SearchBar from './SearchBar';
import './styles.scss'

const Catalog = () => {
    const [moviesResponse, setMoviesReponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);   
    const [genre, setGenre] = useState<Genre>();


    const getMovies = useCallback(() => {
        const params ={
            page:activePage,
            linesPerPage: 12,
            genreId: genre?.id,
        }
        setIsLoading(true);
        makePrivateRequest({url:'/movies', params})        
        .then(response => setMoviesReponse(response.data))
        .finally(()=> {setIsLoading(false)});
    }, [activePage, genre]);

    useEffect(()=>{
        getMovies();
    }, [getMovies] );

    const handleChangeGenre = (genre: Genre) => {
        setActivePage(0);
        setGenre(genre);        
    }

    
    return (
        <>            
            <div className="row d-flex justify-content-center px-lg-5 px-md-0">
                <div className="col-lg-12  px-lg-0">
                    <SearchBar handleChangeGenre={handleChangeGenre} />
                </div>
            </div>
            <div className="row movie-container d-flex justify-content-start px-lg-4 px-md-0">  
                {
                    moviesResponse?.content.map(movie => (
                        <Link to={`/movie/${movie.id}`} key={movie.id} className="col-xl-2 col-lg-4 col-md-6 ">
                            <Card />
                        </Link>
                    ))
                }              
            </div>
            <div className="row d-flex justify-content-start-center">
                <div className="col-xl-12">
                    <Pagination totalPages={10} activePage={5} onChange={page => setActivePage(1)}/>
                </div>
            </div>
        </>
        
    )
}

export default Catalog;