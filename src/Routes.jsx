import React from 'react';
import { Router, Route/* , Switch */ } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FixedHeader from './components/fixed-layout/header/FixedHeader';

const browserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={FixedHeader} />
    </div>
  </Router>
);

export default Routes;
