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
  Paper,
  Checkbox,
  ListItemIcon,
  Button,
  InputAdornment,
  TextField,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
    flexGrow: 1,
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
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function notId(a, b) {
  return a.filter(value => b.some(val => val.id === value.id) === false);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

const SelectUser = props => {
  const { values, currentValue } = { ...props };
  const usersList = values.users;
  const groupUsersList = currentValue !== undefined ? currentValue.groupUsers : undefined;
  let searchInput = '';
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(usersList);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  useEffect(() => {
    if (groupUsersList !== undefined && left !== 0) {
      setLeft(notId(left, groupUsersList));
      setRight(groupUsersList);
    }
    return () => {
      setRight([]);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RefreshList = async () => {
    await fetchBackend(process.env.REACT_APP_USER_API, `users?firstName=${searchInput}`)
      .then(data => setLeft(notId(data.body, groupUsersList)))
      .catch(err => err);
  };

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    props.SelectedValue(right.concat(leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
    props.SelectedValue(not(right, rightChecked));
  };

  const onChange = value => {
    searchInput = value.target.value;
  };

  const classes = useStyles();
  const customList = items => (
    <Paper className={classes.paper}>
      <List dense component="div" role="list">
        {items &&
          items.map(value => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <ListItem key={value.id} role="listitem" button onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemAvatar>
                  <Avatar alt="User picture" src={value.pictureURL} />
                </ListItemAvatar>
                <ListItemText primary={`${value.firstName} ${value.lastName}`} />
              </ListItem>
            );
          })}
        <ListItem />
      </List>
    </Paper>
  );
  return (
    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item xs={12} className={classes.margin}>
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
      <Grid item>{customList(left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList(right)}</Grid>
    </Grid>
  );
};

export default SelectUser;
