import React from 'react';
import { withTranslation } from 'react-i18next';
import { Grid, Typography, Container, withStyles } from '@material-ui/core';
import UserProfile from 'Components/UI/UserProfile';
import TimelineLoading from 'Components/UI/TimelineLoading/TimelineLoading';
import TimelineLoaded from 'Components/UI/TimelineLoaded/TimelineLoaded';
import TimelineEmpty from 'Components/UI/TimelineEmpty/TimelineEmpty';
import Error from 'Components/UI/Error/Error';

const styles ={
    container:{
        marginTop:'50px'
    }
};

const ProfileView = ({posts, isFetchingPosts, postsFetchError, classes, t}) => 
     <Container maxWidth="md" className={classes.container} >

        <Grid item xs={12}>
            <Typography component="h1" variant='h5'>{t('title.profile')}</Typography>
            <UserProfile />

            <Typography component="h1" variant='h5'>{t('title.timeline')}</Typography>
            {postsFetchError && 
                <Error title={t('posts.error.title')} message={t('posts.error.message')}
            />}
            {isFetchingPosts && 
                    <TimelineLoading />
            }
            {!postsFetchError && posts && posts.length === 0 ? (
                    <TimelineEmpty />
                ) : (
                    <TimelineLoaded
                        posts={posts}
                    />
            )}
        </Grid>
    </Container>;

const Profile = withStyles(styles)(ProfileView);

export default withTranslation('Profile')(Profile);
