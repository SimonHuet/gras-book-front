import { groupsConstants } from 'Redux/_constants/groups';

export const INITIAL_STATE = {
    groups: [],
    isFetchingGroups: false,
    fetchError: false,
};

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
    oldSate = oldSate || INITIAL_STATE;
    action = action || {};

    switch (action.type) {
        case groupsConstants.FETCH_GROUPS:
            return {
                ...oldSate,
                isFetchingGroups: true,
            };
        case groupsConstants.GROUPS_FETCHED:
            return {
                ...oldSate,
                groups: action.groups,
                isFetchingGroups: false,
            };
        case groupsConstants.GROUPS_FETCH_ERROR:
            return {
                ...oldSate,
                isFetchingGroups: false,
                fetchError: action.error,
            };
        default:
            return oldSate;
    }
};
