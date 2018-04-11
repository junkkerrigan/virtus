import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import shortid from 'shortid';
import moment from 'moment';

import '../../scss/conversations/MessagesList.scss';

const MessagesList = props => {
  return (
    <div className='messages'>
      <ul className='messages-list'>

      </ul>
      <form action='#' method='post' className='messages-form'>
        <input
          type='text'
          className='messages-input'
          placeholder='Write a message'
          name='userMessage'
        />
        <label className='messages-sent'>
          <i className='fa fa-paper-plane' />
          <input type='submit' className='messages-send' value='' />
        </label>
        <label className='messages-files'>
          <i className='fa fa-paperclip' />
          <input type='file' name='userFile' value='' />
        </label>
      </form>
    </div>
  );
};

export default MessagesList;