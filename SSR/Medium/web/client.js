import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

render(
  <Router history={history}>
    <App />
  </Router>,
  document.querySelector('#app')
);
