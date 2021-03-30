import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import Pagination from '../../core/components/pagination'
import { Genre, MoviesResponse } from '../../core/types';
import { makePrivateRequest } from '../../core/utils/request';
import Card from './Card'
import SearchBar from './SearchBar';
import './styles.scss'
import Pagination from "react-js-pagination";


const Catalog = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [activePage, setActivePage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);   
    const [genre, setGenre] = useState<Genre>();
    

    const getMovies = useCallback(() => {
        const params ={
            page: activePage-1,
            linesPerPage: 12,
            genreId: genre?.id,
        }
        setIsLoading(true);
        makePrivateRequest({url:'/movies', params})        
        .then(response => setMoviesResponse(response.data))
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
                            <Card movie={movie}/>
                        </Link>
                    ))
                }              
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-xl-12">                    
                    {moviesResponse && 
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={12}
                            totalItemsCount={moviesResponse.totalElements}
                            pageRangeDisplayed={5}
                            onChange={page => setActivePage(page)}
                            itemClass="pagination-item"
                            activeClass="page-active"
                            activeLinkClass="page-active-link"                            
                            innerClass="pagination justify-content-center"
                            hideDisabled={true}                            
                        />
                    }
                </div>
            </div>
        </>
        
    )
}

export default Catalog;