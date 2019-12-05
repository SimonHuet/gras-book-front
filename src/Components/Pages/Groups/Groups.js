import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, CssBaseline, Grid, makeStyles, Typography,List, ListItem, ListItemText,IconButton,ListItemSecondaryAction } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom'
import { redirectTo } from '@reach/router';
import { Redirect } from 'react-router/cjs/react-router.min';

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

const SelectedValue = group => {
   return <Redirect to={`/Groups/${group.id}`} />;
}

export default ({ groups }) => {
  const { t } = useTranslation('Groups');
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('groupList.title')}
        </Typography>
        <List>
        {groups.groups.length > 0 ? (
        groups.groups.map(group => (
          <ListItem
            button
            component="a"
            key={group.id}
            href={`/Groups/${group.id}`}
            onClick={() => SelectedValue(group)}
            className="list-group-item list-group-item-action"
          >
            <ListItemText primary={`${group.name}`} />
            
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <ListItemText primary={t('groupList.noRecordFound')} />
      )}
      </List>
      <Link to='/Groups/create'>{t('groupList.CreateButton')}</Link>
        <Box className={classes.copyright} mt={5}>
          <Copyright />
        </Box>
      </div>
    </Grid>
  );
};
