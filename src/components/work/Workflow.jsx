import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import shortid from 'shortid';
import map from 'lodash/map';
import WorkflowColumn from './WorkflowColumn';

import '../../scss/work/Workflow.scss';

const titles = [
  'quened',
  'planning',
  'design',
  'development',
  'testing',
  'completed'
];

class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersData: this.props.ordersData
    };
  }

  onDragEnd = (result) => {
    if (!result.destination) return;
    const from = result.source,
        to = result.destination;
    const { ordersData } = this.state;
    const [removed] = ordersData[from.droppableId].splice(from.index, 1);
    ordersData[to.droppableId].splice(to.index, 0, removed);
    this.setState({
      ordersData
    });
  };

  componentWillMount() {
    let { ordersData } = this.state;
    ordersData = ordersData.map(item => Object.assign({}, item, { key: shortid.generate() }));
    let newData = {};
    titles.forEach(item => {
      newData[item] = ordersData.filter(order => order.status===item);
    });
    this.setState({
      ordersData: newData
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeFilter!==this.props.activeFilter) {
      let { activeFilter, ordersData } = nextProps;
      ordersData = ordersData.map(item => Object.assign({}, item, { key: shortid.generate() }));
      ordersData = ordersData.filter(item => activeFilter==='all' || item.author===activeFilter);
      let newData = {};
      titles.forEach(item => {
        newData[item] = ordersData.filter(order => order.status===item);
      });
      this.setState({
        ordersData: newData
      })
    }
  }

  render() {
    const { ordersData } = this.state;
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Row className='workflow'>
            {
              map(titles, item => {
                return <WorkflowColumn
                  ordersData={ordersData[item]}
                  key={shortid.generate()}
                  title={item}
                />
              })
            }
          </Row>
        </DragDropContext>
      </Container>
    );
  }
}

export default Workflow;