import React, { Component } from 'react';
import map from 'lodash/map';
import shortid from 'shortid';
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

class StatisticsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFilter: 'status',
      direction: 'DOWN'
    };
  }

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

  //TODO: sort campaigns list

  render() {
    const { activeFilter, direction } = this.state;
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