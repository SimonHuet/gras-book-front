import { combineReducers } from 'redux';
import { reducer as usersReducer } from './users.js';
import { reducer as groupsReducer } from './groups.js';


export const reducer = combineReducers({
    usersReducer,    
    groupsReducer,
});