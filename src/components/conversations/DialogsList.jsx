import React, { Component } from 'react';
import map from 'lodash/map';
import shortid from 'shortid';
import moment from 'moment';
import { connect } from 'react-redux';
import Dialog from './Dialog';

import '../../scss/conversations/DialogsList.scss';

const mapStateToProps = state => ({
  data: state.conversations.data,
  dialogsFilter: state.conversations.dialogsFilter,
  lastMessage: state.conversations.lastMessage
});

const comparator = {
  date: (a, b) => {
    const aa=a[1].active, bb=b[1].active;
    const f=moment(aa[aa.length - 1].date), s=moment(bb[bb.length - 1].date);
    if (s.diff(f, 'minutes', true)>0) return 1;
    if (s.diff(f, 'minutes', true)<0) return -1;
    return 0;
  },
  names: (a, b) => {
    if (a[0]>b[0]) return 1;
    if (a[0]<b[0]) return -1;
    return 0;
  }
};

class DialogsList extends Component {
  state = {
    isDialogsOpen: false
  };

  onDialogsOpen = () => {
    this.setState({
      isDialogsOpen: !this.state.isDialogsOpen
    })
  };

  render() {
    const { dialogsFilter, data } = this.props;
    let dataArray=[];
    for (let key in data) {
      dataArray.push([key, data[key]]);
    }
    dataArray.sort((a, b) => comparator[dialogsFilter](a, b));
    return (
      <div className={`dialogs ${this.state.isDialogsOpen? 'open' : ''}`}>
        <button type='button' className='fa fa-bars dialogs-toggle' onClick={this.onDialogsOpen}/>
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
      </div>
    );
  }
}

export default connect(mapStateToProps)(DialogsList);