import { profileConstants } from 'Redux/_constants/profile';

export const fetchUser = () => ({
  type: profileConstants.FETCH_USER,
});

export const userFetched = user => ({
  type: profileConstants.USER_FETCHED,
  user
});

export const userFetchError = error => ({
  type: profileConstants.USER_FETCH_ERROR,
  error
});
