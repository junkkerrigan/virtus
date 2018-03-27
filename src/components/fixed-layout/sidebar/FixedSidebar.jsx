import React from 'react';
import map from 'lodash/map';
import shortid from 'shortid';
import SidebarItem from './SidebarItem';
import data from '../../../data/sidebarData';

import '../../../scss/fixed-layout/sidebar/FixedSidebar.scss';

const FixedSidebar = props => (
  <aside className="fixed-sidebar">
    <ul className="fixed-sidebar-list">
      {
        map(data, item => (
          <SidebarItem
            location={props.match.params.currentPage}
            target={item.target}
            iconName={item.iconName}
            key={shortid.generate()}
          />
        ))
      }
    </ul>
  </aside>
);

export default FixedSidebar;
