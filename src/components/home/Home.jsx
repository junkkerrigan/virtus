import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import LineChartHome from './LineChartHome';
import BarChart from './BarChart';
import Calendar from './Calendar';
import ProjectsList from './ProjectsList';
import Inbox from './Inbox';

// TODO: add inbox, when added messages data


class Home extends Component {

  render() {
    return (
      <Container className='home-page'>
        <Row>
          <LineChartHome />
          <ProjectsList />
          <BarChart />
          <Inbox />
          <Calendar />
        </Row>
      </Container>
    );
  }
}

export default Home;
