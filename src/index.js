// React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Containers
import App from './containers/App';

// Service worker
import registerServiceWorker from './registerServiceWorker';

// Load the app
ReactDOM.render(<App />, document.getElementById('root'));

// Register the service worker for an offline experience.
registerServiceWorker();
