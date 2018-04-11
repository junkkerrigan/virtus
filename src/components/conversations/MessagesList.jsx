import React from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import shortid from 'shortid';
import Message from './Message';

import '../../scss/conversations/MessagesList.scss';

const mapStateToProps = state => ({
  currentDialog: state.conversations.currentDialog,
  data: state.conversations.data,
  messagesFilter: state.conversations.messagesFilter
});

//TODO: add callback from bot
//TODO: add messages adding
//TODO: dialog starts from end


const MessagesList = props => {
  let { currentDialog, data, messagesFilter } = props;
  if (currentDialog) {
    if (messagesFilter === 'trash') {
      data = data[currentDialog].trash;
    } else if (messagesFilter === 'sent') {
      data = data[currentDialog].active;
      data=data.filter(item => item.sender==='harry');
    } else data=data[currentDialog].active;
  } else data=[];
  return (
    <div className='messages'>
      <ul className='messages-list'>
        {
          map(data, item => {
            return <Message key={shortid.generate()} message={item} />;
          })
        }
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

export default connect(mapStateToProps)(MessagesList);