import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import map from 'lodash/map';
import { connect } from 'react-redux';
import shortid from 'shortid';
import ProjectItem from './ProjectItem';
import ordersData from '../../data/ordersData';

import '../../scss/home/ProjectsList.scss';

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

const ProjectsList = props => {
  const { currentUser } = props;
  return (
    <Col
      lg={{ size: 3, offset: 0 }}
      md={{ size: 6, offset: 3 }}
      sm={{ size: 12, offset: 0 }}
      className='shadow-wrapper'
    >
      <header className='project-list-header home-section-header d-flex'>
        <h3 className='home-section-title'>
          <Link to='/work'>Your projects</Link>
        </h3>
      </header>
      <ul className='project-list'>
        {
          map(ordersData, (item) => {
            if (item.assignedTo === currentUser) {
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
};

export default connect(mapStateToProps)(ProjectsList);
