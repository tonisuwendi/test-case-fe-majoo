import { combineReducers, createStore } from 'redux';

import todoReducer from './reducers/todo';
import uiReducer from './reducers/ui';

const store = createStore(
  combineReducers({
    todo: todoReducer,
    ui: uiReducer,
  }),
);

export default store;
