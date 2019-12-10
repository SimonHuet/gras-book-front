import React from 'react';
import Menu from 'Components/UI/Menu/Menu';
import Timeline from 'Components/UI/Timeline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import Copyright from  'Components/UI/Copyright/Copyright';

const useStyles = makeStyles(theme => ({
    title: {
        textAlign: "center",
        marginTop: theme.spacing(1),
    }
}));

export default () => {
    const classes = useStyles();

    return (
    <div>
        <Typography variant="h2" fontWeight="fontWeightBold" m={1} className={classes.title}>
            Home Page
        </Typography>
        <Timeline />
        <Menu/>
        <Copyright />        
    </div>
    );
};
