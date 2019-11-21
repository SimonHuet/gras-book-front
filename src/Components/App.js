import React from 'react';
import Router from 'Utils/Router/Router';
import { SuspenseWrapper } from 'Components/UI/utils/SuspenseWrapper';

const App = () => <div className="App">
  <SuspenseWrapper>
    <Router />
  </SuspenseWrapper>
</div>;

export default App;
