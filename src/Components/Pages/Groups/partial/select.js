import React, { useEffect, useState } from 'react';

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
    <div className="list-group">
      {usersList.length > 0 ? (
        usersList.map(user => (
          <button
            key={user.id}
            type="button"
            onClick={() => props.SelectedValue(user)}
            className="list-group-item list-group-item-action"
          >
            {user.firstName} {user.lastName}
          </button>
        ))
      ) : (
        <p>aucun utilisateur trouvé</p>
      )}
    </div>
  );
};

export default SelectUser;
