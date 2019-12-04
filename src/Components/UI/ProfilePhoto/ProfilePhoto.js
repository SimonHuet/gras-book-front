/* eslint-disable import/no-unresolved */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  bigAvatar: {
    width: 85,
    height: 85,
    ImageAvatars: 'url(https://bucket-kfc.s3.fr-par.scw.cloud/profileImage/AvatarTest.jpg)'
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Y. Durand" className={classes.bigAvatar} />
    </div>
  );
}