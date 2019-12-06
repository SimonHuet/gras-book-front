import React from 'react';
import { Box, Grid } from '@material-ui/core';
import Error from 'Components/UI/Error/Error';
import { useTranslation } from 'react-i18next';

export default ({ user, userFetchError }) => {
    const { t } = useTranslation('UserProfile');

    return <Box>
        <Grid item xs={12}>
            <Grid>
            {userFetchError &&
                <Error
                    title={t('user.error.title')}
                    message={t('user.error.message')}
                />}
             </Grid>
            {user && <p>{user.first_name}</p>}
            {user && <p>{user.last_name}</p>}
        </Grid>
    </Box>;
};
