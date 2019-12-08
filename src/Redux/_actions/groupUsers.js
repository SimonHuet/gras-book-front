import { groupUsersConstants } from 'Redux/_constants/groupUsers';


export const fetchGroupUsers = () => ({
  type: groupUsersConstants.FETCH_GROUPUSERS,
});

export const groupUsersFetched = groupUsers => ({
  type: groupUsersConstants.GROUPUSERS_FETCHED,
  groupUsers
});

export const groupUsersFetchError = error => ({
  type: groupUsersConstants.GROUPUSERS_FETCH_ERROR,
  error
});
