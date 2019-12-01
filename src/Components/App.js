import React from 'react';
import Router from 'Utils/Router/Router';
import { SuspenseWrapper } from 'Components/UI/utils/SuspenseWrapper';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';

<<<<<<< HEAD
const keycloak = new Keycloak();
const initKeycloakProviderConfig = { onLoad: 'check-sso' };
const App = () => <KeycloakProvider keycloak={keycloak} initConfig={initKeycloakProviderConfig}>
  <SuspenseWrapper>
    <Router />
  </SuspenseWrapper>
</KeycloakProvider>;
=======
const App = () => <SuspenseWrapper>
  <Router />
</SuspenseWrapper>;
>>>>>>> feat(): creating navbar , and generic appIcon component

export default App;
