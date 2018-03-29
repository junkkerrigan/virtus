import React from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { connect } from 'react-redux';
import ordersData from '../../data/ordersData';
import Navigation from './Navigation';
import Workflow from './Workflow';
import AllProjects from './AllProjects';

const mapStateToProps = state => {
  const { activeTab, activeFilter } = state.work;
  return {
    activeTab,
    activeFilter
  };
};

let companies = new Set(), differentCompanies = [];
ordersData.forEach(
  order => {
    const { author } = order;
    if (!companies.has(author)) {
      companies.add(author);
      differentCompanies.push(author);
    }
  }
);

const Work = props => {
  const { activeTab, activeFilter } = props;
  return (
    <div className='work-page'>
      <Navigation
        numberOfProjects={ordersData.length}
        companies={differentCompanies}
      />
      <TabContent activeTab={activeTab}>
        <TabPane tabId='allProjects'>
          <AllProjects ordersData={ordersData} activeFilter={activeFilter} />
        </TabPane>
        <TabPane tabId='workflow'>
          <Workflow ordersData={ordersData} activeFilter={activeFilter} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default connect(mapStateToProps)(Work);