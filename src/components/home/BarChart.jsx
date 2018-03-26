import React, { Component } from 'react';
import { Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import config from '../../config/barChart';
import data from './data/barChartData';

const chartData = (currentPeriod) => ({
  labels: data[currentPeriod].data.map(() => ''),
  datasets: [
    Object.assign({}, config, data[currentPeriod])
  ]
});

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPeriod: 'year'
    }
  }

  onPeriodChange = (event) => {
    this.setState({
      currentPeriod: event.target.value
    })
  };

  render() {
    const currentData = chartData(this.state.currentPeriod);
    console.log(currentData);
    return (
      <Col
        lg={{ size: 6, offset: 0 }}
        md={{ size: 8, offset: 2 }}
        sm={{ size: 12, offset: 0 }}
        className='bar-chart'
      >
        <header className='bar-chart-header'>
          <h3>Sales report</h3>
          <div className='bar-chart-period-wrapper'>
            <select className='bar-chart-period' onChange={this.onPeriodChange}>
              <option value='year'>Year</option>
              <option value='month'>Month</option>
            </select>
          </div>
        </header>
        <div>
          <Bar data={currentData} />
        </div>
      </Col>
    );
  }
}

export default BarChart;