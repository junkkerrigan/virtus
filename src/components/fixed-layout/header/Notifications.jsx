import React, { Component } from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { connect } from 'react-redux';
import map from 'lodash/map';
import shortid from 'shortid';
import { comparator } from '../../home/Inbox';
import InboxItem from '../../home/InboxItem';

import '../../../scss/fixed-layout/header/Notifications.scss';

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  data: state.conversations.data
});

class Notifications extends Component {
  state = {
    isOpen: false,
    isBadgeVisible: false
  };

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

  render() {
    const { isOpen, isBadgeVisible } = this.state;
    const { data, currentUser } = this.props;
    let inbox = [];
    for (let i in data) {
      data[i].active.forEach(item => {
        if (item.sender !== currentUser) inbox.push(item);
      })
    }
    inbox.sort((a, b) => comparator(a, b));
    inbox = inbox.splice(0, 5);
    return (
      <Dropdown isOpen={isOpen} toggle={this.toggleNotifications} className='fixed-header-notifications'>
        <DropdownToggle>
          <i className='fa fa-bell-o' />
          {
            isBadgeVisible? <span className='notifications-badge' /> : ''
          }
        </DropdownToggle>
        <DropdownMenu right>
          {
            map(inbox, item => {
              return (<InboxItem
                  key={shortid.generate()}
                  tag='div'
                  message={item}
              />)
            })
          }
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default connect(mapStateToProps)(Notifications);