import { messagesConstants } from 'Redux/_constants/messages';

export const INITIAL_STATE = {
  messages: [],
  isFetchingMessages: false,
  fetchError: false,
};

export const reducer = (oldSate = INITIAL_STATE, action = {}) => {
  oldSate = oldSate || INITIAL_STATE;
  action = action || {};

  switch (action.type) {
    case messagesConstants.FETCH_MESSAGES:
      return {
        ...oldSate,
        isFetchingMessages: true,
      };
    case messagesConstants.MESSAGES_FETCHED:
      return {
        ...oldSate,
        messages: action.messages,
        isFetchingMessages: false,
      };
    case messagesConstants.MESSAGES_FETCH_ERROR:
      return {
        ...oldSate,
        isFetchingMessages: false,
        fetchError: action.error,
      };
    default:
      return oldSate;
  }
};
