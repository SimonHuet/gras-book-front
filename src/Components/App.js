import React from 'react';
import Router from 'Utils/Router/Router';
import { SuspenseWrapper } from 'Components/UI/utils/SuspenseWrapper';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';

const keycloak = new Keycloak();
const initKeycloakProviderConfig = { onLoad: 'login-required' };
const App = () => <KeycloakProvider keycloak={keycloak} initConfig={initKeycloakProviderConfig}>
  <SuspenseWrapper>
    <Router />
  </SuspenseWrapper>
</KeycloakProvider>;

export default App;
