import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie, ReviewResponse } from '../../core/types';
import { isAllowedByRole } from '../../core/utils/auth';
import { makePrivateRequest } from '../../core/utils/request';
import ReviewUser from './components/Review';
import ReviewComent from './components/ReviewComent/';
import './styles.scss';


type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {    
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie ] = useState<Movie>();
    const [reviews, setReviews] = useState<ReviewResponse>();
    const [isLoading, setIsLoading] = useState(false); 

    useEffect(() => {
        setIsLoading(true);
        const params = {movieId};

        makePrivateRequest({url: `/movies/${movieId}`})
        .then(response => setMovie(response.data));     

        makePrivateRequest({url: `/reviews`, params})
        .then(response => setReviews(response.data))
        .finally(() => setIsLoading(false));


    }, [movieId]);

    return (
        <div className="container" >           
                <div className="row">
                    <div className="card bg-secondary bd-radius-10 box-shadow"> 
                        <div className="row px-3 py-4 align-items-center">
                            <div className="col-xl-6 "><img src={movie?.imgUrl} alt={movie?.title} className="img-fluid movie-detail-img"/></div>
                            <div className="col-xl-6">
                                <span className="movie-detail-title d-flex">{movie?.title}</span>                                
                                <span className="movie-detail-year d-flex">{movie?.year}</span>                                
                                <span className="movie-detail-subtitle d-flex">{movie?.subTitle ? movie.subTitle : (<br />)}</span>                                
                                <div className="movie-detail-synopse">{movie?.synopsis}</div>                                
                            </div>
                        </div> 
                    </div>
                </div>
                {isAllowedByRole(['ROLE_MEMBER']) && <ReviewComent movieId={movieId}/>}
                <div className="row mt-3">
                    <div className="col-xl-12 p-0 align-items-center">
                        <div className="card bg-secondary bd-radius-10 box-shadow px-3 pb-4">
                            {
                                reviews?.content.map(review => (<ReviewUser name={review.user.name} coment={review.text}/>))
                            }   
                        </div>
                    </div>
                </div>

                
        </div>
    )
}

export default MovieDetails;