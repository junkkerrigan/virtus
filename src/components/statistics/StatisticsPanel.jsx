import React, { Component } from 'react';
import map from 'lodash/map';

import '../../scss/statistics/StatisticcsPanel.scss';

const changeDirection = currentDir => currentDir==='UP'? 'DOWN' : 'UP';

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

  //TODO: add campaigns data
  //TODO: add campaigns list with sort

  render() {
    const { activeFilter, direction } = this.state;
    return (
      <div className='f'>
        <header className='panel-header'>
          <button
            className={`panel-header-data ${activeFilter==='campaign'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='campaign'
          >
            Campaign
            <i className={
              `fa fa-angle-${(activeFilter==='campaign' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='time'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='time'
          >
            Time
            <i className={
              `fa fa-angle-${(activeFilter==='time' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='views'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='views'
          >
            Views
            <i className={
              `fa fa-angle-${(activeFilter==='views' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='visitors'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='visitors'
          >
            Visitors
            <i className={
              `fa fa-angle-${(activeFilter==='visitors' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='CTR'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='CTR'
          >
            CTR
            <i className={
              `fa fa-angle-${(activeFilter==='CTR' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='CPC'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='CPC'
          >
            CPC
            <i className={
              `fa fa-angle-${(activeFilter==='CPC' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='CPV'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='CPV'
          >
            CPV
            <i className={
              `fa fa-angle-${(activeFilter==='CPV' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='CPM'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='CPM'
          >
            CPM
            <i className={
              `fa fa-angle-${(activeFilter==='CPM' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
          <button
            className={`panel-header-data ${activeFilter==='status'? 'active' : ''}`}
            onClick={this.onSortTypeChange}
            value='status'
          >
            Status
            <i className={
              `fa fa-angle-${(activeFilter==='status' && direction==='UP')? 'up' : 'down'}`
            } />
          </button>
        </header>
      </div>
    )
  }
}

export default StatisticsPanel;