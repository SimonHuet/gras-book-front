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
  TextField
} from '@material-ui/core';
import UserSelect from './select';

export default ({users, hasFetchError}) => {
  const group = {};
  const List = [];
  const setUsers = value => {
    List.push(value);
  };

  const newGroups = formData => {
    fetch('http://localhost:8888/groups/', {
      method: 'post',
      body: group,
    })
      .then(resp => {
        return resp;
      })
      .then(data => {
        const id = data.location.substring(data.location.indexof('/groups'));
        console.log(id);
      });
    formData.preventDefault();
  };
  const onChange = val => {
    group.name = val;
  };

  return (
    <form onSubmit={newGroups}>
      Nom du Group :
      <TextField variant="outlined"
        type="text"
        pattern="^[a-zA-Z0-9]*$"
        value={group.name}
        onChange={onChange}
        name="name"
      />
      <Button type="submit" value="Envoyer" />
      <div>
        <UserSelect SelectedValue={setUsers} />
      </div>
    </form>
  );
};
