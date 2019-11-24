import React from 'react';
import Error from 'Components/UI/Error/Error';
import { useTranslation } from 'react-i18next';

export default () => {
    const { t } = useTranslation('NetworkError');
    return <Error
        title={t('error.title')} 
        message={t('error.message')} 
    />;
};
