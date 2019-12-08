import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from 'Components/Pages/Login';
import Groups from 'Components/Pages/Groups';
import GroupForm from 'Components/Pages/Groups/form';
import GroupMessagingRoom from 'Components/Pages/Groups/messaging';
import { history } from 'Utils/History';
import NetworkError from 'Components/Pages/Errors/NetworkError';

export default () => (
  <Router history={history}>
    <main>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/network-error" component={NetworkError} />
        <Route exact path="/Groups" component={Groups} />
        <Route exact path="/Groups/create" component={GroupForm} />
        <Route exact path="/Groups/:id" component={GroupMessagingRoom} />
        <Route exact path="/Groups/:id/edit" component={GroupForm} />
      </Switch>
    </main>
  </Router>
);
