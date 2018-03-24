import React from 'react';
import { Router, Route/* , Switch */ } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={browserHistory}>
    <div>
      <Route path="/" render={() => (<p>Welcome!</p>)} />
    </div>
  </Router>
);

export default Routes;
