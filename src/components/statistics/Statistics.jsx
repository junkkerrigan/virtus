import React from 'react';
import { Container } from  'reactstrap';
import LineChartStatistics from './LineChartStatistics';

import '../../scss/statistics/Statistics.scss';

const Statistics = () => {
  return (
    <Container className='statistics-page'>
      <LineChartStatistics />
    </Container>
  );
};

export default Statistics;