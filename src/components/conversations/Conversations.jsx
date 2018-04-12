import React from 'react';
import { Container, Row } from 'reactstrap';
import Filters from './Filters';
import DialogsList from './DialogsList';
import MessagesList from './MessagesList';
import UserData from './UserData';

//TODO: change *harry* to currentUser when add login


const Conversations = () =>  {
  return (
    <div className='conversations-page'>
      <Filters />
      <Container>
        <Row>
          <DialogsList />
          <MessagesList />
          <UserData />
        </Row>
      </Container>
    </div>
  )
};

export default Conversations;