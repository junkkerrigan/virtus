import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../../scss/fixed-layout/sidebar/SidebarItem.scss';

class SidebarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBadgeVisible: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isBadgeVisible: !this.state.isBadgeVisible
      });
    }, 3000);
  }

  render() {
    const { target, iconName, location } = this.props;
    return (
      <li className="sidebar-item d-flex">
        <Link to={`/${target}`}>
          <i className={`fa fa-${iconName} ${target === location ? 'active' : ''}`} />
        </Link>
        {
          (target === 'conversations' && this.state.isBadgeVisible) ?
            <span className="conversations-badge" /> : ''
        }
      </li>
    );
  }
}


export default SidebarItem;
