import { usersConstants } from 'Redux/_constants/users';

export const INITIAL_STATE = {
  users: [],
  isFetchingUsers: false,
  fetchError: false,
};

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
  oldSate = oldSate || INITIAL_STATE;
  action = action || {};

  switch (action.type) {
    case usersConstants.FETCH_USERS:
      return {
        ...oldSate,
        isFetchingUsers: true,
      };
    case usersConstants.USERS_FETCHED:
      return {
        ...oldSate,
        users: action.users,
        isFetchingUsers: false,
      };
    case usersConstants.USERS_FETCH_ERROR:
      return {
        ...oldSate,
        isFetchingUsers: false,
        fetchError: action.error,
      };
    default:
      return oldSate;
  }
};
