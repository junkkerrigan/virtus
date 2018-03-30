import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import { Scatter } from 'react-chartjs-2';

import 'react-circular-progressbar/dist/styles.css';

import { statisticsPageData as data } from '../../data/lineChartData';
import config from '../../config/lineChartConfig';

import '../../scss/home/LineChart.scss';

const chartData = data => ({
  datasets: [
    Object.assign({}, config.look, data)
  ]
});

class LineChartStatistics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPeriod: 'week'
    }
  }

  onPeriodChange = event => {
    this.setState({
      currentPeriod: event.target.value
    })
  };

  render() {
    const { currentPeriod } = this.state;
    const doughnutChart = data.doughnut[currentPeriod].chartData;
    const doughnutLegend= data.doughnut[currentPeriod].legendData;
    return (
      <div>
        <header className='line-chart-header'>
          <ul className="doughnut-chart-list d-flex">
            <li className="doughnut-chart d-flex">
              <CircularProgressbar percentage={doughnutChart[0]} strokeWidth={6} />
              <div className="doughnut-chart-legend d-flex">
                <span className="number">{doughnutLegend[0]}</span>
                Views
              </div>
            </li>
            <li className="doughnut-chart d-flex">
              <CircularProgressbar percentage={doughnutChart[1]} strokeWidth={6} />
              <div className="doughnut-chart-legend d-flex">
                <span className="number">{doughnutLegend[1]}</span>
                Visitors
              </div>
            </li>
            <li className="doughnut-chart d-flex">
              <CircularProgressbar percentage={doughnutChart[2]} strokeWidth={6} />
              <div className="doughnut-chart-legend d-flex">
                <span className="number">{doughnutLegend[2]}</span>
                Impressions
              </div>
            </li>
          </ul>
          <div className='line-chart-period-wrapper'>
            <select className='line-chart-period' onChange={this.onPeriodChange}>
              <option value='week'>Week</option>
              <option value='month'>Month</option>
              <option value='year'>Year</option>
            </select>
          </div>
        </header>
        <div>
          <Scatter
            data={chartData(data.line[currentPeriod])}
            legend={{ display: false }}
            options={config.options}
            height={300}
          />
        </div>
      </div>
    );
  }
}

export default LineChartStatistics;


