import { messagesConstants } from 'Redux/_constants/messages';


export const fetchMessages = () => ({
  type: messagesConstants.FETCH_MESSAGES,
});

export const messagesFetched = messages => ({
  type: messagesConstants.MESSAGES_FETCHED,
  messages
});

export const messagesFetchError = error => ({
  type: messagesConstants.MESSAGES_FETCH_ERROR,
  error
});
