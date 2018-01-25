import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Liked from './components/Liked.jsx';
import { Provider } from 'react-redux';
import store from './store';
import './index.scss';
import { HashRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <Switch>
      <Route path="/" exact component={App}>
      </Route>
      <Route path="/liked" exact component={Liked}>
      </Route>
    </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('root'));
