import { BrowserRouter, Switch , Route, Redirect} from 'react-router-dom';
import NavBar from './core/components/navbar';
import PrivateRoute from './core/components/privateroute';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Movie from './pages/Movie';
import { isAuthenticated } from './core/utils/auth';
import React from 'react';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <div className="container-fluid content">
                <Switch>                    
                    <Route path="/" exact>
                        {(isAuthenticated()) ? (<Redirect to={{pathname: "/catalog"}}/>) : (<Login />) }                        
                    </Route>
                    <PrivateRoute path="/catalog">
                        <Catalog />
                    </PrivateRoute>
                    <PrivateRoute path="/movie">
                        <Movie />
                    </PrivateRoute>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Routes;