import { combineReducers } from 'redux';
import { reducer as posts } from './posts';
import { reducer as users } from './users';
import { reducer as groups} from './groups';

export const reducer = combineReducers({
    posts,
    users,    
    groups,
});