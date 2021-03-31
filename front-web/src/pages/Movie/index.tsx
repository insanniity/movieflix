import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import DetailMovieLoader from 'core/loaders/DetailMovieLoader';
import { Movie, ReviewResponse } from 'core/types';
import { isAllowedByRole } from 'core/utils/auth';
import { makePrivateRequest } from 'core/utils/request';
import ReviewUser from './components/Review';
import ReviewComent from './components/ReviewComent/';
import ComentsLoader from 'core/loaders/ComentsLoader';
import {ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';


type ParamsType = {
    movieId: string;
}


const MovieDetails = () => {    
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie ] = useState<Movie>();
    const [reviews, setReviews] = useState<ReviewResponse>();
    const [isLoadingMovie, setIsLoadingMovie] = useState(false); 
    const [isLoadingReviews, setIsLoadingReviews] = useState(false); 
    const [isSaveReview, setIsSaveReview] = useState(false);
    const history = useHistory();


    const onSave = () => {
        setIsSaveReview(!isSaveReview);
    };

    useEffect(() => {
        setIsLoadingMovie(true);       
        makePrivateRequest({url: `/movies/${movieId}`})
        .then(response => setMovie(response.data))
        .finally(() => setIsLoadingMovie(false));  
    }, [movieId]);


    useEffect(() => {
        const params = {movieId};
        setIsLoadingReviews(true);       
        makePrivateRequest({url: `/reviews`, params})
        .then(response => {setReviews(response.data);})
        .finally(() => {setIsLoadingReviews(false);});
    }, [movieId, isSaveReview]);

    return (
        <div className="container" >           
                <div className="row">                    
                    <div className="card bg-secondary bd-radius-10 box-shadow">
                        <div className="col-12 mt-3 d-flex return-catalog" onClick={() => history.push("/catalog") }>
                            <ArrowIcon className="movie-detail-arrow-icon text-primary"/>
                            <div className="movie-detail-arrow-text text-primary ml-3">Voltar</div>
                        </div> 
                        <div className="row px-3 py-4 align-items-center">
                            {isLoadingMovie ? <DetailMovieLoader /> : 
                                <>
                                    <div className="col-xl-6 "><img src={movie?.imgUrl} alt={movie?.title} className="img-fluid movie-detail-img"/></div>
                                    <div className="col-xl-6">
                                        <span className="movie-detail-title d-flex">{movie?.title}</span>                                
                                        <span className="movie-detail-year d-flex">{movie?.year}</span>                                
                                        <span className="movie-detail-subtitle d-flex">{movie?.subTitle ? movie.subTitle : (<br />)}</span>                                
                                        <div className="movie-detail-synopse">{movie?.synopsis}</div>                                
                                    </div>
                                </>
                            }
                        </div> 
                    </div>
                </div>
                {isAllowedByRole(['ROLE_MEMBER']) && <ReviewComent movieId={movieId} onSave={onSave}/>}
                {reviews?.content.length!==0 &&
                    <div className="row mt-3 mb-5">                    
                        <div className="col-xl-12 p-0 align-items-center">
                            <div className="card bg-secondary bd-radius-10 box-shadow px-3 pb-4">
                                {isLoadingReviews ? <ComentsLoader /> : reviews?.content.map(review => (<ReviewUser name={review.user.name} coment={review.text}/>)) }   
                            </div>
                        </div>
                    </div>
                }
        </div>
    )
}

export default MovieDetails;