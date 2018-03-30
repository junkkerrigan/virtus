import React from 'react';
import { Line } from 'rc-progress';
import usersData from '../../data/usersProfilesData';

import '../../scss/work/Project.scss';

const determineColor = progress => {
  if (progress<=40) return '#e2e3e8';
  else if (progress<=90) return '#2196f3';
  return '#4caf50';
};

const determineProgress = progress => {
  if (progress<=40) return 'started';
  else if (progress<=90) return 'in-work';
  return 'completed';
};

const Project = props => {
  const {
    title, author, price, deadline, left, timeSpent, progress, status, assignedTo
  } = props.order;
  const {
    avatar, role, name
  } = usersData[assignedTo];
  return (
    <li className={`project ${determineProgress(progress)}`}>
      <div className='project-data d-flex'>
        <p className='ellipsis'>{title}</p>
        <span className='project-details ellipsis'>{author}</span>
      </div>
      <div className='project-data d-flex'>
        <span>{'$' + price}</span>
      </div>
      <div className='project-data d-flex'>
        <p className='ellipsis'>{deadline}</p>
        <span className='project-details ellipsis'>{left? left + ' left' : 'Completed'}</span>
      </div>
      <div className='project-data d-flex'>
        <span>{timeSpent + ' hours'}</span>
      </div>
      <div className='project-data d-flex'>
        <span>{progress + '%'}</span>
        <div className='project-progress'>
          <Line
            percent={progress}
            strokeWidth='5'
            trailWidth='5'
            strokeColor={determineColor(progress)}
            trailColor='#585c6f'
          />
        </div>
      </div>
      <div className='project-data d-flex'>
        <span className='ellipsis'>{status}</span>
      </div>
      <div className='project-data d-flex'>
        <img src={avatar} />
        <div>
          <p className='ellipsis'>{name}</p>
          <span className='ellipsis project-details'>{role}</span>
        </div>
      </div>
    </li>
  );
};

export default Project;



