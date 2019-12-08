import React, { useEffect, useRef } from 'react';
import fetchBackend from 'Utils/fetchBackend';

import {
  List,
  Grid,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  makeStyles,
  Paper,
  ListItemIcon,
  Button,
  InputAdornment,
  TextField,
  IconButton,
  ListItemSecondaryAction,
  FormControl,
  InputLabel,
  Select,
  Typography,
  Divider,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginLeft: '25%',
    marginRight: '25%',
    width: '60%',
  },
  paper: {
    width: 400,
    height: 230,
    overflow: 'auto',
    margin: '0 auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  search: {
    width: '100%',
  },
  margin: {
    maxWidth: '80%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    marginRight: '20%',
  },
}));

let searchInput = '';

export default props => {
  const SelectedValue = user => {
    return props.history.push(`/users/${user.id}`);
  };
  const [state, setState] = React.useState({
    field: '',
  });
  const { users } = { ...props };
  const usersList = users.users;

  const [tab, setTab] = React.useState(usersList);

  useEffect(() => {
    setTab(usersList);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RefreshList = async () => {
    let searchField = '';
    if (state) {
      searchField = `?${state}=${searchInput}`;
    }
    await fetchBackend(process.env.REACT_APP_USER_API, `users${searchField}`)
      .then(data => setTab(data.body))
      .catch(err => err);
  };

  const onChange = value => {
    searchInput = value.target.value;
  };
  const handleChange = field => event => {
    setState(event.target.value);
  };

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const classes = useStyles();

  const { t } = useTranslation('search');

  return (
    <Grid>
      <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('search.title')}
          </Typography>
        </Grid>
        <Grid item xs={9} className={classes.margin}>
          <TextField
            className={classes.search}
            id="input-with-icon-textfield"
            onChange={onChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Button onClick={RefreshList}>
                    <SearchIcon />
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
              Champ
            </InputLabel>
            <Select
              native
              value={state.field}
              onChange={handleChange('field')}
              labelWidth={labelWidth}
              inputProps={{
                name: 'field',
                id: 'outlined-age-native-simple',
              }}
            >
              <option value="" />
              <option value="firstName">{t('search.firstname')}</option>
              <option value="lastName">{t('search.lastname')}</option>
              <option value="email">{t('search.email')}</option>
            </Select>
          </FormControl>
        </Grid>
        <List className={classes.search}>
          {tab.length > 0 ? (
            tab.map(user => (
              <ListItem button onClick={() => SelectedValue(user)} alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="user's icon" src={user.pictureUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${user.firstName} ${user.lastName}`}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {user.login}
                      </Typography>
                      {user.description}
                    </>
                  }
                />
                <Divider variant="inset" component="li" />
              </ListItem>
            ))
          ) : (
            <ListItemText primary={t('userList.noRecordFound')} />
          )}
        </List>
      </Grid>
    </Grid>
  );
};
