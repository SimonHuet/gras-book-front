import React, { useEffect, useState } from 'react';

import { List, ListItem, ListItemText } from '@material-ui/core';

const SelectUser = props => {
  const { values } = { ...props };
  const usersList = values.users;

  return (
    <List>
      {usersList.length > 0 ? (
        usersList.map(user => (
          <ListItem
            button
            key={user.id}
            type="button"
            onClick={() => props.SelectedValue(user)}
            className="list-group-item list-group-item-action"
          >
            <ListItemText primary={`${user.firstName} ${user.lastName}`} />
          </ListItem>
        ))
      ) : (
        <ListItemText primary="aucun utilisateur trouvé" />
      )}
    </List>
  );
};

export default SelectUser;
