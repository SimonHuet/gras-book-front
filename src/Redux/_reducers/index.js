import { combineReducers } from 'redux';
import { reducer as posts } from './posts';
import { reducer as users } from './users';
import { reducer as groupUsers } from './groupUsers';
import { reducer as groups } from './groups';
import { reducer as messages } from './messages';
import { reducer as profile } from './profile';

export const reducer = combineReducers({
  posts,
  users,
  groups,
  messages,
  groupUsers,
  profile,
});
