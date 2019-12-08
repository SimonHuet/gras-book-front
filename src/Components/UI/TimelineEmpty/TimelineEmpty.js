import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';

const styles = {
    root: {
        width: 600,
        margin: 'auto',
    },
    content: {
        display: 'flex',
    },
    icon: {
        width: 50,
        height: 50,
        paddingRight: '1em',
    },
};

const TimelineEmptyView = ({ classes, t }) =>
    <Card className={classes.root}>
        <CardContent className={classes.content}>
            <InfoIcon color="primary" className={classes.icon} />
            <div>
                <Typography variant="subtitle1" gutterBottom>
                    {t('message')}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    {t('addMessage')}
                </Typography>
            </div>
        </CardContent>
    </Card>;

const TimelineEmpty = withStyles(styles)(TimelineEmptyView);

export default withTranslation('TimelineEmpty')(TimelineEmpty);
