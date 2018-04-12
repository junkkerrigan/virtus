import React from 'react';
import { connect } from 'react-redux';
import usersData from '../../data/usersProfilesData';

import '../../scss/conversations/UserData.scss';

const mapStateToProps = state => ({
  currentDialog: state.conversations.currentDialog
});

const cutText = text => {
  if (text && text.length>=110) text=text.substr(0, 110) + '...';
  return text;
};

const UserData = props => {
  const { currentDialog } = props;
  const user = usersData[currentDialog] || {};
  const {
    name, avatar, role, description, email, phone, address, organization, status
  } = user;
  return (
    <div className={`user-data d-flex ${currentDialog? '' : 'no-dialog'}`}>
      <img src={avatar} alt='user avatar' />
      <h4 className='user-name'>{name}</h4>
      <span className='user-role'>{role}</span>
      <p className='user-description'>{cutText(description)}</p>
      <span className='user-secondary-title'>Email</span>
      <span className='user-secondary'>{email}</span>
      <span className='user-secondary-title'>Phone</span>
      <span className='user-secondary'>{phone}</span>
      <span className='user-secondary-title'>Address</span>
      <span className='user-secondary'>{address}</span>
      <span className='user-secondary-title'>Organization</span>
      <span className='user-secondary'>{organization}</span>
    </div>
  );
};

export default connect(mapStateToProps)(UserData);