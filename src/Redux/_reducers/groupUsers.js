import { groupUsersConstants } from 'Redux/_constants/groupUsers';

export const INITIAL_STATE = {
  groupUsers: [],
  isFetchingUsers: false,
  fetchError: false,
};

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
  oldSate = oldSate || INITIAL_STATE;
  action = action || {};

  switch (action.type) {
    case groupUsersConstants.FETCH_GROUPUSERS:
      return {
        ...oldSate,
        isFetchingUsers: true,
      };
    case groupUsersConstants.GROUPUSERS_FETCHED:
      return {
        ...oldSate,
        groupUsers: action.groupUsers,
        isFetchingUsers: false,
      };
    case groupUsersConstants.GROUPUSERS_FETCH_ERROR:
      return {
        ...oldSate,
        isFetchingUsers: false,
        fetchError: action.error,
      };
    default:
      return oldSate;
  }
};
