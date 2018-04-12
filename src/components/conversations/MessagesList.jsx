import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import shortid from 'shortid';
import { addMessage } from '../../redux/actions';
import Message from './Message';

import '../../scss/conversations/MessagesList.scss';

const mapStateToProps = state => ({
  currentDialog: state.conversations.currentDialog,
  data: state.conversations.data,
  messagesFilter: state.conversations.messagesFilter
});

const mapDispatchToProps = dispatch => ({
  sendMessage: newData => dispatch(addMessage(newData))
});

//TODO: add callback from bot

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  onMessageSend = event => {
    event.preventDefault();
    let { currentDialog, data, sendMessage, messagesFilter } = this.props;
    if (currentDialog && messagesFilter!=='trash') {
      data[currentDialog].active.push({
        text: this.messageInput.value,
        date: new Date(),
        sender: 'harry',
        status: 'new'
      });
      sendMessage(data);
      this.setState({
        data
      })
    }
    this.messageInput.value = '';
  };

  componentDidUpdate() {
    this.messagesList.scrollTop = this.messagesList.scrollHeight;
    this.messageInput.value = '';
  }

  render() {
    let { currentDialog, messagesFilter } = this.props;
    let { data } = this.state;
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
        <ul className='messages-list' ref={ list => this.messagesList = list }>
          {
            map(data, item => {
              return <Message key={shortid.generate()} message={item} />;
            })
          }
        </ul>
        <form action='#' method='post' className='messages-form' onSubmit={this.onMessageSend}>
          <input
            type='text'
            className='messages-input'
            placeholder='Write a message'
            name='userMessage'
            ref={ input => this.messageInput = input }
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesList);