import { combineReducers } from 'redux';
import { reducer as postReducer } from './posts';
import { reducer as usersReducer } from './users.js';
import { reducer as groupsReducer } from './groups.js';

export const reducer = combineReducers({
    postReducer,
    usersReducer,    
    groupsReducer,
});