import React from 'react';
import Router from 'Utils/Router/Router';
import { SuspenseWrapper } from 'Components/UI/utils/SuspenseWrapper';
import Keycloak from 'keycloak-js';
import { KeycloakProvider } from 'react-keycloak';
import { userService } from 'Utils/User.service';

const keycloak = new Keycloak();
const initKeycloakProviderConfig = { onLoad: 'login-required' };

// eslint-disable-next-line camelcase
const keycloakUserToUser = ({email, sub, family_name, given_name}) => ({
  "email": email,
  "keyCloackUuid": sub,
  "lastName": family_name,
  "firstName": given_name,
  "login": "aaaaaaaaaaaaaa",
  "password": "aaaaaaaaaaaaaa",
  "pictureUrl": "https://www.gravatar.com/avatar/axccdcv?d=retro"
});

const handleSuccess = () => {
  userService.getConnectedUser().then(user =>{
    
      if(user.length === 0) {
        keycloak.loadUserInfo().then(data=> userService.createUser(keycloakUserToUser(data)));
      }
    }
  );
};

const onTokens = tokens => {
  window.localStorage.setItem('authToken', tokens.token);
};

const onEvent = (event, error) => {
  if(!error){
    switch (event) {
      case 'onAuthSuccess':
        window.localStorage.setItem('authenticated', keycloak.authenticated);
        window.localStorage.setItem('keycloakUUID', keycloak.tokenParsed.sub);
        handleSuccess();
        break;
      case 'onAuthLogout':
        window.localStorage.setItem('authenticated', false);
        window.localStorage.setItem('authToken', null);
        window.localStorage.setItem('keycloakUUID', null);
        break;
      case 'onTokenExpired':
        window.localStorage.setItem('authenticated', false);
        window.localStorage.setItem('authToken', null);
        break;
      default:
        break;
    }
  }
};

const App = () => {
  return <KeycloakProvider keycloak={keycloak} initConfig={initKeycloakProviderConfig} onTokens={onTokens} onEvent={onEvent}>
  <SuspenseWrapper>
    <Router />
  </SuspenseWrapper>
</KeycloakProvider>;
};

export default App;
