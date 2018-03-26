import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

import '../../../scss/fixed-layout/header/Notifications.scss';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isBadgeVisible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isBadgeVisible: !this.state.isBadgeVisible
      });
    }, 3000);
  }

  toggleNotifications = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };

  //TODO: add last messages

  render() {
    const { isOpen } = this.state;
    return (
      <Dropdown isOpen={isOpen} toggle={this.toggleNotifications} className='fixed-header-notifications'>
        <DropdownToggle>
          <i className='fa fa-bell-o' />
          {
            this.state.isBadgeVisible? <span className='notifications-badge' /> : ''
          }
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>Message</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Notifications;