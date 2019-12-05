import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { List, ListItem, ListItemText,Avatar, ListItemAvatar } from '@material-ui/core';

const SelectUser = props => {
  const { values } = { ...props };
  const usersList = values.users;
  
  const { t } = useTranslation('GroupForm');

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
            
        <ListItemAvatar>
          <Avatar alt="User picture" src={user.pictureURL} />
        </ListItemAvatar>
            <ListItemText primary={`${user.firstName} ${user.lastName}`} />
          </ListItem>
        ))
      ) : (
        <ListItemText primary={t('groupForm.noRecordFound')} />
      )}
    </List>
  );
};

export default SelectUser;
