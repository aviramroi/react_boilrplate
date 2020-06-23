import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main'

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Main} exact={true} />
        </Switch>
    </BrowserRouter>
 );

export default AppRouter;