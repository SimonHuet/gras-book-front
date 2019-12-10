import React, { useEffect } from 'react';
import fetchBackend from 'Utils/fetchBackend';

import {
  List,
  Grid,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  makeStyles,
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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
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

// eslint-disable-next-line no-unused-vars
let searchInput = '';
let IsFollowing = true;
export default props => {
  const SelectedValue = user => {
    return props.history.push(`/profile/${user.id}`);
  };
  const [state, setState] = React.useState({
    field: '',
  });
  const { follows } = { ...props };
  const usersList = follows.follows;
  const [tab, setTab] = React.useState([]);
  useEffect(() => {
    setTab(usersList);
    return () => {};
  }, [usersList]);

  const RefreshList = async () => {
    if (state === 'follower') {
      IsFollowing = false;
      await fetchBackend(process.env.REACT_APP_USER_API, `users/${localStorage.userID}/followers`)
        .then(data => setTab(data.body))
        .catch(err => err);
    } else {
      IsFollowing = true;
      await fetchBackend(process.env.REACT_APP_USER_API, `users/${localStorage.userID}/following`)
        .then(data => setTab(data.body))
        .catch(err => err);
    }
  };

  const onChange = value => {
    searchInput = value.target.value;
  };
  const handleChange = field => event => {
    setState(event.target.value);
  };
  const follow = (id, value) => {
    let subs;
    if (state === 'follower') {
      subs = {
        userId: id,
        followerId: localStorage.userID,
      };
    } else {
      subs = {
        userId: localStorage.userID,
        followerId: id,
      };
    }
    return fetchBackend(process.env.REACT_APP_USER_API, 'subscriptions', {
      method: 'POST',
      body: JSON.stringify(subs),
    }).then(rep => {
      props.history.push('/', null);
      props.history.push('/subs', null);
    });
  };
  const unFollow = (id, value) => {
    // CURRENT USER ID
    if (state === 'follower') {
      return fetchBackend(
        process.env.REACT_APP_USER_API,
        `users/${localStorage.userID}/followers/${id}`,
        {
          method: 'DELETE',
        }
      ).then(rep => {
        props.history.push('/', null);
        props.history.push('/subs', null);
      });
    }
    return fetchBackend(
      process.env.REACT_APP_USER_API,
      `users/${localStorage.userID}/following/${id}`,
      {
        method: 'DELETE',
      }
    ).then(rep => {
      props.history.push('/', null);
      props.history.push('/subs', null);
    });
  };
  const SelectButton = id => {
    if (IsFollowing) {
      return (
        <ListItemSecondaryAction>
          <IconButton onClick={value => unFollow(id, value)} edge="end" aria-label="delete">
            <PersonAddDisabledIcon />
          </IconButton>
        </ListItemSecondaryAction>
      );
    }
    return (
      <ListItemSecondaryAction>
        <IconButton onClick={value => follow(id, value)} edge="end" aria-label="delete">
          <PersonAddIcon />
        </IconButton>
      </ListItemSecondaryAction>
    );
  };
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const classes = useStyles();

  const { t } = useTranslation('Subs');

  return (
    <Grid>
      <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
        <Grid className={classes.title} item xs={12}>
          <Typography variant="h3" component="h3" gutterBottom>
            {t('sub.title')}
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
              <option value="following">{t('sub.following')}</option>
              <option value="follower">{t('sub.follower')}</option>
            </Select>
          </FormControl>
        </Grid>
        <List className={classes.search}>
          {tab.length > 0 ? (
            tab.map(user => (
              <>
                <ListItem
                  className="list-user-item list-user-item-action"
                  button
                  component="a"
                  key={user.id}
                  onClick={() => SelectedValue(user)}
                  alignItems="flex-start"
                >
                  <ListItemAvatar>
                    <Avatar alt="" src={user.pictureUrl} />
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

                  {SelectButton(user.id)}
                </ListItem>

                <Divider variant="inset" component="li" />
              </>
            ))
          ) : (
            <ListItemText primary={t('sub.noRecordFound')} />
          )}
        </List>
      </Grid>
    </Grid>
  );
};
