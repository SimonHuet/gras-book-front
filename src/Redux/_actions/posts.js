import { postsConstants } from 'Redux/_constants/posts';

export const fetchPosts = () => ({
  type: postsConstants.FETCH_POSTS,
});

export const postsFetched = posts => ({
  type: postsConstants.POSTS_FETCHED,
  posts
});

export const postsFetchError = error => ({
  type: postsConstants.POSTS_FETCH_ERROR,
  error
});
