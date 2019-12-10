import { followsConstants } from 'Redux/_constants/follows';

export const fetchFollows = () => ({
  type: followsConstants.FETCH_FOLLOWS,
});

export const followsFetched = follows => ({
  type: followsConstants.FOLLOWS_FETCHED,
  follows,
});

export const followsFetchError = error => ({
  type: followsConstants.FOLLOWS_FETCH_ERROR,
  error,
});
