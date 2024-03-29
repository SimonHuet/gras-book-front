/* eslint-disable no-console */
import React from 'react';

import { useTranslation } from 'react-i18next';
import {
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
  Button,
  TextField,
  Paper,
} from '@material-ui/core';
import Copyright from 'Components/UI/Copyright/Copyright';
import fetchBackend from 'Utils/fetchBackend';
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
    let url = `groups`;

    let method = 'POST';
    if (IsUpdated) {
      url = `groups/${match.params.id}`;
      method = 'PUT';
    }
    fetchBackend(process.env.REACT_APP_USER_API, url, {
      method,
      body: JSON.stringify(group),
    })
      .then(resp => {
        if (IsUpdated) {
          return undefined;
        }
        return resp.body;
      })
      .then(async data => {
        console.log(data);
        let id;
        if (match !== undefined) {
          id = match.params.id;
          await notId(groupUsers.groupUsers, List).forEach(user => {
            fetchBackend(process.env.REACT_APP_USER_API, `/users/${user.id}/groups/${id}`, {
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
            roleId: process.env.REACT_APP_MEMBER_UUID,
          };
          fetchBackend(process.env.REACT_APP_USER_API, `usersGroups`, {
            method: 'POST',
            body: JSON.stringify(userGroup),
          }).catch(err => console.error(err));
        });
        if (!IsUpdated) {
          const userGroup = {
            groupId: id,
            userId: localStorage.userID,
            roleId: process.env.REACT_APP_ADMIN_UUID,
          };
          fetchBackend(process.env.REACT_APP_USER_API, `usersGroups`, {
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
    button: {
      margin: theme.spacing(3, 0, 2),
    },
    verticalCenter: {
      marginTop: '7%',
      marginRight: '25px',
    },
  }));

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
        <Copyright />
      </div>
    </Grid>
  );
};
