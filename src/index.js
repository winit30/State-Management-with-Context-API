import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Provider from './store';

import App from './components/App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
