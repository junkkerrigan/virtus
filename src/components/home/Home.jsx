import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LineChart from './LineChart';
import BarChart from './BarChart';
import Calendar from './Calendar';

const Home = () => (
  <Container>
    <Row>
      <LineChart />
      <Col xs="3" />
      <BarChart />
      <Col xs="3" />
      <Calendar />
    </Row>
  </Container>
);

export default Home;
