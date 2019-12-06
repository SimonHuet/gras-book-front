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

export default ({user}) => {
  const classes = useStyles();
  console.log("Profile photo: ",{user});

  return (
    <div className={classes.root}>
      <Avatar alt="User picture" src='' className={classes.bigAvatar} />
    </div>
  );
};
