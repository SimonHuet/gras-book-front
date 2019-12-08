import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Card, List, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Error from 'Components/UI/Error/Error';
import Post from './Post';

const styles = {
    root: {
        width: 600,
        padding: 10
    },
};

const TimelineView = ({ posts = [], postsFetchError, classes }) => {
    const { t } = useTranslation('Timeline');
    return (
        <Box>
            <Card className={classes.root}>
                {postsFetchError &&
                    <Error
                        title={t('posts.error.title')}
                        message={t('posts.error.message')}
                    />
                }
                <List>
                    {posts.map(post => (<span key={post.id}>
                        <Post post={post} />
                        <Divider />
                    </span>
                    ))}
                </List>
            </Card>
        </Box>
    );
};

const Timeline = withStyles(styles)(TimelineView);

export default Timeline;
