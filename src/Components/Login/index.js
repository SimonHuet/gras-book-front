import React from 'react';
import { useTranslation } from 'react-i18next';

export default () => { 
    const { t } = useTranslation('Login');
    return (<>
    <h1>{t('title')}</h1>
    <div>test</div>
</>)
}
