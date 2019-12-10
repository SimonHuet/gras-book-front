import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Paper,
  Box,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import fetchBackend from 'Utils/fetchBackend';

import Copyright from 'Components/UI/Copyright/Copyright';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    postion: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '80px',
  },
  button: {
    margin: theme.spacing(3, 0, 2),
  },
  backgroundImage: {
    backgroundImage:
      'url(https://images.unsplash.com/photo-1495753379358-73c76ccd644b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2610&q=80)',
  },
}));

export default props => {
  const SelectedValue = group => {
    return props.history.push(`/Groups/${group.id}`);
  };
  const { groups } = props;
  const { t } = useTranslation('Groups');
  const classes = useStyles();
  const quitGroup = groupid => {
    return fetchBackend(
      process.env.REACT_APP_USER_API,
      `users/${localStorage.userID}/groups/${groupid}`,
      {
        method: 'DELETE',
      }
    ).then(() => {
      props.history.push('/', null);
      props.history.push('/Groups', null);
    });
  };
  return (
    <div className={classes.backgroundImage}>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Paper className={classes.paper}>
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
                  onClick={() => SelectedValue(group)}
                  className="list-group-item list-group-item-action"
                >
                  <ListItemText primary={`${group.name}`} />

                  <ListItemSecondaryAction>
                    <IconButton onClick={() => quitGroup(group.id)} edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))
            ) : (
              <ListItemText primary={t('groupList.noRecordFound')} />
            )}
          </List>
          <Link to="/Groups/create">{t('groupList.CreateButton')}</Link>
          <Box className={classes.copyright} mt={5}>
            <Copyright />
          </Box>
        </Paper>
      </Grid>
    </div>
  );
};
