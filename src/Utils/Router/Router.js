import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from 'Components/Pages/Login';
import { history } from 'Utils/History';
import NetworkError from 'Components/Pages/Errors/NetworkError';
import Profile from 'Components/Pages/Profile';

export default () => <Router history={history}>
    <main>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/network-error" component={ NetworkError } />
            <Route exact path="/profile/:id" component={ Profile } />
        </Switch>
    </main>
</Router>;
