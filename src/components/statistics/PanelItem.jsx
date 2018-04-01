import React from 'react';
import map from 'lodash/map';
import shortid from 'shortid';

import '../../scss/statistics/PanelItem.scss';

const change = (key, item) => {
  if (key==='CTR') return item + '%';
  else if (key==='CPC' || key==='CPV' || key==='CPM') return '$' + item;
  else return item;
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
