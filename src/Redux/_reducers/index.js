import { combineReducers } from 'redux';
import { reducer as post } from './posts';
import { reducer as profile } from './profile';

export const reducer = combineReducers({
    post,
    profile
});
