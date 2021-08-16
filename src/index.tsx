import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store, { history } from './store/store';

import App from './components/App/App';
import './index.css';
import { ConnectedRouter } from 'connected-react-router';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider >
  </React.StrictMode>,
  document.getElementById('root')
);

