import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Error from 'Components/UI/Error/Error';
import Timeline from 'Components/UI/Timeline';
import groupByDay from 'Utils/GroupByDay/groupPerDay';
import { useTranslation } from 'react-i18next';

const styles = {
    root: {
        width: 600,
        margin: 'auto',
    },
    day: {
        marginBottom: '1em',
    },
};

const getDayString = date =>
    new Date(date).toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

const TimelineLoadedView = ({
    posts = [],
    handleLoadMore,
    max,
    classes,
}) => {
    const { days, postsByDay } = groupByDay(posts);
    const {t} = useTranslation('TimelineLoaded');

    if (days.length === 0) {
        return (
            <Error color="error" title={t('days.error.title')} message={t('days.error.message')}/>
        );
    }
    return <div className={classes.root}>

        <h1>{t('title')}</h1>
            {days.map(day => (
                <div key={day} className={classes.day}>
                    <Typography variant="subtitle2" gutterBottom>
                        {getDayString(day)}
                    </Typography>
                    <Timeline posts={postsByDay[day]} />
                </div>
            ))}
            {posts.length > max && (
                <Button variant="contained" onClick={handleLoadMore}>
                    Load more posts
                </Button>
            )}
        </div>;
};

const TimelineLoaded = withStyles(styles)(TimelineLoadedView);

export default TimelineLoaded;
