import React, { useEffect, useState } from 'react';

import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  makeStyles,
  Paper,
  Typography,
  TextField,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';

const SelectUser = props => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8888/users/?limit=50')
      .then(response => response.json())
      .then(data => {
        setUsersList(data);
      })
      .catch(error => {
        // console.error(error);
      });
  }, []);
  return (
    <List>
      {usersList.length > 0 ? (
        usersList.map(user => (
          <ListItem button
            key={user.id}
            type="button"
            onClick={() => props.SelectedValue(user)}
            className="list-group-item list-group-item-action"
          >
            <ListItemText primary={`${user.firstName} ${user.lastName}`} />
          </ListItem>
        ))
      ) : (
        <p>aucun utilisateur trouvé</p>
      )}
    </List>
  );
};

export default SelectUser;
