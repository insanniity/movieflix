import "./styles.scss";
import {ReactComponent as Star} from "core/assets/images/star.svg"

type Props ={
    name: string;
    coment: string;
}


const ReviewUser = ({name, coment}: Props) => {
    return(
        <div className="col-xl-12 mt-4">
            <div className="d-flex align-items-center mb-1">
                <Star className="ml-3"/>
                <span className="review-name">{name}</span> 
            </div>
            <div className="review-text ">{coment}</div>                                
        </div>
    )
}


export default ReviewUser;