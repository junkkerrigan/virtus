import React from 'react';
import map from 'lodash/map';
import shortid from 'shortid';
import moment from 'moment';

import '../../scss/statistics/PanelItem.scss';

const change = (key, item) => {
  if (key==='CTR') return item + '%';
  if (key==='CPC' || key==='CPV' || key==='CPM') return '$' + item;
  if (key==='visitors' || key==='views') {
    let newItem = item.toString();
    const len=newItem.length;
    for (let i=len-1; i>=0; i--) {
      if ((len-i)%3===0) {
        newItem = newItem.substring(0, i) + ' ' + newItem.substring(i);
      }
    }
    return newItem;
  }
  if (key==='time') {
    const since=moment(item.since), till = moment(item.till);
    const possible = ['hours', 'days', 'weeks', 'months', 'years'];
    possible.reverse();
    for (let period of possible) {
      if (till.diff(since, period, true)>=1) {
        return till.diff(since, period) + ' ' + period;
      }
    }
  }
  return item;
};

const PanelItem = props => {
  const { data } = props;
  return (<li className='panel-item'>
    {
      map(data, (item, key) => (
        <div
          className={`panel-data ellipsis
            ${key==='status'? 'status' : ''}
            ${item==='active'? 'active' : 'disable'}`}
          key={shortid.generate()}
        >
          {change(key, item)}
        </div>
      ))
    }
  </li>);
};

export default PanelItem;
