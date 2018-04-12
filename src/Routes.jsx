import React, { Component } from 'react';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';
import FixedHeader from './components/fixed-layout/header/FixedHeader';
import FixedSidebar from './components/fixed-layout/sidebar/FixedSidebar';
import Home from './components/home/Home';
import Work from './components/work/Work';
import Statistics from './components/statistics/Statistics';
import Conversations from './components/conversations/Conversations';
import data from './data/conversationsData';
import { addConversationsData } from './redux/actions';

const browserHistory = createBrowserHistory();

const mapDispatchToProps = dispatch => ({
  addConversationsData: (data => dispatch(addConversationsData(data)))
});

class Routes extends Component {
  componentWillMount() {
    const { addConversationsData } = this.props;
    addConversationsData(data);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Switch>
          <Route exact path='/' render={() => (<Link to='/home'>Login</Link>)} />
          <Route strict path='/:currentPage'>
            <div>
              <Route component={FixedSidebar} />
              <Route component={FixedHeader} />
              <div className='page'>
                <Switch>
                  <Route path='/home' component={Home} />
                  <Route path='/work' component={Work} />
                  <Route path='/statistics' component={Statistics} />
                  <Route path='/conversations' component={Conversations} />
                </Switch>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect(null, mapDispatchToProps)(Routes);
