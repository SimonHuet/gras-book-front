import { combineReducers } from 'redux';
import { reducer as postReducer } from './posts';

export const reducer = combineReducers({
    postReducer
});
