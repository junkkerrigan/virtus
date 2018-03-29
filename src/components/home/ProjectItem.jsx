import React from 'react';
import usersData from '../../data/usersProfilesData';

import '../../scss/home/ProjectItem.scss';

const ProjectItem = props => {
  const {
    assignedTo, title, author, price
  } = props.order;
  const {
    tag
  } = props;
  const Tag = `${tag}`;
  return (
    <Tag className="project d-flex">
      <img src={usersData[assignedTo].avatar} alt="avatar" width="37" height="37" />
      <div className="project-data">
        <p className="project-title ellipsis">{title}</p>
        <div className="ellipsis">
          <span>{author}</span>
          <span>{`$${price}`}</span>
        </div>
      </div>
        <button className="project-options">
          <i className="fa fa-ellipsis-v" />
        </button>
    </Tag>
  );
};

export default ProjectItem;
