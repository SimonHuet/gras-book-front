/* eslint-disable no-console */
import React from 'react';

import { useTranslation } from 'react-i18next';
import {
  Box,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  Button,
  TextField,
  Paper,
} from '@material-ui/core';
import UserSelect from './select';

function notId(a, b) {
  return a.filter(value => b.some(val => val.id === value.id) === false);
}

export default props => {
  const { users, match, groups, groupUsers } = props;
  const group = {};
  let List = [];
  let AddList = [];
  let IsUpdated = false;
  if (match !== undefined) {
    const g = groups.groups.filter(groupe => groupe.id === match.params.id);
    if (g.length === 1) {
      group.name = g[0].name;
      IsUpdated = true;
    }
  }
  const setUsers = value => {
    List = value;
  };

  const newGroups = formData => {
    let url = `${process.env.REACT_APP_USER_API}/groups`;
    let method = 'POST';
    if (IsUpdated) {
      url = `${process.env.REACT_APP_USER_API}/groups/${match.params.id}`;
      method = 'PUT';
    }
    fetch(url, {
      method,
      body: JSON.stringify(group),
    })
      .then(resp => {
        if (IsUpdated) {
          return undefined;
        }
        return resp.json();
      })
      .then(async data => {
        let id;
        if (match !== undefined) {
          id = match.params.id;
          await notId(groupUsers.groupUsers, List).forEach(user => {
            fetch(`${process.env.REACT_APP_USER_API}/users/${user.id}/groups/${id}`, {
              method: 'DELETE',
            }).catch(err => console.error(err));
          });
          AddList = notId(List, groupUsers.groupUsers);
        }
        if (!IsUpdated) {
          id = data.location.substring('/groups/'.length);
          AddList = List;
        }
        await AddList.forEach(user => {
          const userGroup = {
            groupId: id,
            userId: user.id,
          };
          fetch(`${process.env.REACT_APP_USER_API}/usersGroups/`, {
            method: 'POST',
            body: JSON.stringify(userGroup),
          }).catch(err => console.error(err));
        });
        if (!IsUpdated) {
          const userGroup = {
            groupId: id,
            userId: '2e2a5ab9-9f63-418f-969f-fa6b65363a5f', // WARNING CURRENT USER UUID
          };
          fetch(`${process.env.REACT_APP_USER_API}/usersGroups/`, {
            method: 'POST',
            body: JSON.stringify(userGroup),
          })
            .then(resp => props.history.push('/Groups', null))
            .catch(err => console.error(err));
        }
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
    paperHeader: {
      marginLeft: '80px',
      marginRight: '60px',
    },
    AHAH: {
      width: '40%',
      marginLeft: '40px',
    },
    copyright: {
      bottom: theme.spacing(100),
    },
    button: {
      margin: theme.spacing(3, 0, 2),
    },
    verticalCenter: {
      marginTop: '7%',
      marginRight: '25px',
    },
  }));

  const Copyright = () => (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © Gras book '}
      {new Date().getFullYear()}
    </Typography>
  );

  const { t } = useTranslation('Groups');
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {t('groupForm.title')}
        </Typography>
        <br />
        <form onSubmit={newGroups}>
          <Paper className={classes.paperHeader}>
            <Grid container spacing={2} className={classes.AHAH}>
              <Grid className={classes.verticalCenter} item xs={4}>
                {t('groupForm.name')}
              </Grid>
              <Grid item xs={7}>
                <TextField
                  type="text"
                  label={t('groupForm.GroupName')}
                  InputProps={{ inputProps: { pattern: '^[a-zA-Z0-9]*$' } }}
                  defaultValue={group.name}
                  onChange={onChange}
                  name="name"
                />
              </Grid>
            </Grid>
          </Paper>
          <br />
          <div>
            <UserSelect SelectedValue={setUsers} values={users} currentValue={groupUsers} />
          </div>
          <Grid container>
            <Grid item xs={8} />
            <Grid item xs={2}>
              <Button type="submit" variant="contained" color="primary">
                {t('groupForm.confirmed')}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box className={classes.copyright} mt={5}>
          <Copyright />
        </Box>
      </div>
    </Grid>
  );
};
