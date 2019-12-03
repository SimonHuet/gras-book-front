import React from 'react';
import { Button, TextField } from '@material-ui/core';
import UserSelect from './select';

export default ({ users }) => {
  const group = {};
  const List = [];
  const setUsers = value => {
    List.push(value);
  };

  const newGroups = formData => {
    fetch('http://localhost:8888/groups/', {
      method: 'post',
      body: group,
    }).then(resp => {
      return resp;
    });
    /* .then(data => {
        const id = data.location.substring(data.location.indexof('/groups'));
        
      }); */
    formData.preventDefault();
  };
  const onChange = val => {
    group.name = val;
  };

  return (
    <form onSubmit={newGroups}>
      Nom du Group :
      <TextField
        variant="outlined"
        type="text"
        pattern="^[a-zA-Z0-9]*$"
        value={group.name}
        onChange={onChange}
        name="name"
      />
      <Button type="submit" variant="contained" color="primary">
        Primary
      </Button>
      <div>
        <UserSelect SelectedValue={setUsers} values={users} />
      </div>
    </form>
  );
};
