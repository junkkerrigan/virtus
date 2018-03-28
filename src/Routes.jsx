import React from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import FixedHeader from './components/fixed-layout/header/FixedHeader';
import FixedSidebar from './components/fixed-layout/sidebar/FixedSidebar';
import Home from './components/home/Home';
import Work from './components/work/Work';

const browserHistory = createBrowserHistory();

const Routes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" render={() => (<Link to="/home">Login</Link>)} />
      <Route strict path="/:currentPage">
        <div>
          <Route component={FixedSidebar} />
          <Route component={FixedHeader} />
          <div className="page">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/work" component={Work} />
            </Switch>
          </div>
        </div>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
