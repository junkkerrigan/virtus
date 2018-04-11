import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import Filters from './Filters';
import DialogsList from './DialogsList';
import MessagesList from './MessagesList';
import data from '../../data/conversationsData';
import { addConversationsData } from '../../redux/actions';

//TODO: change *harry* to currentUser when add login

const mapDispatchToProps = dispatch => ({
  addConversationsData: (data => dispatch(addConversationsData(data)))
});

class Conversations extends Component {
  componentWillMount() {
    const { addConversationsData } = this.props;
    addConversationsData(data);
  }

  render() {
    return (
      <div className='conversations-page'>
        <Filters />
        <Container>
          <Row>
            <DialogsList />
            <MessagesList />
          </Row>
        </Container>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Conversations);