import { profileConstants } from 'Redux/_constants/profile';

export const INITIAL_STATE = {
    user: {},
    isFetchingUser: false,
    userFetchError: false,
    userPosts: [],
    isFetchingUserPosts: false,
    userPostsFetchError: false,
};

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
    oldSate = oldSate || INITIAL_STATE;
    action = action || {};

    switch (action.type) {
        case profileConstants.FETCH_USER:
            return {
                ...oldSate,
                isFetchingUser: true,
            };
        case profileConstants.USER_FETCHED:
            return {
                ...oldSate,
                user: action.user,
                isFetchingUser: false,
            };
        case profileConstants.USER_FETCH_ERROR:
            return {
                ...oldSate,
                isFetchingUser: false,
                userFetchError: action.error,
            };
        case profileConstants.FETCH_USER_POSTS:
            return {
                ...oldSate,
                isFetchingUserPosts: true,
            };
        case profileConstants.USER_POSTS_FETCHED:
            return {
                ...oldSate,
                userPosts: action.posts,
                isFetchingUserPosts: false,
            };
        case profileConstants.USER_POSTS_FETCH_ERROR:
            return {
                ...oldSate,
                isFetchingUserPosts: false,
                userPostsfetchError: action.error,
            };
        default:
            return oldSate;
    }
};
