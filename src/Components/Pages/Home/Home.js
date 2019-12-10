import React from 'react';
import CreatePost from 'Components/UI/CreatePost/CreatePost';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © Gras book '}
    {new Date().getFullYear()}
  </Typography>
);

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
}));

export default props => {
  const classes = useStyles();
  console.log(props.posts);
  return (
    <div>
      <Typography variant="h2" fontWeight="fontWeightBold" m={1} className={classes.title}>
        Home Page
      </Typography>
      <CreatePost posts={props.posts} postUuid="986eb0e6-7c6f-46c9-9a81-705ecdc51a74" />
      <Copyright />;
    </div>
  );
};
