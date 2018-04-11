import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { chooseDialog } from '../../redux/actions';
import usersData from '../../data/usersProfilesData';

import '../../scss/conversations/Dialog.scss';

const mapStateToProps = state => ({
  currentDialog: state.conversations.currentDialog
});

const mapDispatchToProps = dispatch => ({
  chooseDialog: dialog => dispatch(chooseDialog(dialog))
});

const getDate = date => {
  const m = moment(date), today = moment(new Date(2016, 4, 11, 18, 0));
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  if (today.diff(m, 'days', true)<1) {
    let time='Today, ' + m.get('hour')%12 + ':' + m.get('minute');
    time+=m.get('hour')<=12? ' AM' : ' PM';
    return time;
  }
  /*if (today.diff(m, 'days', true)<2) {
    let time='Yesterday, ' + (m.get('hour')%12).toString(10) + ':' +
        m.get('minute').toString(10);
    time+=m.get('hour')<=12? ' AM' : ' PM';
    return time;
  }*/

  let time = m.get('date') + ' ' + months[m.get('month')];
  if (today.diff(m, 'years', true)>=1) time+= m.get('year');
  return time;
};

const cutText = text => {
  if (text.length>=110) text=text.substr(0, 110) + '...';
  return text;
};

const Dialog = props => {
  const { chooseDialog, lastMessage, user, currentDialog } = props;
  const { text, status, date, sender } = lastMessage;
  const { avatar, name } = usersData[user];
  return (
    <li
      className={`dialog ${currentDialog===user? 'active' : ''}`}
      onClick={() => chooseDialog(user)}
    >
      <div className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center dialog-user-wrapper'>
          <img src={avatar} width='36' height='36' />
          <h5 className='dialog-user ellipsis mw-100'>{name}</h5>
        </div>
        <span className={`dialog-time
          ${(sender===user && status==='new')? 'new' : ''}`}>
            {getDate(date)}
          </span>
      </div>
      <p className='dialog-message'>{cutText(text)}</p>
    </li>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);