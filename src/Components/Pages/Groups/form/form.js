import React from 'react';
import { Button, TextField } from '@material-ui/core';
import fetchBackend from 'Utils/fetchBackend';
import UserSelect from './select';

export default ({ users, fetchError }) => {
  const group = {};
  const List = [];
  const setUsers = value => {
    if (!List.find(element => element.id === value.id)) {
      List.push(value);
    }
    console.log(List.length);
  };

  const newGroups = formData => {
    fetch('http://localhost:8888/groups/', {
      method: 'POST',
      body: JSON.stringify(group),
    })
      .then(resp => {
        return resp.json();
      })
      .then(async data => {
        const id = data.location.substring('/groups/'.length);
        await List.forEach(user => {
          const userGroup = {
            groupId: id,
            userId: user.id,
          };
          fetch(`http://localhost:8888/usersGroups/`, {
            method: 'POST',
            body: JSON.stringify(userGroup),
          }).catch(err => console.error(err));
        });
      });
    formData.preventDefault();
  };
  const onChange = val => {
    group.name = val.target.value;
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
        Confirmed
      </Button>
      <div>
        <UserSelect SelectedValue={setUsers} values={users} />
      </div>
    </form>
  );
};
