import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Register from './Register';
import Login from './Login';
import { userSign } from '../../redux/actions';

import '../../scss/sign/Sign.scss';

class Sign extends Component {
  state = {
    activeTab: 'login'
  };

  toggleTab = tab => {
    if (this.state.activeTab!==tab) {
      this.setState({
        activeTab: tab
      })
    }
  };

  render() {
    const { activeTab } = this.state;
    const { userSign } = this.props;

    const currentUser = localStorage.getItem('currentUser') ||
      localStorage.getItem('currentUser');

    if (currentUser) {
      userSign(currentUser);
      return (
        <Redirect to='/home' />
      )
    }

    return (
      <div className='sign-page-wrapper'>
        <Container>
          <div className='sign-page shadow-wrapper'>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={`${activeTab==='register'? 'active'  : ''}`}
                  onClick={() => this.toggleTab('register')}
                >
                  Register
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={`${activeTab==='login'? 'active'  : ''}`}
                  onClick={() => this.toggleTab('login')}
                >
                  Login
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId='register'>
                <Register />
              </TabPane>
              <TabPane tabId='login'>
                <Login />
              </TabPane>
            </TabContent>
          </div>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userSign: currentUser => dispatch(userSign(currentUser))
});

export default connect(null, mapDispatchToProps)(Sign);
