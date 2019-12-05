/* eslint-disable no-console */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import fetchBackend from 'Utils/fetchBackend';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
    },
  },
  bigAvatar: {
    width: 75,
    height: 75,
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(1),
    alt: 'url()'
  },
}));

export default ({users}) => {
  const classes = useStyles();
  console.log(localStorage);
  const {token} = localStorage;
  localStorage.getItem(token);
  console.log(`token :${token}`);

  return (
    <div className={classes.root}>
      {users.users.map(user => (
        <Avatar alt="User picture" src={user.pictureURL} className={classes.bigAvatar} />
      ))}
    </div>
  );
};
