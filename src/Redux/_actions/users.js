import { usersConstants } from 'Redux/_constants/users';

export const fetchUsers = () => ({
  type: usersConstants.FETCH_POSTS,
});

export const usersFetched = users => ({
  type: usersConstants.POSTS_FETCHED,
  users
});

export const usersFetchError = error => ({
  type: usersConstants.POSTS_FETCH_ERROR,
  error
});
