import React from 'react';
import { Box } from '@material-ui/core';
import Error from 'Components/UI/Error/Error';
import { useTranslation } from 'react-i18next';

export default ({ user, userFetchError }) => {
    const { t } = useTranslation('UserProfile');

    return <Box>
        {userFetchError && 
            <Error 
                title={t('user.error.title')}
                message={t('user.error.message')}
            />}
        {user && <p>user.first_name</p>}
        {user && <p>user.last_name</p>}
        
    </Box>;
};
