import React from 'react';
import { Router, Switch, Route } from 'react-router';
import Login from '../../Components/Login';

export default () => <Router>
    <Switch>
        <Route exact path="/" component={Login}/>
    </Switch>
</Router>;
