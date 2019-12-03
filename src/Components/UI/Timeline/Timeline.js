import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@material-ui/core';
import Error from 'Components/UI/Error/Error';
import Post from './Post';

export const Timeline = ({ posts, postsFetchError }) => {
    const { t } = useTranslation('Timeline');

    return <Box>
        <h1>{t('title')}</h1>
        {posts.map(post => <Post post={post} />)}
        {postsFetchError && 
            <Error 
                title={t('posts.error.title')}
                message={t('posts.error.message')}
            />
        }

    </Box>;
};