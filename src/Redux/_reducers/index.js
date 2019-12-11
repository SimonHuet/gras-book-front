import { combineReducers } from 'redux';
import { reducer as posts } from './posts';
import { reducer as groupUsers } from './groupUsers';
import { reducer as groups } from './groups';
import { reducer as messages } from './messages';
import { reducer as profile } from './profile';
import { reducer as follows } from './follows';

export const reducer = combineReducers({
  posts,
  groups,
  messages,
  groupUsers,
  profile,
  follows,
});
