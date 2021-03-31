import React, { useEffect, useState } from "react";
import Select from 'react-select';
import { Genre } from "core/types";
import { makePrivateRequest } from "core/utils/request";
import './styles.scss';

type Props = {    
    genre?: Genre; 
    handleChangeGenre: (genre: Genre) => void;    
}

const SearchBar = ({genre , handleChangeGenre }:Props) => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [isLoadinGenres, setIsLoadingGenres] = useState(false);

    useEffect(() => {
        setIsLoadingGenres(true);
        makePrivateRequest({ url: '/genres'})
        .then(response => setGenres(response.data))
        .finally(() => setIsLoadingGenres(false));
    },[]);       
    

    return (
        <div className="card bg-secondary bd-radius-10 box-shadow">
            <div className="card-body py-2">
                <div className="input-group">
                    <Select                                                                      
                        name="genres"
                        key={`select-${genre?.id}`}
                        value={genre}                                    
                        isLoading={isLoadinGenres}
                        options={genres} 
                        getOptionLabel={(option: Genre)=> option.name}
                        getOptionValue={(option: Genre)=> String(option.id)}
                        className="filter-select-container col-xl-2 col-lg-4"                      
                        classNamePrefix="movies-genres-select" 
                        placeholder="Gênero" 
                        onChange={value => handleChangeGenre(value as Genre)}
                        isClearable
                    />                    
                </div>
            </div>
        </div>
    )
}

export default SearchBar;