import React from 'react';
import { Router, Switch, Route } from 'react-router';
import Login from 'Components/Pages/Login';
import { history } from 'Utils/History';
import NetworkError from 'Components/Pages/Errors/NetworkError';

export default () => <Router history={history}>
    <main>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/network-error" component={ NetworkError } />
        </Switch>
    </main>
</Router>;
