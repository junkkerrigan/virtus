import React from 'react';
import { Nav, NavItem, NavLink, Container } from 'reactstrap';
import { connect } from 'react-redux';
import map from 'lodash/map';
import { toggleTab, toggleFilter } from '../../redux/actions';

import '../../scss/work/Navigation.scss';

const mapStateToProps = state => {
  const { activeTab } = state.work;
  return {
    activeTab
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleTab: (tab => dispatch(toggleTab(tab))),
    toggleFilter: (filter => dispatch(toggleFilter(filter)))
  };
};

const Navigation = props => {
  const {
    toggleTab, toggleFilter, activeTab, numberOfProjects, companies
  } = props;
  return (
    <div className="nav-wrapper">
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab==='allProjects'? 'active' : ''}
              onClick={() => toggleTab('allProjects')}
            >
              All projects ({numberOfProjects})
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab==='workflow'? 'active' : ''}
              onClick={() => toggleTab('workflow')}
            >
              Workflow
            </NavLink>
          </NavItem>
        </Nav>
        <div className='company-filter-wrapper'>
          <select className='company-filter'
            onChange={(event) => toggleFilter(event.target.value)}
          >
            <option value='all'>All</option>
            {
              map(companies, item => (
                <option value={item} key={item}>{item}</option>
              ))
            }
          </select>
        </div>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);