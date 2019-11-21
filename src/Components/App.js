import React, { Suspense } from 'react';
import Router from 'Utils/Router/Router';

const App = () => {
  return (
  <div className="App">
    <Suspense fallback="loading">
      <Router />
    </Suspense>
  </div>);
};

export default (App);
