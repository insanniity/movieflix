import { useForm} from "react-hook-form";
import { toast } from "react-toastify";
import { makePrivateRequest } from "core/utils/request";
import "./styles.scss";

type FormComent ={
    text: String;
    movieId: number;   
}

type Props = {
    movieId: string;
    onSave: Function;
}

const ReviewComent = ({ movieId, onSave }: Props) => {
    const { register, handleSubmit, reset} = useForm<FormComent>({defaultValues:{text: ""}});   

    const onSubmit = (data : FormComent) => {
        data.movieId = Number(movieId); 
        makePrivateRequest({url: `/reviews`, method: "POST", data})
        .then(() =>{
            onSave();       
            toast.success("Comentário salvo com sucesso!");
            reset();             
        })
        .catch(() => {           
            toast.error("Ocorreu um erro tente novamente mais tarde.");
        });
    };

    return(
        <div className="row mt-3">
            <div className="col-xl-12 p-0 align-items-center text-center">
                <div className="card bg-secondary bd-radius-10 box-shadow p-4">                   
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">                                
                            <textarea 
                                placeholder="Deixe sua avaliação aqui"                               
                                className="form-control bd-radius-10"
                                rows={3}
                                name="text"
                                ref={register({required: "Campo obrigatório"})}
                                
                            />                                                                  
                        </div>                                                      
                        <div className="offset-xl-4 col-xl-4 text-center">                            
                            <button className="btn btn-primary btn-lg btn-block bd-radius-10 txt-btn-review-coment py-3">
                                Salvar Avaliação
                            </button>                    
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReviewComent;