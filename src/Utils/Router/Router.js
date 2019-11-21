import React from 'react';
import { Router, Switch, Route } from 'react-router';
import Login from 'Components/Login';
import { history } from 'Utils/History';

export default () => <Router history={history}>
    <main>
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
    </main>
</Router>;
