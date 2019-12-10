import { followsConstants } from 'Redux/_constants/follows';

export const INITIAL_STATE = {
  follows: [],
  isFetchingUsers: false,
  fetchError: false,
};

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
  oldSate = oldSate || INITIAL_STATE;
  action = action || {};

  switch (action.type) {
    case followsConstants.FETCH_FOLLOWS:
      return {
        ...oldSate,
        isFetchingUsers: true,
      };
    case followsConstants.FOLLOWS_FETCHED:
      return {
        ...oldSate,
        follows: action.follows,
        isFetchingUsers: false,
      };
    case followsConstants.FOLLOWS_FETCH_ERROR:
      return {
        ...oldSate,
        isFetchingUsers: false,
        fetchError: action.error,
      };
    default:
      return oldSate;
  }
};
