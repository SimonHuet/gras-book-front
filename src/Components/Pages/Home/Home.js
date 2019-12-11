import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Copyright from 'Components/UI/Copyright/Copyright';
import TimelineLoading from 'Components/UI/TimelineLoading/TimelineLoading';
import Error from 'Components/UI/Error/Error';
import TimelineLoaded from 'Components/UI/TimelineLoaded/TimelineLoaded';
import TimelineEmpty from 'Components/UI/TimelineEmpty/TimelineEmpty';
import { withTranslation } from 'react-i18next';

const styles = () =>({
    title: {
        textAlign: "center",
        marginTop: "20px",
    }
});

const homePageView =  ({posts , postsFetchError, isFetchingPosts , classes , t}) => <div>
        <Typography variant="h2" fontWeight="fontWeightBold" m={1} className={classes.title}>
            {t('title.page')}
        </Typography>

        <Typography component="h1" variant='h5' className={classes.title} >{t('title.timeline')}</Typography>
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
        <Copyright />;
    </div>;

const homePage = withStyles(styles)(homePageView);

export default withTranslation('Home')(homePage);
