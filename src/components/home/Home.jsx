import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineChartHome from './LineChartHome';
import BarChart from './BarChart';
import Calendar from './Calendar';
import ProjectsList from './ProjectsList';

// TODO: add inbox, when added messages data

const Home = () => (
  <Container className="home-page">
    <Row>
      <LineChartHome />
      <ProjectsList />
      <BarChart />
      <Col xs="3" />
      <Calendar />
    </Row>
  </Container>
);

export default Home;
