import React from 'react';
import { Link } from 'react-router-dom';
import usersData from '../../data/usersProfilesData';
import { getDate, cutText } from '../conversations/Dialog';

import '../../scss/home/InboxItem.scss';

const InboxItem = props => {
  const { sender, text, date, status } = props.message;
  const { avatar, name } = usersData[sender];
  const { tag } = props;
  let Tag;
  if (tag) Tag=`${tag}`;
  return (
    <Tag className='inbox-item d-flex align-items-center'>
      <img src={avatar} width='36' height='36' />
      <div className='d-flex flex-column align-items-start inbox-item-data'>
        <div className='d-flex justify-content-between align-items-center  w-100'>
          <h6 className='inbox-item-user ellipsis'>
            <Link to='/conversations'>{name}</Link>
            </h6>
          <span className={`inbox-item-time ${status==='new'? 'new' : ''}`}>
            {getDate(date)}
          </span>
        </div>
        <p className='inbox-item-text'>{cutText(text, 50)}</p>
      </div>
    </Tag>
  );
};

export default InboxItem;