import "./styles.scss";
import {ReactComponent as MovieImg} from '../../../core/assets/images/movie-img.svg'

const Card = () => {
    return (
        <div className="col-xl-2 col-lg-4 col-md-6">
            <div className="card bd-radius-10 movie-card bg-secondary box-shadow">
                <div className="card-body px-0">
                    <MovieImg className="img-fluid movie-img"/>
                    <div className="movie-card-text">
                        <h5 className="card-title">O Retorno do Rei</h5>
                        <h6 className="card-year text-primary">2013</h6>
                        <p className="card-description">O olho do inimigo está se movendo.</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;