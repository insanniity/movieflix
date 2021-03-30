import "./styles.scss";
import { Movie } from "../../../core/types";

type Props ={
    movie : Movie;
}


const Card = ({ movie }: Props) => {
    return (       
            <div className="card bd-radius-10 movie-card bg-secondary box-shadow">
                <div className="card-body px-0">
                    <img src={movie.imgUrl} alt={movie.title} className="img-fluid movie-img" />                    
                    <div className="movie-card-text">
                        <h5 className="card-title">{movie.title.substring(0, 24)}</h5>
                        <h6 className="card-year text-primary">{movie.year}</h6>
                        <p className="card-description">{movie.subTitle ? movie.subTitle.substring(0, 41) : (<br />)}</p> 
                    </div>
                </div>
            </div>       
    )
}

export default Card;