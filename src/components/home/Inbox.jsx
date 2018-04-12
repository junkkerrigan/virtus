import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import map from 'lodash/map';
import shortid from 'shortid';
import moment from 'moment';
import InboxItem from './InboxItem';

//TODO: change *harry*

import '../../scss/home/Inbox.scss';

const mapStateToProps = state => ({
  data: state.conversations.data,
  lastMessage: state.conversations.lastMessage
});

const comparator = (a, b) => {
  const f=moment(a.date), s=moment(b.date);
  if (f.diff(s, 'milliseconds', true)<0) return 1;
  if (f.diff(s, 'milliseconds', true)>0) return -1;
  return 0;
};

const Inbox = props => {
  const { data } = props;
  console.log(data);
  let inbox = [], newMessages = 0;
  for (let i in data) {
    data[i].active.forEach(item => {
      if (item.sender!=='harry') {
        inbox.push(item);
        if (item.status === 'new') {
          newMessages++;
        }
      }
    })
  }
  inbox.sort((a, b) => comparator(a, b));
  return (
    <Col
      sm={{ size: 12, offset: 0 }}
      md={{ size: 6, offset: 3 }}
      lg={{ size: 3, offset: 0 }}
      className='shadow-wrapper'
    >
      <header className="home-section-header inbox-header d-flex">
        <h3 className="home-section-title">
          {
            newMessages?
              <Link to='/conversations'>
                Inbox (<span className='inbox-new'>{newMessages}</span>)
              </Link>
              :
              <Link to='/conversations'>Inbox</Link>
          }
        </h3>
      </header>
      <ul className='inbox-list'>
        {
          map(inbox, item => {
            return (<InboxItem
              key={shortid.generate()}
              message={item}
            />)
          })
        }
      </ul>
    </Col>
  )
};

export default connect(mapStateToProps)(Inbox);
