import { combineReducers } from 'redux';
import { reducer as posts } from './posts';
import { reducer as profile } from './profile';

export const reducer = combineReducers({
    posts,
    profile
});
