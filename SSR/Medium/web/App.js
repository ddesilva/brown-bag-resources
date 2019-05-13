import React, { Component } from 'react';
import routes from './routes';
import { Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello this is a react app</p>
        <a href="/home">home</a>
        &nbsp;|&nbsp;
        <a href="/product">product</a>

        <Switch>{routes.map((route, index) => <Route key={index} {...route} />)}</Switch>
      </div>
    );
  }
}

export default App;
