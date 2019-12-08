import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';
import UserProfile from 'Components/UI/UserProfile';
import TimelineLoading from 'Components/UI/TimelineLoading/TimelineLoading';
import TimelineLoaded from 'Components/UI/TimelineLoaded/TimelineLoaded';
import TimelineEmpty from 'Components/UI/TimelineEmpty/TimelineEmpty';
import Error from 'Components/UI/Error/Error';

export default ({posts, isFetchingPosts, postsFetchError}) => {
    const { t } = useTranslation('Profile');
    const {max , setMax} = useState(3);
    
    const handleLoadMore = () => setMax(max+1);

    return <Box>
        <Grid item xs={12}>
            <Typography component="h1" variant='h5'>{t('title.profile')}</Typography>
            <UserProfile />

            <Typography component="h1" variant='h5'>{t('title.timeline')}</Typography>
            {postsFetchError && 
                <Error title={t('posts.error.title')} message={t('posts.error.message')}
            />};
            {isFetchingPosts && 
                    <TimelineLoading />
            };
            {!postsFetchError && posts && posts.length === 0 ? (
                    <TimelineEmpty />
                ) : (
                    <TimelineLoaded
                        posts={posts}
                        max={max}
                        handleLoadMore={handleLoadMore}
                    />
            )};
            

        
        </Grid>
    </Box>;
};
