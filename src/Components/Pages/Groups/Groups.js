import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import Form from './form';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  copyright: {
    bottom: theme.spacing(100),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © Gras book '}
    {new Date().getFullYear()}
  </Typography>
);

export default users => {
  const { t } = useTranslation('Groups');
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('groupForm.title')}
        </Typography>
        <Form />

        <br />

        <Box className={classes.copyright} mt={5}>
          <Copyright />
        </Box>
      </div>
    </Grid>
  );
};
