import React from 'react';
import Router from 'Utils/Router/Router';
import { SuspenseWrapper } from 'Components/UI/utils/SuspenseWrapper';

const App = () => <SuspenseWrapper>
  <Router />
</SuspenseWrapper>;

export default App;
