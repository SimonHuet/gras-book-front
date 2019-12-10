import { usersConstants } from 'Redux/_constants/users';


export const fetchUsers = () => ({
  type: usersConstants.FETCH_USERS,
});

export const usersFetched = users => ({
  type: usersConstants.USERS_FETCHED,
  users
});

export const usersFetchError = error => ({
  type: usersConstants.USERS_FETCH_ERROR,
  error
});
