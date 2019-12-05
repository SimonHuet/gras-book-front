import React from 'react';
import { Button, TextField } from '@material-ui/core';

import { useTranslation } from 'react-i18next';
import { Box, CssBaseline, Grid, makeStyles, Typography } from '@material-ui/core';
import fetchBackend from 'Utils/fetchBackend';
import UserSelect from './select';

export default ({ users, fetchError }) => {
  const group = {};
  const List = [];
  const setUsers = value => {
    if (!List.find(element => element.id === value.id)) {
      List.push(value);
    }
    console.log(List.length);
  };

  const newGroups = formData => {
    fetch('http://localhost:8888/groups/', {
      method: 'POST',
      body: JSON.stringify(group),
    })
      .then(resp => {
        return resp.json();
      })
      .then(async data => {
        const id = data.location.substring('/groups/'.length);
        await List.forEach(user => {
          const userGroup = {
            groupId: id,
            userId: user.id,
          };
          fetch(`http://192.168.0.239:8889/usersGroups/`, {
            method: 'POST',
            body: JSON.stringify(userGroup),
          }).catch(err => console.error(err));
        });
      });
    formData.preventDefault();
  };
  const onChange = val => {
    group.name = val.target.value;
  };

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
          {t('groupForm.title')}
        </Typography>

        <form onSubmit={newGroups}>
        {t('groupForm.name')}
          <TextField
            variant="outlined"
            type="text"
            pattern="^[a-zA-Z0-9]*$"
            value={group.name}
            onChange={onChange}
            name="name"
          />
          <Button type="submit" variant="contained" color="primary">
          {t('groupForm.confirmed')}
          </Button>
          <div>
            <UserSelect SelectedValue={setUsers} values={users} />
          </div>
        </form>

        <Box className={classes.copyright} mt={5}>
          <Copyright />
        </Box>
      </div>
    </Grid>
    
  );
};
