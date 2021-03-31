
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { isAuthenticated, logout } from '../utils/auth';
import './styles.scss'


const NavBar = () => { 
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        isAuthenticated();     
    }, [location]);

    const handleBrandClick = () => {
        if(isAuthenticated()){
            history.push("/catalog");            
        }else{
            history.push("/");
        }
    }

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();        
        logout();
        history.push('/');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="col-6 text-left"><div className="navbar-brand" onClick={handleBrandClick}>MovieFlix</div></div>
            {isAuthenticated() && (
                <div className="col-6 text-right"><a href="#logout" className="btn btn-outline-dark" onClick={handleLogout}>Sair</a></div>
            )}   
        </nav>
    )
}

export default NavBar;
