import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from 'Components/Pages/Login';
import { history } from 'Utils/History';
import NetworkError from 'Components/Pages/Errors/NetworkError';
import Home from 'Components/Pages/Home/Home';
import Groups from 'Components/Pages/Groups';
import Profile from 'Components/Pages/Profile';
import messaging from 'Components/Pages/Groups/messaging';

export default () => <Router history={history}>
    <main>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/network-error" component={ NetworkError } />
            <Route exact path="/home" component={Home} />
            <Route exact path="/Groups/:id" component={Groups} />
            <Route exact path="/profile/:id" component={ Profile } />
            <Route exact path="/messages/:id" component={ messaging } />
        </Switch>
    </main>
</Router>;
