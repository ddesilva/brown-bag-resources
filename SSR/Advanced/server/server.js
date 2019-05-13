import express from 'express';
import App from '../web/App';
import Template from './template';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../web/store/index';
import routes from '../web/routes';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { maybeComposeWithDevTools } from '../utils';

const app = express();

app.use('/assets', express.static('./assets'));

// Find the routes and call the fetch data method
function getInitialProps(req, res, routes, store) {

  // FIND THE ROUTE THAT MATCHES THE REQUEST PATH
  const routeArray = routes
    .map(route => [route, matchPath(req.path, route)])
    .filter(([route, match]) => match && route.component.getInitialProps)
    .map(([route, match]) => {

      // BLINDLY CALL GET INITIAL PROPS PASSING IN DISPATCH
      return route.component.getInitialProps(store.dispatch, match.params, req, res);
    });

  return Promise.all(routeArray).then(routeData => {
    return routeData;
  });
}

// we need to change so that we not handle every request
app.get('*', async (req, res) => {

  // CREATE STORE
  const initialState = {};
  const middleware = [thunkMiddleware, routerMiddleware(null)];
  const store = createStore(
    rootReducer,
    initialState,
    compose(maybeComposeWithDevTools(applyMiddleware(...middleware)))
  );

  // FETCH THE DATA FOR THE CURRENT ROUTE
  getInitialProps(req, res, routes, store).then(() => {

    // RENDER THE APP
    const appBody = (
      <Provider store={store}>
        <StaticRouter location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );
    const stringVersionOfApp = renderToString(appBody);

    // GET THE STATE OF THE STORE (this will have been populated by results of getInitialProps)
    const state = store.getState();

    const stringVersionOfHtmlPayload = Template('some title', stringVersionOfApp, state);
    res.send(stringVersionOfHtmlPayload);
  });
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
