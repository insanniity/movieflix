import './core/assets/styles/custom.scss';
import './app.scss';
import NavBar from './core/components/navbar';
import Home from './pages/Home';

const App = () => {
    return(
        <>
            <NavBar />
            <div className="container content">
                <Home />
            </div>
        </>
    )  
}

export default App;