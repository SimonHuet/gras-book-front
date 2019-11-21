import React from 'react';
import { Router, Switch, Route } from 'react-router';
<<<<<<< HEAD
import Login from '../../Components/Login';

export default () => <Router>
    <Switch>
        <Route exact path="/" component={Login}/>
    </Switch>
</Router>;
=======
import Login from 'Components/Login';
import { history } from 'Utils/History';

export default () => <Router history={history}>
    <main>
        <Switch>
            <Route exact path="/(login/|login)" component={Login} />
        </Switch>
    </main>
</Router>;
>>>>>>> fix(): fix router and add History
