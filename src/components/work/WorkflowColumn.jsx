import React from 'react';
import { Col } from 'reactstrap';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import map from 'lodash/map';
import ProjectItem from '../home/ProjectItem';

import '../../scss/work/WorkflowColumn.scss';


const WorkflowColumn = props => {
  const { ordersData, title } = props;
  const totalPrice = () => {
    let total=0;
    for (let order of ordersData) {
      total+=order.price;
    }
    return total;
  };

  return (
    <Droppable direction="vertical" droppableId={title}>
      {
        provided => (
          <Col xl="3" lg="4" md="6" xs="12" className="workflow-column">
            <header className="workflow-column-header">
              <h5 className="workflow-column-title">{title}</h5>
              <span className="workflow-column-total">
                {ordersData.length===1? '1 project' : ordersData.length + ' projects'}
              </span>
              <span className="workflow-column-total price">
                {'$' + totalPrice()}
              </span>
            </header>
            <ul
              className="workflow-column-list"
              ref={provided.innerRef}
            >
              {
                map(ordersData, (item, index) => (
                  <Draggable key={item.key} draggableId={item.key} index={index}>
                    {
                      provided => (
                        <li>
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="workflow-item-wrapper"
                          >
                            <ProjectItem order={item} tag='div' options />
                          </div>
                          {provided.placeholder}
                        </li>
                      )
                    }
                  </Draggable>))}
              {provided.placeholder}
            </ul>
          </Col>
        )
      }
    </Droppable>
  );
};

export default WorkflowColumn;

