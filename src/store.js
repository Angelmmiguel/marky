import { createStore } from 'redux';

// Reducers
import Config from './reducers/config';

// Create the reducer
const store = createStore(Config);
export default store;
