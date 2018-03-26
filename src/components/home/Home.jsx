import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import BarChart from './BarChart';
import LineChart from './LineChart';

const Home = () => (
  <Container>
    <Row>
      <LineChart />
      <Col xs="3" />
      <BarChart />
    </Row>
  </Container>
);

export default Home;
