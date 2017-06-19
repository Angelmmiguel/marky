// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Containers
import App from './containers/App';

// Redux
import store from './store';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// Load the app
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'));

// Register the service worker for an offline experience.
registerServiceWorker();
