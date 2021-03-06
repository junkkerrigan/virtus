import React from 'react';
import { Link } from 'react-router-dom';
import Notifications from './Notifications';
import UserMenu from './UserMenu';

import '../../../scss/fixed-layout/header/FixedHeader.scss';

import mainLogo from '../../../images/main-logo.png';

// TODO: search

const FixedHeader = () => (
  <header className='fixed-header'>

    <h1>
      <Link to='/work' className='main-logo d-flex'>
        <img src={mainLogo} alt='main logo' width='123' height='20' />
      </Link>
    </h1>
    <div className='d-flex align-items-center'>
      <Link to='/add-project' className='add-project d-flex'>
          Add
        <i className='fa fa-plus' />
      </Link>
      <button className='search'>
        <i className='fa fa-search' />
      </button>
      <Notifications />
      <UserMenu />
    </div>

  </header>
);

export default FixedHeader;
