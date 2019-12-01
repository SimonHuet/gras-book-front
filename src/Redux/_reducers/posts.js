/* eslint-disable no-param-reassign */
import { postsConstants } from 'Redux/_constants/posts';

export const INITIAL_STATE = {
    posts: [],
    isFetchingPosts: false,
    fetchError: false,
};

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
    oldSate = oldSate || INITIAL_STATE;
    action = action || {};

    switch (action.type) {
        case postsConstants.FETCH_POSTS:
            return {
                ...oldSate,
                isFetchingPosts: true,
            };
        case postsConstants.POSTS_FETCHED:
            return {
                ...oldSate,
                posts: action.posts,
                isFetchingPosts: false,
            };
        case postsConstants.POSTS_FETCH_ERROR:
            return {
                ...oldSate,
                isFetchingPosts: false,
                fetchError: action.error,
            };
        default:
            return oldSate;
    }
};
