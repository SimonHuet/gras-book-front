import { createStore, compose, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from 'Redux/_reducers';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { history } from 'Utils/History';

const logger = Reducer => (state, action) => {
  const newState = Reducer(state, action);

  // eslint-disable-next-line no-console
  console.log('=== NEW STATE ===');
  // eslint-disable-next-line no-console
  console.log(newState);

  return newState;
};

const rootReducer = connectRouter(history)(reducer); 

export const store = createStore(
    process.env.NODE_ENV === 'development' ? logger(rootReducer): rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(routerMiddleware)
    )
);
