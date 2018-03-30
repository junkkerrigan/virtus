import React from 'react';
import { Col } from 'reactstrap';
import CircularProgressbar from 'react-circular-progressbar';
import { Scatter } from 'react-chartjs-2';

import 'react-circular-progressbar/dist/styles.css';

import { homePageData as data } from '../../data/lineChartData';
import config from '../../config/lineChartConfig';

import '../../scss/home/LineChart.scss';

const chartData = {
  datasets: [
    Object.assign({}, config.look, data)
  ]
};

const LineChartHome = () => (
  <Col lg="9" xs="12">
    <div className="line-chart">
      <ul className="doughnut-chart-list d-flex">
        <li className="doughnut-chart d-flex">
          <CircularProgressbar percentage={75} strokeWidth={6} />
          <div className="doughnut-chart-legend d-flex">
            <span className="number">1300</span>
            Views
          </div>
        </li>
        <li className="doughnut-chart d-flex">
          <CircularProgressbar percentage={35} strokeWidth={6} />
          <div className="doughnut-chart-legend d-flex">
            <span className="number">800</span>
            Visitors
          </div>
        </li>
        <li className="doughnut-chart d-flex">
          <CircularProgressbar percentage={62} strokeWidth={6} />
          <div className="doughnut-chart-legend d-flex">
            <span className="number">3800</span>
            Impressions
          </div>
        </li>

      </ul>
      <div>
        <Scatter
          data={chartData}
          legend={{ display: false }}
          options={config.options}
          height={200}
        />
      </div>
    </div>
  </Col>
);

export default LineChartHome;

