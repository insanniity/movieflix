import './styles.scss'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
            <div className="col-6 text-left"><a className="navbar-brand" href="/">MovieFlix</a></div>
            <div className="col-6 text-right"><button className="btn btn-outline-dark" >Sair</button></div>   
        </nav>
    )
}

export default NavBar;