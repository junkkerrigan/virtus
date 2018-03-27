import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineChart from './LineChart';
import BarChart from './BarChart';
import Calendar from './Calendar';
import ProjectsList from './ProjectsList';

const Home = () => (
  <Container className="home-page">
    <Row>
      <LineChart />
      <ProjectsList />
      <BarChart />
      <Col xs="3" />
      <Calendar />
    </Row>
  </Container>
);

export default Home;
