import { Link } from 'react-router-dom';
import './styles.scss'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="col-6 text-left"><Link className="navbar-brand" to="/">MovieFlix</Link></div>
            <div className="col-6 text-right"><button className="btn btn-outline-dark" >Sair</button></div>   
        </nav>
    )
}

export default NavBar;