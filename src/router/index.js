import React from 'react';
import {
    Switch,
    Route,
    BrowserRouter
} from 'react-router-dom';
import App from '../App';
import Termo from '../pages/Termo';
import Dueto from '../pages/Dueto';
import Quarteto from '../pages/Quarteto';

const Router = () => {
    return (
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/termo' component={Termo} />
                    <Route exact path='/dueto' component={Dueto} />
                    <Route exact path='/quarteto' component={Quarteto} />
                </Switch>
            </App>
        </BrowserRouter>
    );
}

export default Router;