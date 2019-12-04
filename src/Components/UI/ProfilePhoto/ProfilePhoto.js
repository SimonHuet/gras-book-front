/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

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
    ImageAvatars: 'url(https://bucket-kfc.s3.fr-par.scw.cloud/profileImage/AvatarTest.jpg)',
    alt: 'url()'
  },
}));

export default () => {
  const classes = useStyles();
  const {token} = localStorage;
  localStorage.getItem(token);
  console.log(`token${  token}`);


  return (
    <div className={classes.root}>
      <Avatar alt="Y. Durand" className={classes.bigAvatar} />
    </div>
  );
};
