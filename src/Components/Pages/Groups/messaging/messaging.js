import React from 'react';
import { Button, TextField } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { Box, CssBaseline, Grid, makeStyles, Typography,List, ListItem, ListItemText,IconButton,ListItemSecondaryAction, ListItemAvatar, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import fetchBackend from 'Utils/fetchBackend';

export default ({ users, fetchError }) => {
  const group = {};
  const List = [];
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
  

  const { t } = useTranslation('GroupForm');
  const classes = useStyles();

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('group.title')}
        </Typography>
      <List>
        {users.users.length > 0 ? (
        users.users.map(user => (
          <ListItem
            key={user.id}
            className="list-user-item list-user-item-action"
          >
        <ListItemAvatar>
          <Avatar alt="User picture" src={user.pictureURL} />
        </ListItemAvatar>
            <ListItemText primary={`${user.firstName} ${user.lastName}`} />
            <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
            </ListItem>
            ))
        ) : (
            <ListItemText primary={t('group.userList.noRecordFound')} />
        )}
      </List>
        <Box className={classes.copyright} mt={5}>
          <Copyright />
        </Box>
      </div>
    </Grid>
    
  );
};
