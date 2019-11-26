import React from 'react';
import { useTranslation } from 'react-i18next';
import { useKeycloak } from 'react-keycloak';

export default () => {
    const { t } = useTranslation('Login');
    const { keycloak } = useKeycloak();
    return (<>
        <h1>{t('title')}</h1>
        {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </>);
};
