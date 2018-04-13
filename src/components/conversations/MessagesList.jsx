import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import shortid from 'shortid';
import { addMessage, changeLastMessage } from '../../redux/actions';
import Message from './Message';

import '../../scss/conversations/MessagesList.scss';

const mapStateToProps = state => ({
  currentDialog: state.conversations.currentDialog,
  data: state.conversations.data,
  messagesFilter: state.conversations.messagesFilter,
  currentUser: state.currentUser
});

const mapDispatchToProps = dispatch => ({
  sendMessage: newData => dispatch(addMessage(newData)),
  changeLastMessage: messageData => dispatch(changeLastMessage(messageData))
});

//TODO: add callback from bot

class MessagesList extends Component {
  onMessageSend = event => {
    event.preventDefault();
    let {
      currentDialog, data, sendMessage, messagesFilter, changeLastMessage,
      currentUser } = this.props;
    if (currentDialog && messagesFilter!=='trash') {
      const newMessage = {
        text: this.messageInput.value,
        date: new Date(),
        sender: currentUser,
        status: 'new'
      };
      data[currentDialog].active.push(newMessage);
      sendMessage(data);
      changeLastMessage();
      this.setState({
        data
      })
    }
    this.messageInput.value = '';
  };

  componentDidUpdate() {
    if (this.messagesList) {
      this.messagesList.scrollTop = this.messagesList.scrollHeight;
      this.messageInput.value = '';
    }
  }

  render() {
    let { currentDialog, messagesFilter, data, currentUser } = this.props;
    let noDialog = false;
    if (currentDialog) {
      if (messagesFilter === 'trash') {
        data = data[currentDialog].trash;
      } else if (messagesFilter === 'sent') {
        data = data[currentDialog].active;
        data=data.filter(item => item.sender===currentUser);
      } else data=data[currentDialog].active;
    } else noDialog = true;
    return (
      <div className={`messages ${noDialog? 'no-dialog' : ''}`}>
        {
          noDialog? <p >No dialog selected</p> :
            <ul className='messages-list' ref={ list => this.messagesList = list }>
              {
                map(data, item => {
                  return <Message key={shortid.generate()} message={item} />;
                })
              }
            </ul>
        }
        <form action='#' method='post' className='messages-form' onSubmit={this.onMessageSend}>
          <input
            type='text'
            className='messages-input'
            placeholder='Write a message'
            name='userMessage'
            ref={ input => this.messageInput = input }
          />
          <label
            className='messages-send'>
            <i className='fa fa-paper-plane' />
            <input type='submit' value='' />
          </label>
          <label className='messages-files'>
            <i className='fa fa-paperclip' />
            <input type='file' name='userFile' value='' />
          </label>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);