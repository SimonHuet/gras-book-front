import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from 'Components/Pages/Login';
import Groups from 'Components/Pages/Groups';
import GroupForm from 'Components/Pages/Groups/form';
import GroupMessagingRoom from 'Components/Pages/Groups/messaging';
import { history } from 'Utils/History';
import NetworkError from 'Components/Pages/Errors/NetworkError';
import Profile from 'Components/Pages/Profile';
import ProfileEdit from 'Components/Pages/Profile/Edit';
import Navbar from 'Components/UI/Navbar';
import Search from 'Components/Pages/Search';
import Subs from 'Components/Pages/Subs';
import Home from 'Components/Pages/Home';

export default () => (
  <Router history={history}>
    <main>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/network-error" component={NetworkError} />
        <Route exact path="/Groups" component={Groups} />
        <Route exact path="/Groups/create" component={GroupForm} />
        <Route exact path="/Groups/:id" component={GroupMessagingRoom} />
        <Route exact path="/Groups/:id/edit" component={GroupForm} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profileEdit" component={ProfileEdit} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/subs" component={Subs} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </main>
  </Router>
);
