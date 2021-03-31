import './styles.scss';
import {ReactComponent as LoginImg} from '../../core/assets/images/login.svg';
import {ReactComponent as ArrowIcon } from '../../core/assets/images/arrow.svg';
import { useForm } from "react-hook-form";
import { makeLogin } from '../../core/utils/request';
import { useState } from 'react';
import { saveSessionData } from '../../core/utils/auth';
import { useHistory, useLocation } from 'react-router-dom';

type FormData ={
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}

const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory();
    const location = useLocation<LocationState>();   
    const { from } = location.state || { from: { pathname: "/catalog" } };

    

    const onSubmit = (data : FormData) => {
        makeLogin(data)
        .then(response=>{
            setHasError(false);
            saveSessionData(response.data);
            history.push(from);
        })
        .catch(() => {setHasError(true)});
    };

    return (
        <div className="row">
            <div className="offset-lg-2 offset-sm-1 col-lg-4 col-sm-12">
                <h1 className="login-title">Avalie Filmes</h1>
                <h1 className="login-subtitle">Diga o que você achou do seu filme favorito</h1>
                <LoginImg className="login-img img-fluid" />
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className="card card-login bg-secondary bd-radius-20 box-shadow">
                    <div className="card-body">
                        <h1 className="card-title login-form-title text-center">LOGIN</h1>
                        {hasError && (
                            <div className="alert alert-danger" role="alert">
                                Usuário ou senha inválido.
                            </div>                
                        )}
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
                                {errors.username && (
                                    <div className="invalid-feedback d-block">
                                        {errors.username.message}
                                    </div>
                                )}                                
                            </div>
                            <div className="form-group">                                
                                <input placeholder="Senha" type="password" className="form-control" name="password" ref={register({required: "Campo obrigatório"})}/>
                                {errors.password && (
                                    <div className="invalid-feedback d-block">
                                        {errors.password.message}
                                    </div>
                                )}
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