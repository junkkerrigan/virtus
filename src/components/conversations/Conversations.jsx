import React from 'react';
import Filters from './Filters';
import data from '../../data/conversationsData';

let newMessages = 0;
for (let item in data) {
  data[item].forEach(item => { if (item.status==='new') newMessages++; })
}

const Conversations = () => (
  <div className='conversations-page'>
    <Filters newMessages={newMessages} />
  </div>
);

export default Conversations;