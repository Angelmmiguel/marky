import { createStore, combineReducers } from 'redux';

// Reducers
import config from './reducers/config';

// Create the reducer
const store = createStore(
  combineReducers({
    config
  })
);
export default store;
