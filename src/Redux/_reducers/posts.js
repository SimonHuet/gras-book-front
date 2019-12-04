import { profileConstants } from 'Redux/_constants/profile';

export const INITIAL_STATE = {
    user: {},
    isFetchingUser: false,
    fetchError: false,
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
                fetchError: action.error,
            };
        default:
            return oldSate;
    }
};
