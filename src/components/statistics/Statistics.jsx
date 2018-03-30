import React from 'react';
import { Container } from  'reactstrap';
import LineChartStatistics from './LineChartStatistics';
import StatisticsPanel from './StatisticsPanel';

import '../../scss/statistics/Statistics.scss';

const Statistics = () => {
  return (
    <Container className='statistics-page'>
      <LineChartStatistics />
      <StatisticsPanel />
    </Container>
  );
};

export default Statistics;