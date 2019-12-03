import { combineReducers } from 'redux';
import { reducer as postReducer } from './posts';
import { reducer as profileReducer } from './profile';

export const reducer = combineReducers({
    postReducer,
    profileReducer
});
