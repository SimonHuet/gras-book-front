import React, { useEffect, useState } from 'react';
import UserSelect from './select';

export default () => {
  const group = {};
  group.list = [];
  group.name = 'default';
  const setUsers = value => {
    group.list.push(value);
  };

  return (
    <form>
      Nom du Group :
      <input type="text" name="name" />
      <input type="submit" value="Envoyer" />
      <div>
        <UserSelect SelectedValue={setUsers} />
      </div>
      <div>
        <ul className="list-group">
          {group !== {} && group.list.length > 0 ? (
            group.list.map(user => (
              <li key={user.id} className="list-group-item">
                {user.firstName} {user.lastName}
              </li>
            ))
          ) : (
            <p>aucun utilisateur trouvé</p>
          )}
        </ul>
      </div>
    </form>
  );
};
