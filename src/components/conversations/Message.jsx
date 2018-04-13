import React from 'react';
import moment from 'moment';
import usersData from '../../data/usersProfilesData';

import '../../scss/conversations/Message.scss';

const getTime = date => {
  const m=moment(date);
  const getMinutes = minutes => minutes<10? '0' + minutes : minutes;
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  let time=m.get('date') + ' ' + months[m.get('month')] + ' ' + m.get('year') +
    ', ' + m.get('hour')%12 + ':' + getMinutes(m.get('minute'));
  time+=m.get('hour')<=12? ' AM' : ' PM';
  return time;
};

const Message = props => {
  const { sender, text, date } = props.message;
  return (
    <li className={`message d-flex ${sender==='harry'? 'in' : 'out'}`}>
      <div className='d-flex message-user'>
        <img src={usersData[sender].avatar} width='50' height='50' alt='user avatar' />
        <div className='message-text-wrapper'>
          <p className='message-text'>{text}</p>
        </div>
      </div>
      <span className='message-time'>{getTime(date)}</span>
    </li>
  );
};

export default Message;