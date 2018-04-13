import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Container } from 'reactstrap';
import Register from './Register';
import Login from './Login';

import '../../scss/sign/Sign.scss';

class Sign extends Component {
  state = {
    activeTab: 'register'
  }; // TODO: change start tab

  toggleTab = tab => {
    if (this.state.activeTab!==tab) {
      this.setState({
        activeTab: tab
      })
    }
  };

  render() {
    const { activeTab } = this.state;
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

export default Sign;