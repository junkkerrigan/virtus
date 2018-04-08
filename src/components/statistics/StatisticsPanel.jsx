import React, { Component } from 'react';
import map from 'lodash/map';
import shortid from 'shortid';
import moment from 'moment';
import PanelItem from './PanelItem';
import data from '../../data/statisticsPanelData';

import '../../scss/statistics/StatisticcsPanel.scss';

const changeDirection = currentDir => currentDir==='UP'? 'DOWN' : 'UP';

const PanelHeaderItem = ({direction, filter, handler, value}) => (
  <button
    className={`panel-data panel-header-data ${filter===value? 'active' : ''}`}
    onClick={handler}
    value={value}
  >
    {value}
    <i className={
      `fa fa-angle-${(filter===value && direction==='UP')? 'up' : 'down'}`
    } />
  </button>
);

const panelHeaderItems = [
  'campaign', 'time', 'views', 'visitors', 'CTR', 'CPC', 'CPV', 'CPM', 'status'
];

const comparator = (a, b, activeFilter) => {
  if (activeFilter==='time') {
    const f=moment(a.time.till).diff(moment(a.time.since)),
        s=moment(b.time.till).diff(moment(b.time.since));
    if (f > s) return 1;
    if (s > f) return -1;
    return 0;
  } else {
    if (a[activeFilter] > b[activeFilter]) return 1;
    if (a[activeFilter] < b[activeFilter]) return -1;
    return 0;
  }
};

class StatisticsPanel extends Component {
  state = {
    activeFilter: 'status',
    direction: 'DOWN'
  };

  onSortTypeChange = (event) => {
    const filter = event.target.value;
    const { activeFilter, direction } = this.state;
    activeFilter===filter?
      this.setState({
        direction: changeDirection(direction)
      })
      :
      this.setState({
        activeFilter: filter,
        direction: 'DOWN'
      })
  };

  render() {
    const { activeFilter, direction } = this.state;
    if (direction==='DOWN') {
      data.sort((a, b) => comparator(a, b, activeFilter));
    } else {
      data.sort((a, b) => comparator(b, a, activeFilter));
    }
    return (
      <div>
        <header className='panel-header panel-item'>
          {
            map(panelHeaderItems, item => (
              <PanelHeaderItem
                direction={direction}
                filter={activeFilter}
                handler={this.onSortTypeChange}
                value={item}
                key={shortid.generate()}
              />
            ))
          }
        </header>
        <ul className='panel-list'>
          {
            map(data, item => (
              <PanelItem data={item} key={shortid.generate()} />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default StatisticsPanel;