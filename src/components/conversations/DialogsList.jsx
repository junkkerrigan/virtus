import React from 'react';
import { Col } from 'reactstrap';
import map from 'lodash/map';
import shortid from 'shortid';
import moment from 'moment';
import { connect } from 'react-redux';
import Dialog from './Dialog';

import '../../scss/conversations/DialogsList.scss';

const mapStateToProps = state => ({
  data: state.conversations.data,
  dialogsFilter: state.conversations.dialogsFilter
});

const comparator = (a, b) => {
  const f=moment(a[a.length - 1].date), s=moment(b[b.length - 1].date);
  if (s.diff(f, 'minutes', true)>0) return 1;
  if (s.diff(f, 'minutes', true)<0) return -1;
  return 0;
};

const DialogsList = props => {
  const { data, dialogsFilter } = props;
  let dataArray=[];
  for (let key in data) {
    dataArray.push([key, data[key]]);
  }
  dataArray.sort((a, b) => comparator(a[1].active, b[1].active));
  return (
    <Col className='dialogs' xs='4'>
      <ul className='dialogs-list'>
        {
          map(dataArray, item => {
            return <Dialog
              key={shortid.generate()}
              lastMessage={item[1].active[item[1].active.length-1]}
              user={item[0]}
            />
          })
        }
      </ul>
      <button className='dialogs-new'>
        New conversation
      </button>
    </Col>
  );
};

export default connect(mapStateToProps)(DialogsList);