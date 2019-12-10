import React from 'react';
import Menu from 'Components/UI/Menu/Menu';
import Timeline from 'Components/UI/Timeline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Gras book '}
      {new Date().getFullYear()}
    </Typography>
  );

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
