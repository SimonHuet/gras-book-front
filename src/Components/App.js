import React from 'react';
import Router from 'Utils/Router/Router';
import { SuspenseWrapper } from 'Components/UI/utils/SuspenseWrapper';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';

const keycloak = new Keycloak()
const initKeycloakProviderConfig = {onLoad: 'login-required'}
const App = () => <KeycloakProvider keycloak={keycloak} initConfig={initKeycloakProviderConfig}><div className="App container">
  <SuspenseWrapper>
    <Router />
  </SuspenseWrapper>
</div>
</KeycloakProvider>;

export default App;
