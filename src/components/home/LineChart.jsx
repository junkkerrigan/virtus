import React from 'react';
import { Col } from 'reactstrap';
import CircularProgressbar from 'react-circular-progressbar';
import { Scatter } from 'react-chartjs-2';

import 'react-circular-progressbar/dist/styles.css';
import '../../scss/home/LineChart.scss';

const data = {
  datasets: [
    {
      fill: 'origin',
      showLine: true,
      backgroundColor: '#2b4d72',
      borderColor: '#2196f3',
      pointRadius: 0,
      data: [
        { x: 0, y: 0 },
        { x: 0, y: 10 },
        { x: 5, y: 20 },
        { x: 10, y: 13 },
        { x: 15, y: 10 },
        { x: 20, y: 14 },
        { x: 25, y: 17 },
        { x: 30, y: 13 },
        { x: 35, y: 9 },
        { x: 40, y: 12 },
        { x: 40, y: 0 },
      ]
    }
  ]
};

const LineChart = () => (
  <Col lg="9" xs="12">
    <div className="line-chart">
      <ul className="bar-chart-list d-flex">
        <li className="bar-chart d-flex">
          <CircularProgressbar percentage={75} strokeWidth={6} />
          <div className="bar-chart-legend d-flex">
            <span className="number">1300</span>
            Views
          </div>
        </li>
        <li className="bar-chart d-flex">
          <CircularProgressbar percentage={35} strokeWidth={6} />
          <div className="bar-chart-legend d-flex">
            <span className="number">800</span>
            Visitors
          </div>
        </li>
        <li className="bar-chart d-flex">
          <CircularProgressbar percentage={62} strokeWidth={6} />
          <div className="bar-chart-legend d-flex">
            <span className="number">3800</span>
            Impressions
          </div>
        </li>

      </ul>
      <div>
        <Scatter
          data={data}
          legend={{ display: false }}
          options={{
            scales: {
              xAxes: [{
                display: false
              }],
              yAxes: [{
                display: false
              }]
            },
            maintainAspectRatio: false
          }}
          height={200}
        />
      </div>
    </div>
  </Col>
);

export default LineChart;

