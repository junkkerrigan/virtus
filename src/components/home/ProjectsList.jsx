import React from 'react';
import { Col } from 'reactstrap';
import map from 'lodash/map';
import shortid from 'shortid';
import ProjectItem from './ProjectItem';
import ordersData from '../../data/ordersData';

import '../../scss/home/ProjectsList.scss';

// TODO: add checking all-projects by logged user

const ProjectsList = () => (
  <Col
    lg={{ size: 3, offset: 0 }}
    md={{ size: 6, offset: 3 }}
    sm={{ size: 12, offset: 0 }}
    className="project-list-wrapper"
  >
    <header className="project-list-header d-flex">
      <h3 className="home-section-title">Your projects</h3>
    </header>
    <ul className="project-list">
      {
        map(ordersData, (item) => {
          if (item.assignedTo === 'harry') {
           return (<ProjectItem
             order={item}
             key={shortid.generate()}
             tag='li'
           />);
          }
        })
      }
    </ul>
  </Col>
);

export default ProjectsList;
