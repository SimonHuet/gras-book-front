/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { createStore /* , compose, applyMiddleware */} from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { reducer } from 'Redux/_reducers';
import { connectRouter /* , routerMiddleware */ } from 'connected-react-router';
import { history } from 'Utils/History';

// eslint-disable-next-line no-shadow
const logger = reducer => (state, action) => {
  const newState = reducer(state, action);

  console.log('=== NEW STATE ===');
  console.log(newState);

  return newState;
};

const rootReducer = connectRouter(history)(reducer);

export const store = createStore(logger(rootReducer), rootReducer());
