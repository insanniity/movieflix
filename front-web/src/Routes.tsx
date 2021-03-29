import { BrowserRouter, Switch , Route} from 'react-router-dom';
import NavBar from './core/components/navbar';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Movie from './pages/Movie';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="container-fluid content">
                <Switch>
                    <Route path="/" exact>
                        <Login />
                    </Route>
                    <Route path="/catalog">
                        <Catalog />
                    </Route>
                    <Route path="/movie">
                        <Movie />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Routes;