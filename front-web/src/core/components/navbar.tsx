
import { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';
import './styles.scss'


const NavBar = () => { 
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        if(isAuthenticated()){
            setIsLogged(true);
        }else{
            setIsLogged(false);
        }       
    }, [location]);


    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();        
        logout();
        history.push('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="col-6 text-left"><Link className="navbar-brand" to="/">MovieFlix</Link></div>
            {isLogged && (
                <div className="col-6 text-right"><a href="#logout" className="btn btn-outline-dark" onClick={handleLogout}>Sair</a></div>
            )}   
        </nav>
    )
}

export default NavBar;
