import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import usersData from '../../../data/usersProfilesData';

import '../../../scss/fixed-layout/header/UserMenu.scss';

import unknownUser from '../../../images/unknown-user.png';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

class UserMenu extends Component {
  state = {
    isOpen: false,
    isLoggedOut: false
  };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  logOut = () => {
    this.setState({
      isLoggedOut: true
    })
  };

  //TODO: add redirect to login page and stylize menu

  render() {
    const { isOpen, isLoggedOut } = this.state;
    const { currentUser } = this.props;
    return (
      <Dropdown isOpen={isOpen} toggle={this.toggleMenu} className='fixed-header-menu'>
        <DropdownToggle>
          <img
            src={currentUser? usersData[currentUser].avatar : unknownUser }
            alt="user avatar"
            width="40"
            height="40"
          />
          <i className='fa fa-angle-down' />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header>Welcome, {currentUser}</DropdownItem>
          <DropdownItem>
            <Link to='/settings'>Settings</Link>
          </DropdownItem>
          <DropdownItem onClick={this.logOut}>Log out</DropdownItem>
        </DropdownMenu>
        {
          isLoggedOut && <Redirect to='/' />
        }
      </Dropdown>
    );
  }
}

export default connect(mapStateToProps)(UserMenu);