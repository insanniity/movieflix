import './styles.scss';
import {ReactComponent as LoginImg} from '../../core/assets/images/login.svg'
import {ReactComponent as ArrowIcon } from '../../core/assets/images/arrow.svg';
import { useForm } from "react-hook-form";

type FormData ={
    email:string;
    password: string;
}

const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (data : FormData) => {
        console.log(data);
    };

    return (
        <div className="row">
            <div className="offset-lg-2 offset-sm-1 col-lg-4 col-sm-12">
                <h1 className="login-title">Avalie Filmes</h1>
                <h1 className="login-subtitle">Diga o que você achou do seu filme favorito</h1>
                <LoginImg className="login-img img-fluid" />
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className="card card-login bg-secondary bd-radius-20">
                    <div className="card-body">
                        <h1 className="card-title login-form-title text-center">LOGIN</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">                                
                                <input 
                                    placeholder="Email"
                                    type="email"
                                    className="form-control"
                                    name="username"
                                    ref={register({
                                        required: "Campo obrigatório",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email inválido"
                                        }})}
                                    />                                
                            </div>
                            <div className="form-group">                                
                                <input placeholder="Senha" type="password" className="form-control" name="password" ref={register({required: "Campo obrigatório"})}/>
                            </div> 
                            <div className="col-lg-12 text-center">
                                <div className="default-btn">
                                    <button className="btn btn-primary btn-icon">
                                        Logar
                                    </button>
                                    <div className="btn-icon-content d-flex">
                                        <ArrowIcon />
                                    </div>
                                </div>                             
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
    )
}

export default Login;