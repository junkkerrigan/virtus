import React from 'react';
import { TabContent, TabPane, Container } from 'reactstrap';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import ordersData from '../../data/ordersData';

import '../../scss/work/Work.scss';

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
    <Container className='workflow-page'>
      <Navigation
        numberOfProjects={ordersData.length}
        companies={differentCompanies}
      />
      <TabContent activeTab={activeTab}>
        <TabPane tabId='allProjects'>

        </TabPane>
        <TabPane tabId='workflow'>

        </TabPane>
      </TabContent>
    </Container>
  );
};

export default connect(mapStateToProps)(Work);