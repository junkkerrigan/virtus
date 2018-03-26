import React from 'react';
import { Router, Route/* , Switch */, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FixedHeader from './components/fixed-layout/header/FixedHeader';
import FixedSidebar from './components/fixed-layout/sidebar/FixedSidebar';

const browserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" render={() => (<Link to="/home">Login</Link>)} />
      <Route strict path="/:currentPage" component={FixedHeader} />
      <Route strict path="/:currentPage" component={FixedSidebar} />
    </div>
  </Router>
);

export default Routes;
