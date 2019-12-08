import { groupsConstants } from 'Redux/_constants/groups';


export const fetchGroups = () => ({
  type: groupsConstants.FETCH_GROUPS,
});

export const groupsFetched = groups => ({
  type: groupsConstants.GROUPS_FETCHED,
  groups
});

export const groupsFetchError = error => ({
  type: groupsConstants.GROUPS_FETCH_ERROR,
  error
});
