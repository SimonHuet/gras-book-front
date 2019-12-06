import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Card, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Error from 'Components/UI/Error/Error';
import Post from './Post';

const styles = {
    root: {
        width: 600,
        padding:10
    },
};

const TimelineView = ({ posts = [],postsFetchError, classes }) => {
    const { t } = useTranslation('Timeline');
    return (
        <Box>
            <h1>{t('title')}</h1>
            <Card className={classes.root}>
                {postsFetchError &&
                    <Error
                        title={t('posts.error.title')}
                        message={t('posts.error.message')}
                    />
                }
                <List>
                    {posts.map(post => (
                        <Post post={post} key={post.id} />
                    ))}
                </List>
            </Card>
        </Box>
    );
};

const Timeline = withStyles(styles)(TimelineView);

export default Timeline;