import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Box,
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
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
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

export default props => {
  const SelectedValue = group => {
    return props.history.push(`/Groups/${group.id}`);
  };
  const { groups } = props;
  const { t } = useTranslation('groupList');
  const classes = useStyles();
  const quitGroup = groupid => {
    return fetch(
      // WARNING CURRENT USER UUID
      `${process.env.REACT_APP_USER_API}/users/2e2a5ab9-9f63-418f-969f-fa6b65363a5f/groups/${groupid}`,
      {
        method: 'DELETE',
      }
    ).then(rep => {
      props.history.push('/', null);
      props.history.push('/Groups', null);
    });
  };
  return (
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
  );
};
