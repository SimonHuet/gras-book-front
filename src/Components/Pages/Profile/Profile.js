import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid } from '@material-ui/core';
import UserProfile from 'Components/UI/UserProfile';
import Timeline from 'Components/UI/Timeline';

export default () => {
    const { t } = useTranslation('Profile');

    return <Box>
        <Grid xs='12'>
            <h1>{t('title')}</h1>
            <UserProfile />
            <Timeline />
        </Grid>
    </Box>;
};
