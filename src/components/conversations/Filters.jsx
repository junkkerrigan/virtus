import React from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleMessagesFilter, toggleDialogsFilter } from '../../redux/actions';

import '../../scss/conversations/Filters.scss';

const mapDispatchToProps = dispatch => ({
  toggleMessagesFilter: (filter => dispatch(toggleMessagesFilter(filter))),
  toggleDialogsFilter: (filter => dispatch(toggleDialogsFilter(filter))),
});

const mapStateToProps = state => ({
  messagesFilter: state.conversations.messagesFilter
});

const Filters = props => {
  const {
    toggleMessagesFilter, toggleDialogsFilter, newMessages, messagesFilter
  } = props;
  return (<div className='filters-wrapper'>
    <Container className='filters d-flex'>
      <div>
        <label className={`filters-messages
          ${messagesFilter==='inbox'? 'active' : ''}`}>
          Inbox {
            newMessages? `(${newMessages})` : ''
          }
          <input
            type='radio'
            name='messagesFilter'
            value='inbox'
            onChange={event => toggleMessagesFilter(event.target.value)}
          />
        </label>
        <label className={`filters-messages
          ${messagesFilter==='sent'? 'active' : ''}`}>
          Sent
          <input
            type='radio'
            name='messagesFilter'
            value='sent'
            onChange={event => toggleMessagesFilter(event.target.value)}
          />
        </label>
        <label className={`filters-messages
          ${messagesFilter==='trash'? 'active' : ''}`}>
          Trash
          <input
            type='radio'
            name='messagesFilter'
            value='trash'
            onChange={event => toggleMessagesFilter(event.target.value)}
          />
        </label>
      </div>
      <div className='filters-dialogs-wrapper'>
        <select
          className='filters-dialogs'
          onChange={event => toggleDialogsFilter(event.target.value)}
        >
          <option value='date'>Date</option>
          <option value='names'>Names</option>
        </select>
      </div>
    </Container>
  </div>)
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);