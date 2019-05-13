import React from 'react';
import { hydrate } from 'react-dom';
import App from './App';
import { Router } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../web/store/index';
import { maybeComposeWithDevTools } from '../utils';
import { applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

const history = createBrowserHistory();

// need to get the state from the DOM object //

// CREATE STORE
const initialState =  window.__INITIAL_STATE__ || {};
const middleware = [thunkMiddleware, routerMiddleware(history)];
const store = createStore(
  rootReducer,
  initialState,
  compose(maybeComposeWithDevTools(applyMiddleware(...middleware)))
);

// HYDRATE THE APP
hydrate(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.querySelector('#app')
);
