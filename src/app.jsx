import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Base from './components/Base.js';
import configureStore from './store.js';

import './assets/styles/styles.scss';

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const render = () => {
  const { history, store } = configureStore(initialState);

  ReactDOM.hydrate((
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Base />
      </ConnectedRouter>
    </Provider>
  ),
  document.getElementById('app')
  );
};

render();
