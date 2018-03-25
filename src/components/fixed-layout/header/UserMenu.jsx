import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import userAvatar from '../../../images/general-user.png';

class UserMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  //TODO: add redirect to login page

  render() {
    const { isOpen } = this.state;
    return (
        <Dropdown isOpen={isOpen} toggle={this.toggleMenu}>
          <DropdownToggle>
            <img src={userAvatar} alt="user avatar" width="40" height="40" className='user-avatar'/>
            <i className='fa fa-angle-down' />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link to='/settings'>Settings</Link>
            </DropdownItem>
            <DropdownItem>Log out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
    );
  }
}

export default UserMenu;