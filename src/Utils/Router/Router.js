import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from 'Components/Pages/Login';
import { history } from 'Utils/History';
import NetworkError from 'Components/Pages/Errors/NetworkError';
import Home from 'Components/Pages/Home/Home';

export default () => <Router history={history}>
    <main>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/network-error" component={ NetworkError } />
            <Route exact path="/home" component={Home} />
        </Switch>
    </main>
</Router>;
