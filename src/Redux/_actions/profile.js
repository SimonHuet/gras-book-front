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

export const fetchUserPosts = () => ({
  type: profileConstants.FETCH_USER_POSTS,
});

export const userPostsFetched = posts => ({
  type: profileConstants.USER_POSTS_FETCHED,
  posts
});

export const userPostsFetchError = error => ({
  type: profileConstants.USER_POSTS_FETCH_ERROR,
  error
});
