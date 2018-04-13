import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import map from 'lodash/map';
import shortid from 'shortid';
import Project from './Project';

import '../../scss/work/AllProjects.scss';

class AllProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersData: this.props.ordersData
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeFilter!==this.props.activeFilter) {
      let { activeFilter, ordersData } = nextProps;
      ordersData = ordersData.filter(item => activeFilter==='all' || item.author===activeFilter);
      this.setState({
        ordersData
      })
    }
  }

  render() {
    const { ordersData } = this.state;
    return (
      <Container className='all-projects'>
        <ul className='all-projects-header'>
          <li>Project title</li>
          <li>Value</li>
          <li>Deadline</li>
          <li>Time spent</li>
          <li>Progress</li>
          <li>Status</li>
          <li>Assigned to</li>
        </ul>
        <Row tag='ul' className="all-projects-list no-gutters">
          {
            map(ordersData, item => (
              <Project order={item} key={shortid.generate()} />
            ))
          }
        </Row>
      </Container>
    );
  }
}

export default AllProjects;